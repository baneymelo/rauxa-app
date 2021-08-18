const router = require('express').Router();
const imageController = require('../controllers/imageController');
const validateBody = require('../middlewares/validateBody');
const upload = require('../aws/S3')

router.post('/upload', upload.single('image'), validateBody, imageController.upload);
router.get('/gallery', imageController.gallery);

module.exports = router;