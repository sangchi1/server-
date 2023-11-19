const { Types } = require('mongoose');
var db = require('./db');

const DtChema = new db.mongoose.Schema({
    tensp: { type: String, require: true },
    mota: { type: String, require: true },
    giasp: { type: String, require: true },
    hinhanh: {type:String,require:true},
   soluong :{type:String,require:true},
   the_loai:{type:db.mongoose.Schema.Types.ObjectId, ref: 'theloaiModel'},
}, {
    collection: 'dien_thoai'
});


let DtModel = db.mongoose.model('DtModel', DtChema);

module.exports = { DtModel };