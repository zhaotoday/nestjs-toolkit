import { Injectable } from "@nestjs/common";
import * as bcrypt from "bcryptjs";
import dayjs from "dayjs";

@Injectable()
export class HelpersProvider {
  getRandom(n): string {
    let ret = "";

    for (let i = 0; i < n; i++) {
      ret += Math.floor(Math.random() * 10);
    }

    return ret;
  }

  getPasswordHash(password): string {
    // 生成 salt 的迭代次数
    const SALT_ROUNDS = 10;
    // 随机生成 salt
    const salt = bcrypt.genSaltSync(SALT_ROUNDS);
    // 获取 hash 值
    return bcrypt.hashSync(password, salt);
  }

  comparePassword(password, passwordHash): boolean {
    return bcrypt.compareSync(password, passwordHash);
  }

  getOrderNo(): string {
    return dayjs().format("YYMMDDHHmmss") + this.getRandom(4);
  }

  parseRequest(req): any {
    const findByPkOrUpdateReg = /^\/(\d+)$/;

    switch (true) {
      case !!req.path.match(findByPkOrUpdateReg):
        return {
          route: `${req.method}(:id)`,
          id: +req.path.match(findByPkOrUpdateReg)[1]
        };

      default:
        return {};
    }
  }
}
