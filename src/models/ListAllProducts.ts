import { prisma } from '@config/prisma'
import {Products} from '@prisma/client'
//import db from '../config/db'



export class ListAllProductService {

 async execute ():Promise<Products[]>{
  const products = await prisma.products.findMany()

  return products

  /*
  const products = await db.query("SELECT * FROM products ORDER BY productname ASC")
  return products.rows
  */ 
 }
 
}
