

import { CategoryController } from '@controllers/CategoryController'
import { Router } from 'express'

const categoryRouter = Router()

categoryRouter.post('/', new CategoryController().handle)


export default categoryRouter