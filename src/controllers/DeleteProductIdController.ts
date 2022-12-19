import { DeleteProductIdService } from "@models/DeleteProductId";
import { Request, Response } from "express";


export class DeleteProductIdController{
  async handle (request: Request, response:Response) {
    const {productid}= request.params
    const service = new DeleteProductIdService()

    const res = await service.execute(productid)

    return response.status(201).json(res)
  }
}
