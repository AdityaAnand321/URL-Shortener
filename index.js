const express=require('express');
const urlRouter=require('./routes/url');
const staticRouter=require('./routes/staticRoute');
const path=require('path');

const { connectMongoDB } = require('./connection');
const URL=require('./models/url')
const app=express();
const PORT=8001;

connectMongoDB('mongodb://localhost:27017/short-url')
.then(()=>console.log("mongodb Connected"));

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set('view engine','ejs');
app.set('views',path.resolve('./views'));

app.use('/url',urlRouter);
app.use('/',staticRouter);


app.get('/url/:shortId',async(req,res)=>{
const shortId=req.params.shortId;
const entry=await URL.findOneAndUpdate({
    shortId
},{$push:{
    vistedHistory:{timestamp:Date.now()}
}}
)
res.redirect(entry.redirectUrl);
})


app.listen(PORT,()=>{console.log("Server Started at PORT: ",PORT);});