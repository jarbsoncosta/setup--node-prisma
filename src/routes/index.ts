
import { Router } from 'express'
import categoryRouter from './categories.routes'
import productRouter from './products.routes'


const routes = Router()


routes.use("/api/category", categoryRouter)
routes.use("/api/product", productRouter)

export default routes
