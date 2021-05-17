require("dotenv").config({ path: "./config.env" });
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/dbConnect");
const errorHandler = require("./middleware/error");

// connecting to database
// require("./config/dbConnect");
connectDB();

const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(express.json());

app.use(cors());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/products", productRoutes);


// error handler 
app.use(errorHandler);

const PORT = process.env.PORT || 4040;


// app.use((error, req, res, next) => {
//   res.status(error.status || 500).json({ error: error.message });
// });



const server = app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));
process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err}`);
  server.close(()=>process.exit(1));

})




//   app.listen(PORT, console.log(`Damn!! Server speedily runs on PORT ${PORT}`));

//   process.on("unhandledRejection", (err, promise) => {
//   console.log(`Logged Error: ${err}`);

//   server.close(()=)
// })