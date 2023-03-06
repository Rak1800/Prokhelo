const express= require('express');
const mongoose=require('mongoose');
const route=require('./routes/route')

const app=express()
app.use(express.json());
app.use(express.urlencoded({extended:true}));

mongoose.connect('mongodb+srv://Rak18000:Rakesh123@cluster0.xntrj.mongodb.net/Prokhelo',{
    useNewUrlParser:true
}).then(()=>console.log('mongodb is connect'))
.catch((err)=>console.log(err))

app.use('/',route)

app.listen(process.env.PORT || 3000 , function(){
    console.log("express is running on port "+(process.env.PORT ||3000));
})
