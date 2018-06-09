const Koa = require(`koa`)
const app = new Koa()

statics: {
  const assets = require(`koa-static`)
  const maxage = 24 * 60 * 60 * 1000
  app.use(assets(`./dist`, {maxage}))
}

const http = require(`http`)
const server = http.createServer(app.callback())
const port = process.env.PORT || 3000

server.listen(port)
console.info(`Listening on ${port}`)
