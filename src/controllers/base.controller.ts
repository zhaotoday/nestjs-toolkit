import * as jwt from "jsonwebtoken";
import { FindAttributeOptions, IncludeOptions } from "sequelize";

export class BaseController {
  public jwtConfig;

  public repository;

  public include: IncludeOptions;

  public attributes: FindAttributeOptions;

  public orderable: boolean = false;

  sign(data): Promise<string> {
    return jwt.sign({ data }, this.jwtConfig.secret, {
      expiresIn: this.jwtConfig.expiresIn,
    });
  }

  verify(authorization): Promise<any> {
    return jwt.verify(
      (authorization || "").substring(7),
      this.jwtConfig.secret
    );
  }
}
