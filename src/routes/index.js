const express = require("express");
const router = express.Router();
const { getAllData, createAccount } = require("../controllers/accountsCtrl");

router.get('/', getAllData);
router.post('/add', createAccount);
  
module.exports = router;