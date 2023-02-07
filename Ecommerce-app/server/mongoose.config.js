require("dotenv").config();
const mongoose = require("mongoose");
const conenctionStr = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PW}@cluster0.3fk8faw.mongodb.net/ecommerce_app?retryWrites=true&w=majority`;
mongoose
  .connect(conenctionStr, { useNewUrlparser: true })
  .then(() =>
    console
      .log("mongodb also joined the connected group ")
  );


  mongoose.connection.on("error", err=>{
    console.log(err)
  })

// M018ht22UKWJ9q71
// ecommerce_app
