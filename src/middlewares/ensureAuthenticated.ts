import { NextFunction, Request } from "express";
import { verify } from "jsonwebtoken";

import AppError from "../errors/AppError";
import UsersRepository from "../modules/accounts/repositories/implementations/UsersRepository";

export async function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if(!authHeader) {
    throw new AppError("Token missing", 401);
  }

  const [, token ] = authHeader.split(" ");  

  try {
    const { sub: user_id } = verify(token, "qg}poN6$!F8d7H");

    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(user_id as string);

    if(!user) {
      throw new AppError("User does not exists!", 401);
    }

    req.user = {
      id: user_id as string,
    };

    console.log(req.user);

    next();
  } catch {
    throw new AppError("Invalid token!", 401);
  }

}