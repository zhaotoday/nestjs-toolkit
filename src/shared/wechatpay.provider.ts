import { Injectable } from "@nestjs/common";
import * as WeChatPay from "wechatpay.js";
import { WeChatPayInterface } from "../interfaces/wechatpay.interface";
import { Request } from "express";
import { WxUserLoginType } from "..";

@Injectable()
export class WeChatPayProvider {
  public weChatPay: WeChatPay;

  private _config: WeChatPayInterface;

  config(options: WeChatPayInterface): WeChatPayProvider {
    this._config = options;
    return this;
  }

  init({ type = WxUserLoginType.Mp } = {}): WeChatPayProvider {
    const { mp, oa, merchant } = this._config;

    this.weChatPay = new WeChatPay({
      appid: type === WxUserLoginType.Mp ? mp.appId : oa.appId,
      mch_id: merchant.mchId,
      key: merchant.secret
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
      notify_url: notifyUrl
    });

    return { unifiedOrder, extra };
  }

  sign(params) {
    return this.weChatPay.sign(params);
  }

  async parseXml(req: Request): Promise<any> {
    return this.weChatPay.parseXml(req);
  }
}
