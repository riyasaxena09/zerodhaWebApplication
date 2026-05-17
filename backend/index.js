const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const bodyParser=require('body-parser');
const { Signup, Login } = require("./Controllers/AuthController");
const {HoldingModel}=require('./model/HoldingsModel');
const { positionModel } = require("./model/PositionsModel");
const {orderModel}=require('./model/OrdersModel');
const { UserModel } = require("./model/UserModel");
const cookieParser = require("cookie-parser");
const { userVerification } = require("./Middleware/AuthMiddleware");

const PORT=process.env.PORT || 3002;
const url=process.env.MONGO_URL;


app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(cookieParser());
// app.get(('/positions'),(req,res)=>{

//     const pos=[
//   {
//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "JUBLFOOD",
//     qty: 1,
//     avg: 3124.75,
//     price: 3082.65,
//     net: "+10.04%",
//     day: "-1.35%",
//     isLoss: true,
//   },
// ];

// pos.forEach((item)=>{
//     const newPos=new positionModel(item);
//     newPos.save();
// })

// res.send("Positions added to database");
// });

app.get(('/allHoldings'),async(req,res)=>{
    const allHolding=await HoldingModel.find({});
    console.log(allHolding);
    res.send(allHolding);
});

app.get(('/positions'),async(req,res)=>{
    const position=await positionModel.find({});
    console.log(position);
    res.send(position);
});

app.post(('/newOrder'),(req,res)=>{
    const {name,qty,price,mode}=req.body;

    const newOrder=new orderModel({
        name,
        qty,
        price,
        mode
    });
    newOrder.save();

    console.log(name,qty,price,mode);
    res.send("Order received");
});

app.get(('/orders'),async(req,res)=>{
    const orders=await orderModel.find({});
    // console.log(orders);
    res.send(orders);
});

app.post('/',userVerification)

app.post("/signup", Signup);

app.post("/login", Login);


// Fix bad indexes and start server
mongoose.connect(url)
    .then(async () => {
        console.log("Connected to MongoDB");
        
        try {
            // Drop the bad index if it exists
            await UserModel.collection.dropIndex("UserSchema.email_1").catch(() => {
                console.log("Bad index 'UserSchema.email_1' not found (already fixed)");
            });
            
            // Rebuild indexes based on the schema
            await UserModel.collection.dropIndex("email_1").catch(() => {});
            await UserModel.syncIndexes();
            
            console.log("Indexes synced successfully");
        } catch (err) {
            console.error("Error syncing indexes:", err.message);
        }
        
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB", err);
        process.exit(1);
    });