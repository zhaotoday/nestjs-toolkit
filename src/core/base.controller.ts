import * as jwt from "jsonwebtoken";
import { JwtOptionsInterface } from "../interfaces/jwt-options.interface";
import { OrderAction } from "../enums/order-action.enum";

export class BaseController {
  public jwtConfig: JwtOptionsInterface;

  public repository: any;

  public include: Object;

  public hasOrder: boolean = false;

  sign(data): Promise<string> {
    return jwt.sign({ data }, this.jwtConfig.secret, {
      expiresIn: this.jwtConfig.expiresIn
    });
  }

  verify(authorization): Promise<any> {
    return jwt.verify(
      (authorization || "").substring(7),
      this.jwtConfig.secret
    );
  }

  async findPrev({
    id = "",
    attributes = null,
    where = null,
    order = [["order", "ASC"]]
  } = {}) {
    if (id) {
      where = { ...where, id: { $gt: id } };
    }
    return (
      (await this.repository.findAll({ attributes, where, order }))[0] || null
    );
  }

  async findNext({
    id = "",
    attributes = null,
    where = null,
    order = [["order", "DESC"]]
  } = {}) {
    if (id) {
      where = { ...where, id: { $lt: id } };
    }
    return (
      (await this.repository.findAll({ attributes, where, order }))[0] || null
    );
  }

  async order({ id, action, where = null }): Promise<void> {
    const findByPkRes = await this.repository.findByPk(id);
    const findPrevRes = await this.findPrev({
      id,
      where: {
        ...where,
        order: { $gt: findByPkRes.order }
      }
    });
    const findNextRes = await this.findNext({
      id,
      where: {
        ...where,
        order: { $lt: findByPkRes.order }
      }
    });

    if (action === OrderAction.ToPrev && findPrevRes) {
      await this.repository.update(
        { order: findPrevRes.order },
        {
          where: { id }
        }
      );

      await this.repository.update(
        { order: findByPkRes.order },
        {
          where: { id: findPrevRes.id }
        }
      );
    } else if (action === OrderAction.ToNext && findPrevRes) {
      await this.repository.update(
        { order: findNextRes.order },
        { where: { id } }
      );

      await this.repository.update(
        { order: findByPkRes.order },
        { where: { id: findNextRes.id } }
      );
    }
  }
}
