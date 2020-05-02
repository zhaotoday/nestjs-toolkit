import { Injectable } from "@nestjs/common";

const Jimp = require("jimp");

@Injectable()
export class ImageUtil {
  public Image: any;

  constructor() {
    this.Image = Jimp;
  }
}
