import http from "http";
import fs from "fs";

let count = 0;

const server = http.createServer((req, res) => {
  count++;
  console.log("node : ", count);

  res.end(fs.readFileSync("./main.html"));
});

server.listen(3000, (err) => {
  if (err) return console.log(err);

  console.log("server is live now!");
});
