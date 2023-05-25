const createProduct = async (req,res) => {

    console.log(req.body,req.body.user);
    res.status(200).json({message:"Product created"});
}

module.exports = {
    createProduct
}