const Product=require("../models/Product");
const multer=require('multer');
const Firm=require("../models/Firm");
const path = require("path");


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + path.extname(file.originalname);
    cb(null, uniqueName);
  }
});


const upload = multer({ storage:storage});

const addProduct=async (req,res)=>{
    try {

        const{productname,price,category,bestSellar,description}=req.body;
        const image=req.file?req.file.filename:undefined;

        const firmId=req.params.firmId;
        const firm=await Firm.findById(firmId);

        if(!firm){
            return res.status(404).json({error: "No firm found"});
        }

        const product=new Product({
            productname,price,category,bestSellar,description,image,firm:firm._id
        })

        const savedProduct=await product.save();

        firm.product.push(savedProduct._id);

        await firm.save();

        res.status(200).json(savedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server method" });
    }
}

const getProductByFirm = async(req,res)=>{
  try {
    
    const firmId=req.params.firmId;
    const firm =await Firm.findById(firmId);

    if(!firm){
      return res.status(404).json({error: "No firm found"});
    }

    const restaurentName=firm.firmname;
    const products=await Product.find({firm:firmId});
    res.status(200).json({restaurentName,products});

  } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server method" });
  }
}

const deleteProductById=async (req,res)=>{
  try {
    const productId=req.params.productId;
    const deletedProduct=await Product.findByIdAndDelete(productId);

    if(!deletedProduct){
      return res.status(404).json({error : "No product Found"});
    }
    res.status(200).json({message: "Product deleted Successfully"});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server method" });
  }
}

module.exports = {addProduct: [upload.single('image'), addProduct], getProductByFirm, deleteProductById};