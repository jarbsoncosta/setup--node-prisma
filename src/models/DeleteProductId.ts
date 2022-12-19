import { prisma } from '@config/prisma'
import AppError from 'src/error/AppError'




export class DeleteProductIdService {

 async execute (productid:string):Promise<void>{

    const productExists = await prisma.products.findFirst({where: {productid}})
    if(!productExists){
        throw new AppError("Produto not found", 404)
    }

  await prisma.products.delete({
    where:{
        productid
    }
  })
 

 }
 
}
