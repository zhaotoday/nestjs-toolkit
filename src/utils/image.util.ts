import { Injectable } from "@nestjs/common";
import { QRCodeRenderersOptions } from "qrcode";

const QRCode = require("qrcode");
const Jimp = require("jimp");

interface CreateQrCodeOptions extends QRCodeRenderersOptions {
  background?: number;
}

@Injectable()
export class ImageUtil extends Jimp {
  async createQrCode(
    text = "",
    options: CreateQrCodeOptions
  ): Promise<ImageUtil> {
    const { margin, width, background } = options;
    const buffer = await QRCode.toBuffer(text, { margin, width });
    const image = await ImageUtil.read(buffer);
    return image.background(background);
  }
}
