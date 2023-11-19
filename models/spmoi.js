const { Types } = require('mongoose');
var db = require('./db');

const SpNewChema = new db.mongoose.Schema({
    tensp: { type: String, require: true },
    theloai:{type:db.mongoose.Schema.Types.ObjectId, ref: 'theloaiModel'},
    mota: { type: String, require: true },
    giasp: { type: String, require: true },
    hinhanh: {type:String,require:true},
    soluong :{type:String,require:true},
}, {
    collection: 'san_pham_moi'
});


let SpNewModel = db.mongoose.model('SpNewModel', SpNewChema);

module.exports = { SpNewModel };