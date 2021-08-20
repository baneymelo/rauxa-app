const router = require('express').Router();
const imageController = require('../controllers/imageController');
const validateReq = require('../middlewares/validateReq');
const { upload } = require('../aws/S3')

router.post('/image', upload.single('image'), validateReq, imageController.upload);
router.get('/images', imageController.gallery);

module.exports = router;