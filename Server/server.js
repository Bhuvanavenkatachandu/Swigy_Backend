const express = require('express');
const dotenv=require('dotenv');
const mongoose=require('mongoose');
const vendorRoutes=require('./routes/vendorRoutes');
const bodyParser=require('body-parser');
const firmRoutes=require('./routes/firmRoutes');
const productRoutes=require('./routes/productRoutes');
const path=require('path');
const app=express();

const PORT=4000;

dotenv.config();

app.use(bodyParser.json());
app.use('/vendor',vendorRoutes);
app.use('/firm',firmRoutes);
app.use('/product',productRoutes);
app.use('/uploads',express.static('uploads'));

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Database connected successfully..."))
.catch((error) => {
  console.error("MongoDB connection failed:");
  console.error(error.message);
});

app.listen(PORT,()=>{
    console.log(`Server Started running at ${PORT} `);
});

app.use(`/home`,(req,res)=>{
    res.send("<h1> Welcome");
});