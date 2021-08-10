// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const helmet = require("helmet");
// const morgan = require("morgan");

// const app = express();

// const ads = [{ title: "Hello, world (again)!" }];

// app.use(helmet());

// app.use(bodyParser.json());

// app.use(cors());

// app.use(morgan("combined"));

// app.get("/", (req, res) => {
//   res.send(ads);
// });

// app.listen(3001, () => {
//   console.log("listening on port 3001");
// });

const express = require("express");
const fs = require("fs");

const app = express();

const ads = [{ title: "Hello, world (again)!" }];

app.get("/", (req, res) => {
  res.send(ads);
});

app.get("/list_movies", (req, res) => {
  fs.readFile(__dirname + "/" + "movies.json", "utf8", (err, data) => {
    res.end(data);
  });
});

app.listen(3001, () => {
  console.log("app listening at http://localhost:3001");
});
