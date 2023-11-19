const { Types } = require('mongoose');
var db = require('./db');

const theloaiSchema = new db.mongoose.Schema({
    name: { type: String, require: true }
}, {
    collection: 'the_loai'
});

let theloaiModel = db.mongoose.model('theloaiModel', theloaiSchema);
module.exports = {  theloaiModel };