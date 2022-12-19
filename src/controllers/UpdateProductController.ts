import { UpdateProductService } from "@models/UpdateProduct";
import { Request, Response } from "express";


export class UpdateProductController{
  async handle (request: Request, response:Response) {
    const propsParams = request.body
    const {productid}=request.params

    const service = new UpdateProductService()

    const res = await service.execute({productid,...propsParams})

    return response.status(201).json(res)
  }
}
