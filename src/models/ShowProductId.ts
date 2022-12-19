import { prisma } from '@config/prisma'
import {Products} from '@prisma/client'


export class ShowProductIdService {

 async execute (productid:string):Promise<Products>{
  const product = await prisma.products.findFirst({where:{productid}})

  return product

  
 }
 
}
