import Koa from 'koa'
import cors from '@koa/cors'
import utils from 'utils'

const PORT = process.env.PORT || 5002

const app = new Koa()

app.use(cors())

app.use((ctx) => {
  ctx.body = { message: utils.isEmpty(null) }
})

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`)
})
