import { Injectable } from "@nestjs/common";
import * as WeChatPay from "wechatpay.js";
import { WeChatPayInterface } from "../interfaces/wechatpay.interface";
import { Request } from "express";

@Injectable()
export class WeChatPayProvider {
  public weChatPay: WeChatPay;

  private _config: WeChatPayInterface;

  config(options: WeChatPayInterface): WeChatPayProvider {
    this._config = options;
    return this;
  }

  init(): WeChatPayProvider {
    const { mp, paymentMerchant } = this._config;

    this.weChatPay = new WeChatPay({
      appid: mp.appId,
      mch_id: paymentMerchant.mchId,
      key: paymentMerchant.secret
    });

    return this;
  }

  async createUnifiedOrder({ notifyUrl, openId, outTradeNo, amount }) {
    const { paymentMerchant } = this._config;
    const { unifiedOrder, ...extra } = await this.weChatPay.createUnifiedOrder({
      openid: openId,
      body: paymentMerchant.body,
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
