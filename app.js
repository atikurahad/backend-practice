// const express = require("express");
// const router = require("./src/routes/api");
// const app = express();

// // sequrity middleware import
// const {rateLimit} = require("express-rate-limit");
// const helmet = require("helmet");
// const hpp = require("hpp");
// const mongoSanitize = require("express-mongo-sanitize");
// const multer = require("multer");
// const xss = require("xss");
// const cors = require("cors");

// // sequrity middleware implement

// app.use(cors());
// app.use(helmet());
// app.use(hpp());
// app.use(mongoSanitize());
// app.use(multer());
// // app.use(rateLimit());
// app.use(xss());
// app.use(limiter)



// //rate limiter 
// const limiter = rateLimit({
// 	windowMs: 15 * 60 * 1000, // 15 minutes
// 	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
// 	standardHeaders: 'draft-7', // draft-6: RateLimit-* headers; draft-7: combined RateLimit header
// 	legacyHeaders: false, // X-RateLimit-* headers
// 	// store: ... , // Use an external store for more precise rate limiting
// })


// app.use("/api", router);

// //undefiend route

// app.use("*", (req, res) => {
//   res.status(400).json({ status: "Failed", data: "Not Found" });
// });

// module.exports = app;



const express = require('express');
const app = express();
require("dotenv").config();
const cors = require('cors');
const hpp = require('hpp');
const helmet = require('helmet');
const mongoSanitize = require("express-mongo-sanitize")
const {rateLimit} = require("express-rate-limit")
const router = require('./src/routes/api');


const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: 'draft-7', // draft-6: RateLimit-* headers; draft-7: combined RateLimit header
	legacyHeaders: false, // X-RateLimit-* headers
	// store: ... , // Use an external store for more precise rate limiting
})

app.use(cors())
app.use(hpp())
app.use(helmet())
app.use(mongoSanitize())
app.use(limiter)


// connetct from routes folder

app.use('/api' , router)

app.use('*', (req, res)=>{
	res.status(404).json({status:"failed", data: "not found"})
})

module.exports = app;