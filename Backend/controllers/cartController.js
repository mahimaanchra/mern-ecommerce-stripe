import React from 'react'
import userModel from "../models/userModel"
import { response } from 'express';

// add to cart
const addToCart = async (req , res) => {
  try {
   const {userId , itemId , size} = req.body;
   const userData = await userModel.findById(userId);
   let cartData =  userData.cartData;
   if(cartData[itemId]){
    if(cartData[itemId][size]){
        cartData[itemId][size] +=1;
    }else{
       cartData[itemId][size] = 1; 
    }
   }else{
    cartData[itemId] = {};
     cartData[itemId][size] = 1;
   }
   await userModel.findByIdAndUpdate(userId,{cartData})
   response.json({succes:true , message: "Added to cart"})
  } catch (error) {
    response.json({success:false , message:error.message});
  }
}
// update cart
const updateCart = async (req , res) => {
    try {
      const {userId , itemId , size , quantity} = req.body;
      const userData = await userModel.findById(userId);
      let cartData = userData.cartData;
      cartData[itemId][size] = quantity;
      await userModel.findByIdAndUpdate(userId , {cartData});
      res.json({success:true ,message:"cart updated" });
    } catch (error) {
      response.json({success:false , message:error.message});
    }
}
// get cart
const getUserCart = async (req , res) => {

}

export {addToCart , updateCart , getUserCart};