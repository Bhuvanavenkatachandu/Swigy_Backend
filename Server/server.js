const express = require('express');
const dotenv=require('dotenv');
const mongoose=require('mongoose');
const vendorRoutes=require('./routes/vendorRoutes');
const bodyParser=require('body-parser');
const firmRoutes=require('./routes/firmRoutes');
const productRoutes=require('./routes/productRoutes');
const path=require('path');
const cors=require('cors');

const app=express();

const PORT=process.env.PORT || 3000;

dotenv.config();
app.use(cors());

app.use(bodyParser.json());

// main routes 

app.use('/vendor',vendorRoutes);
app.use('/firm',firmRoutes);
app.use('/product',productRoutes);
app.use('/uploads',express.static('uploads'));

//DataBase

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