import { Injectable } from "@nestjs/common";
import { BaseService } from "../core/base.service";
import * as Wsa from "wx-server-api";
import { config } from "../config";
import { WxUserDto } from "../dtos/wx-user.dto";

const wsa = Wsa({ mp: config.mp });

@Injectable()
export class WxUsersService extends BaseService {
  async getDecryptedData({ code, encryptedData, iv }): Promise<WxUserDto> {
    const { session_key: sessionKey } = await wsa.sns.codeToSession({ code });
    return wsa.utils.getDecryptedData({ sessionKey, encryptedData, iv });
  }
}
