import {
  Controller,
  Headers,
  Inject,
  Post,
  Res,
  UnauthorizedException,
  UploadedFile,
  UseInterceptors
} from "@nestjs/common";
import { FileDto } from "../../../dtos/file.dto";
import { File } from "../../../entities/file.entity";
import { Crud } from "../../../decorators/crud.decorator";
import { Response } from "express";
import { FileInterceptor } from "@nestjs/platform-express";
import {
  ApiBody,
  ApiConsumes,
  ApiHeader,
  ApiOperation,
  ApiProperty,
  ApiTags
} from "@nestjs/swagger";
import dayjs = require("dayjs");
import { v4 as uuidv4 } from "uuid";
import * as fs from "fs";
import { AdminBaseController } from "../admin-base.controller";

class ActionUploadDto {
  @ApiProperty({ type: "string", format: "binary" })
  readonly file: any;
}

@ApiTags("文件管理")
@ApiHeader({
  name: "Authorization",
  description: "Auth token"
})
@Crud({
  Dto: FileDto
})
@Controller()
export class FilesController extends AdminBaseController {
  @Inject("fileRepository")
  public repository: typeof File;

  @Post("actions/upload")
  @ApiOperation({
    summary: "上传"
  })
  @UseInterceptors(FileInterceptor("file"))
  @ApiConsumes("multipart/form-data")
  @ApiBody({
    description: "文件",
    type: ActionUploadDto
  })
  async upload(
    @Headers("authorization") authorization,
    @UploadedFile() file,
    @Res() res: Response
  ): Promise<void> {
    try {
      const { originalname: name, mimetype: type, size, buffer } = file;
      const uuid = uuidv4();
      const date = dayjs().format("YYYY-MM-DD");
      const ext = name.split(".").pop();
      const saveDir = `public/files/${date}`;
      const saveName = `${uuid}.${ext}`;

      !fs.existsSync(saveDir) && fs.mkdirSync(saveDir);

      const ws = fs.createWriteStream(`${saveDir}/${saveName}`);

      ws.write(buffer);

      res.json({
        data: await this.repository.create({
          name,
          type,
          ext,
          size,
          uuid,
          dir: date
        })
      });
    } catch (e) {
      throw new UnauthorizedException();
    }
  }
}
