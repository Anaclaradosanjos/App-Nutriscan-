const express = require("express");
const app = express();

const userRoutes = require("./routes/users");
const productRoutes = require("./routes/products");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Servidor funcionando!");
});

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
