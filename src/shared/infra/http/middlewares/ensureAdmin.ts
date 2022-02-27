import UsersRepository from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import AppError from "@shared/errors/AppError";
import { NextFunction, Request, Response } from "express";

export async function ensureAdmin(req: Request, res: Response, next: NextFunction) {
    const { id } = req.user;

    const usersRepository = new UsersRepository();

    const thisUser = await usersRepository.findById(id);

    if(!thisUser?.isAdmin) {
        throw new AppError('User isnt admin!');
    }

    return next();
}