
import { CreateProductService } from "@models/Product";
import { Request, Response } from "express";


export class ProductController{
  async handle (request: Request, response:Response) {
    const propsParams = request.body

    const service = new CreateProductService()

    const res = await service.execute({...propsParams})

    return response.status(201).json(res)
  }
}
