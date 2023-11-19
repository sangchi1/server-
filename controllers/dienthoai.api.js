var md = require('../models/dienthoai');
var mdTheLoai = require('../models/the_loai');

exports.list = async(req,res,next) =>{

    try {
        const dienthoai = await md.DtModel.find({});
        res.json(dienthoai);
      } catch (err) {
        console.error("Error fetching users:", err);
        res.status(500).send("Internal Server Error");
      }
}
exports.listTL = async(req,res,next) =>{

    try {
        const tl = await mdTheLoai.theloaiModel.find({});
        res.json(tl);
      } catch (err) {
        console.error("Error fetching users:", err);
        res.status(500).send("Internal Server Error");
      }
}
exports.getAll = async(req,res,next) =>{
    const {tensp,giasp,hinhanh,id} = req.body;
   try{
    var listAll = await md.DtModel.find();
    var data = [];
    for(var i=0;i<listAll.length;i++){
      data.push({
        tensp:listAll[i].tensp,
        giasp:listAll[i].giasp,
        hinhanh:listAll[i].hinhanh,
        id:listAll[i].id
      })
    }
    if(listAll!=null){
      return res.status(200).json({
        msg:"Lay du lieu thanh cong"
        ,data
      })
      }else{
        return res.status(400).json({
          msg:"Khong lay dc du lieu"
        });
      }
    }catch(err){
      return res.status(500).json({
        msg : err.message,
      })
    }
  }
  
  
  exports.getChiTiet = async(req,res,next)=>{
    const id = req.params.id;
    try{
      const{tensp,mota,giasp,hinhanh,soluong,the_loai} = req.body;
      var ChiTiet = await md.DtModel.findById(id);
      var data = [];
     
        data.push({
          tensp:ChiTiet.tensp,
          mota:ChiTiet.mota,
          giasp:ChiTiet.giasp,
          hinhanh:ChiTiet.hinhanh,
          soluong:ChiTiet.soluong,
          id:ChiTiet.id,
        
        })
      
      if(ChiTiet!=null){
        return res.status(200).json({
          msg:"Lay du lieu thanh cong"
          ,data
        })
        }else{
          return res.status(400).json({
            msg:"Khong lay dc du lieu"
          });
        }
      }catch(err){
        return res.status(500).json({
          msg : err.message,
        })
      }
  
  }
  
  exports.add = async (req, res, next) => {
  
      const { tensp,mota,giasp,hinhanh,soluong,the_loai} = req.body;
      const newDienThoai = new md.DtModel({
         tensp: tensp,
          mota: mota,
          giasp: giasp,
          hinhanh:hinhanh,
          soluong:soluong,
          the_loai:the_loai 
      });
      newDienThoai
          .save()
          .then(() =>{
              res.status(201).json({ message: 'Đã lưu đối tượng vào MongoDB'});
          })
          .catch((error) => {
              console.error("Lỗi lưu đối tượng vào MongoDB: ",error);
              res.status(500).json({ error: "Đã xảy ra lỗi server"});
          });
  }
  
  
//   exports.update = (req, res, next) => {
//       const id = req.params.id;
//       const updatData = {
//         tentruyen: req.body.tentruyen,
//         mota: req.body.mota,
//         tentacgia: req.body.tentacgia,
//         namxuatban: req.body.namxuatban,
//         anhbia:req.body.anhbia,
//         noidung:req.body.noidung
//       };
//       md.TModel.findByIdAndUpdate(id, updatData, { new: true })
//         .then((data) => {
//           if (data) {
//             res.status(200).json({
//               message: "Dữ liệu đã được cập nhật thành công",
//               data: data,
//             });
//           } else {
//             res.status(404).json({ error: "Không tìm thấy dữ liệu" });
//           }
//         })
//         .catch((error) => {
//           res.status(500).json({ error: "Đã xảy ra lỗi khi cập nhật dữ liệu" });
//         });
  
//       }
  
//       exports.delete = (req,res,next)=>{
  
//           const idToDelete = req.params.id;
//           // Tạo kết nối tới MongoDB
//         md.TModel.findByIdAndRemove(idToDelete)
//             .then((data) => {
//               if (data) {
//                 res
//                   .status(200)
//                   .json({ message: "Dữ liệu đã được xóa thành công", data: data });
//               } else {
//                 res.status(404).json({ error: "Không tìm thấy dữ liệu" });
//               }
//             })
//             .catch((error) => {
//               res.status(500).json({ error: "Đã xảy ra lỗi khi xóa dữ liệu" });
//             });
//       }

