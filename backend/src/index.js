import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";

dotenv.config()

const app = express();

app.use(express.json())

app.get('/', (req,res) => {
    res.send("Welcome to LeetLab!");
})

app.use("api/v1/auth",authRoutes);

app.listen(process.env.PORT,()=>{
    console.log(`Server is runnning on Port: 8080`);
});
