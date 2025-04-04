import express from "express"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import ProductRoutes from "./routes/products.route.js"
import CartRoutes from "./routes/cart.route.js"
import cookieParser from "cookie-parser";
// import path from "path";
import AuthRoutes from "./routes/auth.route.js"
import cors from "cors"

const app  = express();
dotenv.config();
app.use(cors({origin:"http://localhost:5173",credentials:true}))

app.use(express.json());    //it allows us to accept json data in the req.body it is middleware
app.use(cookieParser());    //it allows us to parse incomming cookie

const PORT = process.env.PORT || 8000;

// const __dirname =path.resolve();

app.use("/api/auth",AuthRoutes)
app.use("/api/products",ProductRoutes); //allows json data in  the req.body
app.use("/api/cart",CartRoutes)


app.listen(PORT, ()=>{
    connectDB();
    console.log("server Started at http://localhost:"+PORT);
})