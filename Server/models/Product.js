const mongoose=require("mongoose");

const productSchema=mongoose.Schema({
    productname:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    category:{
        type:[
            {
            type:String,
            enum:["veg","non-veg"]
            }
        ]
    },
    image:{
        type:String
    },
    bestSellar:{
        type:String
    },
    description:{
        type:String
    },
    firm:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Firm"
        }
    ],
    products:[
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        }
    ],
})

const Product=mongoose.model("Product",productSchema);
module.exports = Product;