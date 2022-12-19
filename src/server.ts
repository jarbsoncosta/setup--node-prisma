import 'express-async-errors'
import express, { NextFunction, Request, Response } from 'express'
import AppError from './error/AppError'
import routes from './routes'

const app = express()

app.use(express.json())
app.use(routes)


// Tratamento de erros
app.use(
  (
    error: Error,
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message
      })
    }
    console.log(error)
    return response.status(500).json({
      status: 'error',
      message: 'Erro Interno do servidor'

    })
  }
)


app.listen(3333, ()=>{
  console.log('listening on port 3333');
})


