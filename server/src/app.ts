import 'reflect-metadata'
import 'express-async-errors'
import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { routes } from './routes'
import { errorMiddleware } from './middlewares/ErrorMiddleware'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
app.use(errorMiddleware)

export { app }
