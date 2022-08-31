var express = require("express");
var router = express.Router();
const fetch = require('node-fetch')

const { authUser } = require("../middleware/Authenticate");

router.use(express.json());


router.get('/search', async(req, res) => {
    try{
        const response = await fetch('https://catfact.ninja/fact')
        const data = await response.json()
        //  send info back to client
        res.json({message: data.fact})
    }catch(err){
        console.log(err)
    }
})

module.exports = router