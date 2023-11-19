var mdCart = require("../models/cart")
exports.list = async(req,res,next) =>{

    try {
        const  list = await mdCart.CartModel.find().populate("id_sp");
        res.json(list);
      } catch (err) {
        console.error("Error fetching users:", err);
        res.status(500).send("Internal Server Error");
      }
}
exports.add = async(req,res,next)=>{
  try {
    const newCart = new mdCart.CartModel(req.body);
    let save = newCart.save();
    return res.status(200).json({ data: save });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ msg: error.message });
  }
}
exports.listSpUser = async(req,res,next) =>{
    
    try {
        const data = await mdCart.CartModel.find({id_user:req.query.id_user}).populate('id_sp');
        if(data){
            return res.json(data)
        }
       
    } catch (error) {
        console.log(error);
        return res.status(400).json({ msg: error.message });
    }
}
exports.delete = async(req,res,next)=>{
    let id = req.params.id;
    try {
      const deletetr = await mdCart.CartModel.findByIdAndDelete(id);
      if (!deletetr) {
        return res.status(404).send("Error");
      }
      res.status(200).json("thanh cong");
    } catch (error) {
      res.status(500).send(error);
    }
}
