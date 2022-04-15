const server = require("fastify")({
  logger: {
    prettyPrint: {
      translateTime: 'SYS:HH:MM:ss Z'
    }
  }
})
const fastifyIO = require("fastify-socket.io");
const fastifyCors = require("fastify-cors");

const port = process.env.PORT || 3000
	
server.register(fastifyCors, { 
  origin: '*',
})

server.register(fastifyIO, {
  cors: {
    origin: "*",
  },
})

server.ready().then(() => {
  // we need to wait for the server to be ready, else `server.io` is undefined
  
  server.io.on("connection", (socket) => {
    server.io.emit("chat message","Ciao, scrivi qualcosa...")
  });
  
  server.io.on("chat message", (arg) => {
    console.log(`Hai ricevuto: ${arg}`)

    server.io.emit("chat message", (arg.toUpperCase()))
  })
})

server.listen(port, '0.0.0.0', (err, address) => {
  if (err) {
    server.log.error(err)
    process.exit(1)
  }
  server.log.info(`Sancho-chat working on ${address}`)
})