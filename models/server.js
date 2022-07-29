import express from 'express'
import cors from 'cors'
import usersRouter from '../routes/v1/users.route.js'

export default class Server {
  constructor() {
    this.app = express()
    this.port = process.env.PORT || 3000

    // Middlewares
    this.middleware()
    // routes my app
    this.routes()
  }

  middleware() {
    // CORS
    this.app.use(cors())

    //Lectura y parseo de datos JSON
    this.app.use(express.json())

    // direct to index.html
    this.app.use(express.static('public'))
  }

  routes() {
    this.app.use('/api/v1/users', usersRouter)
  }

  start() {
    this.app.listen(this.port, () =>
      console.log(`Server is running on port ${this.port}`)
    )
  }
}
