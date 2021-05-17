const mongoose = require("mongoose")

const connectDB= async () => {
  await mongoose.connect(process.env.MONGODB_URI,{
  useUnifiedTopology:true,
  useNewUrlParser:true,
  useCreateIndex:true,
  useFindAndModify:false
});

console.log ("MongoDB connected");
// .then(()=>console.log("Database connected"))
// .catch((err)=>console.log(err.message)) 

};

module.exports = connectDB;