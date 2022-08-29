var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt')


const app = express()



const users = require('../models').Users
router.use(express.json())
router.post('/create_user', async(req, res) => {
try{
  console.log(req.body)
  const salt = await bcrypt.genSalt()
  const hashpass = await bcrypt.hash(req.body.password, salt)
  const newUser = await users.create({email: req.body.email, username: req.body.username, password: hashpass})
 
  res.status(201).json({username: req.body.username})
}catch(err){
  res.status(404).json({message: 'Sorry somthing went wrong'})
}
})

module.exports = router;
