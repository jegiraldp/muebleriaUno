const router = require('express').Router();
const express = require('express');


router.get('/',async (req,res)=> {
    res.render('home');
});


module.exports=router;
