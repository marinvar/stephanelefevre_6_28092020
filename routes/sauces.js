const express = require('express');
const router = express.Router();

const saucesCtrl = require('../controllers/sauces');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const formValidation = require('../middleware/form-validation');

router.post('/', auth, multer, formValidation, saucesCtrl.createSauce);
router.put('/:id', auth, multer, formValidation, saucesCtrl.modifySauce);
router.post('/:id/like', auth, saucesCtrl.likeOneSauce);
router.delete('/:id', auth, saucesCtrl.deleteSauce);
router.get('/:id', auth, saucesCtrl.getOneSauce);
router.get('/', auth, saucesCtrl.getAllSauces);

module.exports = router;