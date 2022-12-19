import { ShowProductIdService } from "@models/ShowProductId";
import { Request, Response } from "express";


export class ShowProductIdController{
  async handle (request: Request, response:Response) {
    const {productid} = request.params
    const service = new ShowProductIdService()

    const res = await service.execute(productid)

    return response.status(201).json(res)
  }
}
