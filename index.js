const express = require("express");
const http = require("http");

const app = express();  
const server = http.Server(app);

app.use(express.static("public")); // Serve our static assets from /public
const port = process.env.PORT || 8080;
server.listen(port, () => console.log("Server started"));