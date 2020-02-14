import { Body, Controller, Inject, Post, Res } from "@nestjs/common";
import { PublicBaseController } from "../public-base.controller";
import { WxUserDto } from "../../../dtos/wx-user.dto";
import { WxUser } from "../../../entities/wx-user.entity";
import { Response } from "express";
import { ApiProperty } from "@nestjs/swagger";
import { WxUsersService } from "../../../services/wx-users.service";
import { Crud } from "../../../decorators/crud.decorator";

class ActionGetUserInfoDto {
  @ApiProperty()
  readonly code: string;

  @ApiProperty()
  readonly encryptedData: string;

  @ApiProperty()
  readonly iv: string;
}

@Controller()
@Crud({
  Dto: WxUserDto
})
export class WxUsersController extends PublicBaseController {
  @Inject("wxUserRepository")
  public repository: typeof WxUser;

  constructor(public service: WxUsersService) {
    super();
  }

  @Post("actions/getUserInfo")
  async actions(
    @Body() body: ActionGetUserInfoDto,
    @Res() res: Response
  ): Promise<void> {
    const { code, encryptedData, iv } = body;
    const {
      openId,
      unionId,
      nickName,
      gender,
      language,
      city,
      province,
      country,
      avatarUrl
    } = await this.service.getDecryptedData({ code, encryptedData, iv });
    const userInfo = {
      openId,
      unionId,
      nickName,
      gender,
      language,
      city,
      province,
      country,
      avatarUrl
    };

    let findAllRes = await this.repository.findAll({ where: { unionId } });

    if (findAllRes[0]) {
      await this.repository.update(userInfo, {
        where: {
          id: findAllRes[0].id
        }
      });
    } else {
      await this.repository.create({ body: userInfo });
    }

    findAllRes = await this.repository.findAll({ where: { unionId } });

    const wxUser = {
      id: findAllRes[0].id,
      nickName,
      avatarUrl,
      phoneNumber: findAllRes[0].phoneNumber
    };

    res.json({
      data: {
        wxUser,
        token: await this.sign({ ...wxUser, openId })
      }
    });
  }
}
