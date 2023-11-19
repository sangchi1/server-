var express = require('express');
var router = express.Router();
var api_cart = require('../controllers/cart.api');


router.get('/', api_cart.listSpUser);

router.post('/',api_cart.add);
router.delete('/:id',api_cart.delete);
module.exports = router;
