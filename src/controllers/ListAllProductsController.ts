import { ListAllProductService } from "@models/ListAllProducts";
import { Request, Response } from "express";


export class ListAllProductsController{
  async handle (request: Request, response:Response) {
    
    const service = new ListAllProductService()

    const res = await service.execute()

    return response.status(201).json(res)
  }
}
