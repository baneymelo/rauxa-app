const router = require('express').Router();
const imageController = require('../controllers/imageController');
const validateBody = require('../middlewares/validateBody');
const upload = require('../aws/S3')

/**
 * @openapi
 * /:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */

router.post('/image', upload.single('image'), validateBody, imageController.upload);
router.get('/images', imageController.gallery);

module.exports = router;