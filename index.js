const fs = require("fs");
const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

const express = require("express");
const morgan = require("morgan");

const server = express();

//bodyParser
server.use(express.json()); //it only read json object
// server.use(express.urlencoded());
server.use(morgan("tiny"));
// server.use(express.static("public")); //serving static files from public folder

const auth = (req, res, next) => {
  console.log(req.query);

  if (req.body.password == "123") {
    next();
  } else {
    res.sendStatus(401);
  }
  next();
};

// server.use(auth);           -->it applies on all the the routes

// API - Endpoint - Route

//Create POST

server.get("/demo", auth, (req, res) => {
  res.json({ type: "GET" });
});

server.post("/products", (req, res) => {
  console.log(req.body);
  products.push(req.body);
  res.status(201).json(req.body);
});

// Read
server.get("/products", (req, res) => {
  res.json(products);
});

// find by id
server.get("/products/:id", (req, res) => {
  const id = +req.params.id;
  const product = products.find((item) => item.id === id);
  res.json(product);
});

// Update
server.put("/products/:id", (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((item) => item.id === id);
  products.splice(productIndex, 1, { ...req.body, id: id });
  res.status(201).json();
});
// partial Update
server.patch("/products/:id", (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((item) => item.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1, { ...product, ...req.body });
  res.status(201).json();
});
// Delete
server.delete("/products/:id", (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((item) => item.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1);
  res.status(201).json(product);
});

server.listen(8080, () => {
  console.log("server started");
});
