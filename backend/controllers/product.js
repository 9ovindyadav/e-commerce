const Product = require("../models/product");
const cloudinary = require("cloudinary");

const createProduct = async (req,res) => {

    const images = [] ;
    if(typeof req.body.images === "string"){
        images.push(req.body.images)
    }else{
        images = req.body.images ;
    }

    const imagesLinks = [] ;

    for(let i=0; i < images.length; i++){
        const result = await cloudinary.v2.uploader.upload(images[i],{
            folder:"products"
        });
        imagesLinks.push({
            public_id: result.public_id,
            url: result.secure_url
        });
    }

    console.log(result);
    req.body.images = imagesLinks ;
    req.body.createdBy = req.user._id ;

    const product = await Product.create(req.body);

    res.status(200).json({message:"Product created",product});
}

module.exports = {
    createProduct
}