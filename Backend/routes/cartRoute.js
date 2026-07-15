import express from 'express'
import { addToCart , getUserCart , updateCart } from '../controllers/cartController'

const cartRouter = express.Router()

cartRouter.post('/get' , getUserCart)
cartRouter.post('/update' ,updateCart)
cartRouter.post('/add', addToCart)

export default cartRouter