
import { DeleteProductIdController } from '@controllers/DeleteProductIdController'
import { ListAllProductsController } from '@controllers/ListAllProductsController'
import { ProductController } from '@controllers/ProductController'
import { ShowProductIdController } from '@controllers/ShowProductIdController'
import { UpdateProductController } from '@controllers/UpdateProductController'

import { Router } from 'express'

const productRouter = Router()

productRouter.post('/', new ProductController().handle)
productRouter.get('/', new ListAllProductsController().handle)
productRouter.get('/:productid', new ShowProductIdController().handle)
productRouter.put('/:productid', new UpdateProductController().handle)
productRouter.delete('/:productid', new DeleteProductIdController().handle)


export default productRouter