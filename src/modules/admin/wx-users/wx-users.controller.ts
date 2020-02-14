import { Controller, Inject } from "@nestjs/common";
import { WxUserDto } from "../../../dtos/wx-user.dto";
import { WxUser } from "../../../entities/wx-user.entity";
import { AdminBaseController } from "../admin-base.controller";
import { Crud } from "../../../decorators/crud.decorator";
import { ApiHeader, ApiTags } from "@nestjs/swagger";
import { ControllerMethods } from "../../../enums/controller-methods";

@ApiTags("微信用户管理")
@ApiHeader({
  name: "Authorization",
  description: "Auth token"
})
@Crud({
  Dto: WxUserDto,
  methods: [ControllerMethods.FIND_ALL]
})
@Controller()
export class WxUsersController extends AdminBaseController {
  @Inject("wxUserRepository")
  public repository: typeof WxUser;
}
