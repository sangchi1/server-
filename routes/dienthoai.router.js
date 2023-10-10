var express = require('express');
var router = express.Router();
var api_dienthoai = require('../controllers/dienthoai.api');

router.get('/dt',api_dienthoai.getAll);
router.get('/', api_dienthoai.list );
 router.post('/add', api_dienthoai.add);
// router.put('/truyen/edit/:id', api_truyen.update);
// router.get('/truyen/delete/:id',api_truyen.delete);
// router.get('/noidungtruyen/:id',api_truyen.getNoiDung);
 router.get('/:id',api_dienthoai.getChiTiet)

module.exports = router;