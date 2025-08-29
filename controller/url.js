const {}=require('nanoid');
const URL=require('../models/url');



async function handleGenerateNewShortURL(res,req){
    const shortID=nanoid(8);
    await URL.create({
        shortId:shortID,
        redirectURL;
    }

    )
}