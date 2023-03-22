import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello Node!!!!</h1>\n");
});
app.listen(port, hostname, () => {
  console.log(`Server running at http://0.0.0.0:3000/`);
});
