var express = require('express');
var router = express.Router();
var api_spmoi = require('../controllers/spmoi.api');

router.get('/listspmoi',api_spmoi.getAll);
router.get('/', api_spmoi.list );
// router.post('/truyen/add', api_truyen.add);
// router.put('/truyen/edit/:id', api_truyen.update);
// router.get('/truyen/delete/:id',api_truyen.delete);
// router.get('/noidungtruyen/:id',api_truyen.getNoiDung);
 router.get('/spmoi/:id',api_spmoi.getChiTiet)

module.exports = router;