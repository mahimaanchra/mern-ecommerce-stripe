import express from "express"
import cors from "cors"
import 'dotenv/config'
import connectDB from "./config/mongodb.js";
import dns from 'dns';
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
dns.setDefaultResultOrder('ipv4first'); 
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();


// Middlewares
app.use(express.json());
app.use(cors())


// API endpoints
app.use('/api/user' , userRouter)
app.use('/api/product' , productRouter)


app.get('/' , (req , resp)=>{
    resp.send("API Working")
})

app.listen(port , ()=> console.log('server started on Port : ' + port))
