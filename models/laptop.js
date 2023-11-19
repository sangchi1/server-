const { Types } = require('mongoose');
var db = require('./db');

const LaptopChema = new db.mongoose.Schema({
    tensp: { type: String, require: true },
    the_loai:{type:db.mongoose.Schema.Types.ObjectId, ref: 'theloaiModel'},
    mota: { type: String, require: true },
    giasp: { type: String, require: true },
    hinhanh: {type:String,require:true},
    soluong :{type:String,require:true},
}, {
    collection: 'lap_top'
});


let LapTopModel = db.mongoose.model('LapTopModel', LaptopChema);

module.exports = { LapTopModel };