import { prisma } from '@config/prisma'
import {Products} from '@prisma/client'
import AppError from 'src/error/AppError';

interface PropsParams{
  productname: string;
  categoryid: string;
  quantity: number;
  price: number
}

export class CreateProductService {

 async execute ({productname,categoryid,quantity,price}:PropsParams):Promise<Products> {

  const productExists = await prisma.products.findFirst({where:{productname}})
  if(productExists){
    throw new AppError('Já existe um produto com este nome')
  }

  const product = await prisma.products.create({
    data:{
      productname,
      categoryid,
      quantity,
      price
    }
  })
  return product
 }
 
}
