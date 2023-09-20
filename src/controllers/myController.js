
exports.helloGet = (req,res)=>{
   res.status(200).json({status:"success", data:"i am from get"});
}
exports.helloPost = (req,res)=>{
   res.status(201).json({status:"success", data:"i am from post"});
}