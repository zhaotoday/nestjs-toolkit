import { Request, Response } from "express";
import { Injectable, NestMiddleware } from "@nestjs/common";

@Injectable()
export class QueryMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: Function) {
    const { where, offset, limit, include } = req.query;

    if (where) {
      req.query.where = JSON.parse(where);
    }

    if (offset) {
      req.query.offset = parseInt(offset);
    }

    if (limit) {
      req.query.limit = parseInt(limit);
    }

    if (include) {
      req.query.include = JSON.parse(req.query.include);
    }

    next();
  }
}
