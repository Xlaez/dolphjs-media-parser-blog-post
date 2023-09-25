const { mediaParser } = require("@dolphjs/core");
const express = require("express");

const server = express();

server.use(express.urlencoded({ extended: true }));

const mediaParserOptions = {
  fieldname: "upload",
  type: "single",
  storage: {},
  allowedExtensions: [".png", ".jpg", ".jpeg"],
};

server.post("/upload", mediaParser(mediaParserOptions), (req, res) => {
  const file = req.file;
  console.log(file);
  res.status(200).json(file);
});

const runApp = (port) => {
  server.listen(port);
  console.log("Server started at port: ", port);
};

runApp(3030);
