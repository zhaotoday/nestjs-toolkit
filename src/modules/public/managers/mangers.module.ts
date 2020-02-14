import { Module } from "@nestjs/common";
import { ManagersController } from "./managers.controller";

@Module({
  controllers: [ManagersController]
})
export class ManagersModule {}
