const Product = require("../models/product");
const cloudinary = require("../utils/cloudinary");

const createProduct = async (req,res) => {
    
    let Images = req.body.images ;

    const imagesLinks = [] ;
    if(Array.isArray(Images)){
        for(let i=0; i < Images.length ; i++){

            const result = await cloudinary.uploader.upload(Images[i],{
                folder:"products"
            });
            imagesLinks.push({
                public_id: result.public_id,
                url: result.secure_url
            });

        }
    }

    
    req.body.images = imagesLinks ;
    req.body.createdBy = req.user._id ;

    const product = await Product.create(req.body);

    res.status(200).json({message:"Product Added Successfully",product});
}

module.exports = {
    createProduct
}