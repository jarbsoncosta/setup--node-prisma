import { prisma } from '@config/prisma'
import {Products} from '@prisma/client'
import AppError from 'src/error/AppError';

interface PropsParams{
  productid:string;
  productname: string;
  categoryid: string;
  quantity: number;
  price: number
}

export class UpdateProductService {

 async execute ({productid,productname,categoryid,quantity,price}:PropsParams):Promise<Products> {

  const productExists = await prisma.products.findFirst({where:{productid}})
  if(!productExists){
    throw new AppError('Product not found')
  }

  const product = await prisma.products.update({
    where:{
      productid
    },
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
