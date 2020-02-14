import { Module } from "@nestjs/common";
import { RouterModule, Routes } from "nest-router";
import { WxUsersModule } from "./wx-users/wx-users.module";
import { FilesModule } from "./files/files.module";

const routes: Routes = [
  {
    path: "/admin",
    children: [
      {
        path: "wxUsers",
        module: WxUsersModule
      },
      {
        path: "files",
        module: FilesModule
      }
    ]
  }
];

@Module({
  imports: [RouterModule.forRoutes(routes), WxUsersModule, FilesModule],
  providers: []
})
export class AdminModule {}
