const jwt=require("jsonwebtoken");
const Vendor=require("../models/Vendor");

const secretKey=process.env.whatisurname;

const verifyToken=async (req,res,next)=>{
    const token =req.headers.token;
    if(!token){
        return res.status(401).json({error: "Token is required"});
    }
    try {
        const decoded=jwt.verify(token,secretKey);
        const vendor=await Vendor.findById(decoded.vendorId);
        if(!vendor){
            return res.status(401).json({error: "vendor not found"});
        }
        req.vendorId=vendor._id; //vendor ID directly accessible in future middleware/routes 
        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Invalid token' });
    }
}

module.exports=verifyToken;