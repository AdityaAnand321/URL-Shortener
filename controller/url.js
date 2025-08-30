const {nanoid}=require('nanoid');
const URL=require('../models/url');

async function handleGenNewShortUrl(req,res) {
    const body=req.body;
    if(!body.url)return res.status(400).json({msg:'URL needed'});
    const shID=nanoid(8);
    await URL.create({
        shortId:shID,
        redirectUrl:body.url,
        visitedHistory:[]
    });
    return res.render('home',{
        id:shID,
    })
    return res.json({id:shID});
}

async function handleAnalytics(req,res){
    const shortId=req.params.shortId;
    const result=await URL.findOne({shortId});
    res.json({
        TotalClicks: result.vistedHistory.length,
        Analytics:result.vistedHistory 
    })
}


module.exports={
    handleGenNewShortUrl,handleAnalytics,
}