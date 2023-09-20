
exports.hello = (req,res)=>{
   res.status(200).json({status:"success", data:"everything is working"});
}