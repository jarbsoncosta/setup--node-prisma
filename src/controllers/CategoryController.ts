import { CreateCategoryService } from "@models/Category";
import { Request, Response } from "express";


export class CategoryController{
  async handle (request: Request, response:Response) {
    const {name} = request.body

    const service = new CreateCategoryService()

    const res = await service.execute(name)

    return response.status(201).json(res)
  }
}
