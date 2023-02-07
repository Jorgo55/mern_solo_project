const express = require("express");
const cors = require("cors");
const app = express();
const http = require("http");
const server = http.createServer(app);
require("../server/mongoose.config");
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: "*",
  methods: "*",
});

const User = require("./model/User.model");
const userRoutes = require("../server/routes/User.routes");
const productRoutes = require("./routes/Product.routes");
const imageRoutes = require("./routes/Image.routes")

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/images", imageRoutes)

require("../server/mongoose.config");





server.listen(8000, () => {
  console.log("This damn server finally works :')", 8000);
});
