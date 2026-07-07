import express, { request } from "express"
import cors from "cors"
import 'dotenv/config'
import connectDB from "./config/mongodb.js";
import dns from 'dns';
dns.setDefaultResultOrder('ipv4first'); 
const app = express();
const port = process.env.PORT || 4000;
connectDB();


// Middlewares
app.use(express.json());
app.use(cors())


// API endpoints
app.get('/' , (req , resp)=>{
    resp.send("API Working")
})

app.listen(port , ()=> console.log('server started on Port : ' + port))
