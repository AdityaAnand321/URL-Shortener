const mongoose=require('mongoose');

const urlSchema=new mongoose.Schema({
    shortId:{
        type:String,
        require:true,
        unique,
    },
    redirectURL:{
        type:String,
        require:true,
    },
    visitHistory:[{timestamp:{type:Nubmer}}],
},
{timestamps:true}
);

const URL=mongoose.model('url',urlSchema);


module.exports=URL;