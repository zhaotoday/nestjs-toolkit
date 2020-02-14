import { Module } from "@nestjs/common";
import { WxUsersController } from "./wx-users.controller";

@Module({
  controllers: [WxUsersController]
})
export class WxUsersModule {}
