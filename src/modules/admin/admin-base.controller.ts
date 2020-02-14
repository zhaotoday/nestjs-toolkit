import { BaseController } from "../../core/base.controller";
import { config } from "../../config";

export class AdminBaseController extends BaseController {
  constructor() {
    super();

    this.requiresAuth = false;
    this.jwtConfig = config.jwt.admin;
  }
}
