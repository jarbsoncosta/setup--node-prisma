import express from 'express'
import db from '../config/db'



const app = express()

app.get('/', async (request, response) => {

    await db.query(
      "SELECT * FROM products ORDER BY productname ASC", (error, result)=>{
        if(error){
          throw error
        }
        response.status(200).json({
          total:result.rows.length,
          products:result.rows,
          
        })
      }
    )
    
  })
  
  
  app.post('/category', async (request, response)=>{
    const {id,name }= request.body
  
    const resp = await db.query(
      'INSERT INTO categories (id name) VALUES ($1,$2) RETURNING *', [id, name]
    )
    response.status(201).json(resp.rows[0])  
  })
  
  
  
  app.post('/create', async  (request, response)=>{
    const {productname, quantity, price, categoryid} = request.body
    
    const resp = await db.query(
      `SELECT * FROM products WHERE productname = '${productname}'`, [] , async (error, result)=>{
        if(error){
         console.log(error)
         return
          
        }      
       
      }    
    )
  
    if(resp.rows.length === 1 ){
     return response.status(400).json({
        error: true,
        message:"Ja existe um produto com este nome"
      })
      
     }
       const product = await db.query('INSERT INTO products (productname, quantity, price, categoryid) VALUES ($1, $2, $3, $4) RETURNING *', [productname, quantity, price, categoryid])
       console.log(product.rows[0].productname)
       response.status(201).json(product.rows[0])  
   })
  
  app.put('/product/:productid', async (request, response)=>{
    const {productname, quantity, price} = request.body
    const {productid} = request.params
  
     
    const query = await db.query(`UPDATE products SET productname = '${productname}', quantity = ${quantity}, price= ${price} WHERE productid = '${productid}' RETURNING *`)
    console.log(query.rows[0])
    response.status(201).json(query.rows[0]) 
  
  })
  
  app.delete('/product/:productid', async (request, response)=>{
     const {productid} = request.params   
  
     const productExists = await db.query(
      `SELECT * FROM products WHERE productId = ${productid}`, [] , async (error, result)=>{
        if(error){
         console.log(error)
         return
          
        }      
       
      }    
    )
    if(productExists.rows.length === 0 ){
      return response.status(400).json({
         error: true,
         message:"Produto não encontrado"
       })
       
      }
  
      await db.query(`DELETE FROM products WHERE productid = '${productid}'`)   
    response.status(201).json({
      message: "Produto deletado"
    }) 
  
  })
  