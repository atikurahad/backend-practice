
const express = require('express');
const router = express.Router();
const myController = require('../controllers/myController')

router.get("/hello-get",myController.helloGet)
router.post("/hello-post",myController.helloPost)


module.exports = router;