import { Module } from "@nestjs/common";
import { RouterModule, Routes } from "nest-router";
import { ManagersModule } from "./managers/mangers.module";
import { WxUsersModule } from "./wx-users/wx-users.module";

const routes: Routes = [
  {
    path: "/",
    children: [
      {
        path: "managers",
        module: ManagersModule
      },
      {
        path: "wxUsers",
        module: WxUsersModule
      }
    ]
  }
];

@Module({
  imports: [RouterModule.forRoutes(routes), ManagersModule, WxUsersModule],
  providers: []
})
export class PublicModule {}
