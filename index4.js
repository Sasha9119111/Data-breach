import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded ({extended: true}));

app.post("/submit", (req, res) => {
  console.log(req.body);
})

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

