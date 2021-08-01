import { Injectable } from "@nestjs/common";
import * as WeChatPay from "wechatpay.js";
import { WeChatPayInterface } from "../interfaces/wechatpay.interface";
import { Request } from "express";
import { WxUserLoginType } from "../enums/wx-user-login-type.enum";

@Injectable()
export class WeChatPayProvider {
  public weChatPay: WeChatPay;

  public wxUserLoginType: string;

  private _config: WeChatPayInterface;

  config(options: WeChatPayInterface): WeChatPayProvider {
    this._config = options;
    return this;
  }

  init({ wxUserLoginType = WxUserLoginType.Mp } = {}): WeChatPayProvider {
    const { mp, oa, app, merchant } = this._config;

    this.wxUserLoginType = wxUserLoginType;

    this.weChatPay = new WeChatPay({
      appid: (() => {
        switch (wxUserLoginType) {
          case WxUserLoginType.Mp:
            return mp.appId;
          case WxUserLoginType.Oa:
            return oa.appId;
          case WxUserLoginType.App:
            return app.appId;
          default:
            return "";
        }
      })(),
      mch_id: merchant.mchId,
      key: merchant.secret,
    });

    return this;
  }

  async createUnifiedOrder({ notifyUrl, openId, outTradeNo, amount }) {
    const { merchant } = this._config;
    const { unifiedOrder, ...extra } = await this.weChatPay.createUnifiedOrder({
      openid: openId,
      body: merchant.body,
      out_trade_no: outTradeNo,
      total_fee: amount * 100,
      spbill_create_ip: "123.12.12.123",
      notify_url: notifyUrl,
      trade_type: this.wxUserLoginType === WxUserLoginType.App ? "APP" : "JSAPI",
    });

    return { unifiedOrder, extra };
  }

  transfer({ agentOptions, openId, partnerTradeNo, amount, desc }) {
    return this.weChatPay.transfer(agentOptions, {
      openid: openId,
      partner_trade_no: partnerTradeNo,
      amount: amount * 100,
      desc,
      spbill_create_ip: "123.12.12.123",
    });
  }

  sign(params) {
    return this.weChatPay.sign(params);
  }

  async parseXml(req: Request): Promise<any> {
    return this.weChatPay.parseXml(req);
  }
}
