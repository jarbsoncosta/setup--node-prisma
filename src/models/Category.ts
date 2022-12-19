import { prisma } from '@config/prisma'
import {Category} from '@prisma/client'
import AppError from 'src/error/AppError'



export class CreateCategoryService {

 async execute (name:string):Promise<Category> {

  const categotyExists = await prisma.category.findFirst({where:{name}})
  if(categotyExists){
    throw new AppError('Já existe essa categoria')
  }

  const category = await prisma.category.create({
    data:{
      name
    }
  })
  return category
 }
 
 
}
