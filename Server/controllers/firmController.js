const Firm = require('../models/Firm');
const Vendor = require('../models/Vendor');
const multer = require('multer');
const path = require('path');

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


const addFirm = async (req, res) => {
  try {
    const { firmname, area, category, region, offer } = req.body;

    const image = req.file ? req.file.filename : undefined;
    const vendor=await Vendor.findById(req.VendorId);
    if(!vendor){
        return res.status(404).json({message: "vendor not found"});
    }

    const newFirm = new Firm({
      firmname,
      area,
      category,
      region,
      offer,
      image,
    });

    const savedFirm=await newFirm.save();

    vendor.firm.push(savedFirm._id);

    await vendor.save();

    res.status(201).json({ message: "Firm created"});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

const deleteFirmById=async (req,res)=>{
  try {
    const firmId=req.params.firmId;
    const deletedFirm=await Firm.findByIdAndDelete(firmId);

    if(!deletedFirm){
      return res.status(404).json({error : "No firm Found"});
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server method" });
  }
}

module.exports = {addFirm:[upload.single('image'),addFirm],deleteFirmById};
