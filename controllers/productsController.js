const Products = require("../model/Products");

//get all Products
const product_all = async(req ,res)=>{
    try {
        const products = await Products.find();
        res.json(products);
        
    } catch (error) {
        res.json({message:error});
    }    
};
//single product
const product_details = async(req ,res)=>{
    try{
        const prodcuts = await Products.findById(req.params.productId);
        res.json(prodcuts);
    }catch(error){
        res.json({message: error});
    }
};
//add new product
const product_create = async(req ,res)=>{};
//update product
const product_update = async(req ,res)=>{};
//delete product
const product_delete = async(req ,res)=>{};

module.exports = {
    product_all,
    product_details,
    product_create,
    product_update,
    product_delete
}

// try{
//     const products = {
//         title:req.body.title,
//         price:req.body.price,
//         image:req.body.image,
//         details:req.body.details
//     };
//     const updateProducts = await Products.findByIdAndUpdae(
//         { _id:req.params.prodcutId },
//         product
//     );
//     res.json(updateProducts);
// }catch(error){
//     res.json({message:error});
// }