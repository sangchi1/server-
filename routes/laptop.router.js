var express = require('express');
var router = express.Router();
var api_laptop = require('../controllers/laptop.api');

router.get('/lt',api_laptop.getAll);
router.get('/', api_laptop.list );
 router.post('/add', api_laptop.add);
// router.put('/truyen/edit/:id', api_truyen.update);
// router.get('/truyen/delete/:id',api_truyen.delete);
// router.get('/noidungtruyen/:id',api_truyen.getNoiDung);
 router.get('/:id',api_laptop.getChiTiet)

module.exports = router;