import { Router } from 'express'

import usuarioRouter from './usuario'
import catgoriaRouter from './categoria'

const routes = Router()

routes.use('/usuarios', usuarioRouter)
routes.use('/categorias', catgoriaRouter)

export default routes
