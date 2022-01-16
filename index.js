const express = require("express");
const http = require("http");

const app = express();  
const server = http.Server(app);

app.use(express.static("public")); // Serve our static assets from /public
server.listen(8080, () => console.log("Server started"));