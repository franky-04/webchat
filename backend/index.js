const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const programmingLanguagesRouter = require('./src/routes/programmingLanguages.route');
const server = require('socket.io');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (req, res) => {
  res.json({'message': 'ok'});
})

app.use('/programming-languages', programmingLanguagesRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({'message': err.message});
  
  return;
});

const io = new server.Server(port);

io.on("connection", (socket) => {
  socket.emit("chat message","Ciao, scrivi qualcosa...");

  socket.on("chat message", (arg) => {
    console.log(`Hai ricevuto: ${arg}`);

    io.sockets.emit("chat message", (arg.toUpperCase()));
  })

  
})


// app.listen(port, '0.0.0.0', () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// });
