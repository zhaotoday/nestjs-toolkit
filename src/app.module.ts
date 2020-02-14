import { Module } from "@nestjs/common";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";
import { SharedModule } from "./shared/shared.module";
import { AdminModule } from "./modules/admin/admin.module";
// import { PublicModule } from "./modules/public/public.module";

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "public")
    }),
    SharedModule,
    AdminModule,
    // PublicModule
  ],
  providers: [],
  exports: []
})
export class AppModule {}
