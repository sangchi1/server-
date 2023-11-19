const { Types } = require('mongoose');
var db = require('./db');

const CartChema = new db.mongoose.Schema({
    id_user:{type:db.mongoose.Schema.Types.ObjectId,require: true, ref: 'UModel'},
    id_sp:{
        type:db.mongoose.Schema.Types.ObjectId,
        refPath: 'onModel'
    },
    onModel: {
        type: String,
        required: true,
        enum: ['LapTopModel', 'DtModel', 'SpNewModel','SpLikeModel']
    }
}, {
    collection: 'cart'
});

let CartModel = db.mongoose.model('cartModel', CartChema);

module.exports = { CartModel };

