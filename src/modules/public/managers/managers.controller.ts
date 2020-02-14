import {
  Body,
  Controller,
  Inject,
  NotFoundException,
  Post,
  Res
} from "@nestjs/common";
import { PublicBaseController } from "../public-base.controller";
import { Manager } from "../../../entities/manager.entity";
import { ApiProperty } from "@nestjs/swagger";
import { HelpersProvider } from "../../../shared/helpers.provider";
import { Response } from "express";
import { Crud } from "../../../decorators/crud.decorator";
import { ManagerDto } from "../../../dtos/manager.dto";

class ActionLoginDto {
  @ApiProperty()
  readonly username: string;

  @ApiProperty()
  readonly password: string;
}

@Controller()
@Crud({
  Dto: ManagerDto
})
export class ManagersController extends PublicBaseController {
  @Inject("managerRepository")
  repository: typeof Manager;

  constructor(public helpersProvider: HelpersProvider) {
    super();
  }

  @Post("actions/login")
  async login(
    @Body() body: ActionLoginDto,
    @Res() res: Response
  ): Promise<void> {
    const { username, password } = body;
    const findRes = await this.repository.findAll({
      attributes: ["id", "username", "password", "roles"],
      where: { username }
    });

    if (
      findRes[0] &&
      this.helpersProvider.comparePassword(password, findRes[0].password)
    ) {
      const manager = {
        id: findRes[0].id,
        username,
        roles: findRes[0].roles
      };

      res.json({
        data: {
          manager,
          token: await this.sign(manager)
        }
      });
    } else {
      throw new NotFoundException("账号或密码错误");
    }
  }
}
