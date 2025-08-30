const express=require('express');
const { handleGenNewShortUrl, handleAnalytics } = require('../controller/url');
const router=express.Router();

router.post('/',handleGenNewShortUrl);
router.get('/analytics/:shortId',handleAnalytics);

module.exports=router;