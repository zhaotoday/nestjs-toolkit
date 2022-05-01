import { Injectable } from "@nestjs/common";
import * as bcrypt from "bcryptjs";
import * as dayjs from "dayjs";

@Injectable()
export class HelpersProvider {
  sleep(time) {
    return new Promise((resolve) => {
      setTimeout(resolve, time);
    });
  }

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
          id: +req.path.match(findByPkOrUpdateReg)[1],
        };

      default:
        return {};
    }
  }

  async getDeletedIds(repository, ids): Promise<number[]> {
    const deletedRes = await repository.findAll({
      paranoid: false,
      where: {
        id: { $in: ids },
        deletedAt: { $not: null },
      },
    });

    return deletedRes[0] ? deletedRes.map((item) => item.id) : [];
  }

  entityToRepository(entity) {
    const { name } = entity;
    return `${name.charAt(0).toLowerCase()}${name.substr(1)}Repository`;
  }

  moduleToPath(module) {
    const { name } = module;
    return `${name.charAt(0).toLowerCase()}${name.substr(1, name.length - 7)}`;
  }

  getItem(items, key, val) {
    return items && items.length
      ? items.find((item) => item[key] === val) || {}
      : {};
  }
}
