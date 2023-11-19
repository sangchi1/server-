const { Types } = require('mongoose');
var db = require('./db');

const UChema = new db.mongoose.Schema({
    email: { type: String, require: true },
    passwd: { type: String, require: true },
    address: { type: String, require: true },
    phone: { type: String, require: true },
    avata: { type: String, require: true },
    fullname: { type: String, require: true },
}, {
    collection: 'user'
});


let UModel = db.mongoose.model('UModel', UChema);

module.exports = { UModel };