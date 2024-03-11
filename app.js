const express = require("express");
const http = require("http");
require("dotenv").config();

const {
  notFoundErr,
  globalErrHandler,
} = require("./middlewares/globalErrHandler");

const openaiController = require("./controllers/openaiController");

//app
const app = express();

//server
const PORT = process.env.PORT || 2020;
const server = http.createServer(app);

//Middlewares
app.use(express.json());

//routes
app.post("/api/v1/chat-with-gpt", openaiController.chatWithGPT3);

//Error Handler
app.use(notFoundErr);
app.use(globalErrHandler);

//connect the server
server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
