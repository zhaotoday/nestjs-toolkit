import { Request, Response } from "express";

export function queryMiddleware(
  req: Request,
  res: Response,
  next: Function
): void {
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
