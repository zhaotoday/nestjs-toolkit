import { Request, Response } from "express";
import { Injectable, NestMiddleware } from "@nestjs/common";

@Injectable()
export class QueryMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: Function) {
    const { where, offset, limit } = req.query;

    if (where) {
      req.query.where = JSON.parse(where);
    }

    if (offset) {
      req.query.offset = parseInt(offset);
    }

    if (limit) {
      req.query.limit = parseInt(limit);
    }

    next();
  }
}
