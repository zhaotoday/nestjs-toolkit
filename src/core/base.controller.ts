import * as jwt from "jsonwebtoken";
import { JwtOptionsInterface } from "../interfaces/jwt-options.interface";

export class BaseController {
  public jwtConfig: JwtOptionsInterface;

  public requiresAuth = false;

  sign(data): Promise<string> {
    return jwt.sign({ data }, this.jwtConfig.secret, {
      expiresIn: this.jwtConfig.expiresIn
    });
  }

  verify(authorization): Promise<object> {
    return jwt.verify(
      (authorization || "").substring(7),
      this.jwtConfig.secret
    );
  }
}
