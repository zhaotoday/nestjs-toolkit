import {
  All,
  Body,
  Delete,
  Get,
  Headers,
  HttpStatus,
  Next,
  Param,
  Post,
  Put,
  Query,
  Req,
  Res,
  UnauthorizedException
} from "@nestjs/common";
import { Response, Request } from "express";
import * as jwt from "jsonwebtoken";
import { QueryDto } from "../dtos/query.dto";
import { JwtOptionsInterface } from "../interfaces/jwt-options.interface";
import { PlaceholderDto } from "../dtos/placeholder.dto";
import { ApiOperation } from "@nestjs/swagger";

export class CrudController {
  constructor(public repository: any) {}

  public jwtConfig: JwtOptionsInterface;

  public requiresAuth = false;

  sign(data): Promise<string> {
    return jwt.sign({ data }, this.jwtConfig.secret, {
      expiresIn: this.jwtConfig.expiresIn
    });
  }

  verify(authorization): Promise<object> {
    return jwt.verify(
      (authorization || "").substring(7),
      this.jwtConfig.secret
    );
  }

  @All()
  async all(
    @Headers("authorization") authorization,
    @Req() req: Request,
    @Res() res: Response,
    @Next() next: Function
  ): Promise<void> {
    if (this.requiresAuth) {
      try {
        await this.verify(authorization);
        next();
      } catch (e) {
        throw new UnauthorizedException();
      }
    } else {
      next();
    }
  }

  @Get()
  @ApiOperation({
    summary: "获取列表"
  })
  private async findAll(
    @Query() query: QueryDto,
    @Res() res: Response
  ): Promise<void> {
    res.json({
      data: {
        total: await this.repository.count(query),
        items: await this.repository.findAll(query)
      }
    });
  }

  @Get(":id")
  @ApiOperation({
    summary: "获取详情"
  })
  async findByPk(@Param("id") id: string, @Res() res: Response): Promise<void> {
    const ret = await this.repository.findByPk(id);

    if (ret) {
      res.json({ data: ret });
    } else {
      res.status(HttpStatus.NOT_FOUND).json();
    }
  }

  @Post()
  @ApiOperation({
    summary: "新增"
  })
  async create(
    @Body() body: PlaceholderDto,
    @Res() res: Response
  ): Promise<void> {
    res.json({ data: await this.repository.create(body) });
  }

  @Put(":id")
  @ApiOperation({
    summary: "编辑"
  })
  async update(
    @Param("id") id: string,
    @Body() body: PlaceholderDto,
    @Res() res: Response
  ): Promise<void> {
    const ret = await this.repository.update(body, { where: { id } });

    if (ret[0]) {
      res.json();
    } else {
      res.status(HttpStatus.NOT_FOUND).json();
    }
  }

  @Delete(":id")
  @ApiOperation({
    summary: "删除"
  })
  async destroy(@Param("id") id: string, @Res() res: Response): Promise<void> {
    const ret = await this.repository.destroy({ where: { id } });

    if (ret) {
      res.json();
    } else {
      res.status(HttpStatus.NOT_FOUND).json();
    }
  }
}
