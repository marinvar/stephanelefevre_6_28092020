const express = require('express');
const router = express.Router();

const saucesCtrl = require('../controllers/sauces');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const formValidator = require('../middleware/form-validator');

router.post('/', auth, multer, formValidator, saucesCtrl.createSauce);
router.put('/:id', auth, multer, formValidator, saucesCtrl.modifySauce);
router.post('/:id/like', auth, saucesCtrl.likeOneSauce);
router.delete('/:id', auth, saucesCtrl.deleteSauce);
router.get('/:id', auth, saucesCtrl.getOneSauce);
router.get('/', auth, saucesCtrl.getAllSauces);

module.exports = router;