
const express = require('express');
const router = express.Router();
const myController = require('../controllers/myController')

router.get("/hello-get",myController.hello)
router.post("/hello-post",myController.hello)


module.exports = router;