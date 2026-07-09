// function to add product 
const addProduct = async (req , res) => {
  try {
    const {name , description , price , category , subCategory , sizes , bestseller} = req.body;
    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];
  } catch (error) {
    res.json({success : false , message : error.message})
  }
}

//function to list product
const listProducts = async (req , res) => {

}

//function to remove product
const removeProduct = async (req , res) => {

}

//function for single product info
const singleProduct = async (req , res) => {

}

export {addProduct , listProducts , removeProduct , singleProduct};