import { Module } from "@nestjs/common";
import { WxUsersController } from "./wx-users.controller";
import { WxUsersService } from "../../../services/wx-users.service";

@Module({
  providers: [WxUsersService],
  controllers: [WxUsersController]
})
export class WxUsersModule {}
