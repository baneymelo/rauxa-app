const aws = require('aws-sdk');
const multerS3 = require('multer-s3');
const multer = require('multer');
const uuid = require('uuid').v4;
const { AWS } = require('../config/config');
const path = require('path');

aws.config.update({
    accessKeyId: AWS.ACCESS_KEY_ID,
    secretAccessKey: AWS.SECRET_ACCESS_KEY,
    //region: 'eu-west-3'
})

const s3 = new aws.S3();

const upload = multer({
    storage: multerS3({
        s3,
        bucket: 'rauxa-s3',
        acl: 'public-read',
        metadata: (req, file, cb) => {
            cb(null, { fieldName: file.fieldname });
        },
        key: (req, file, cb) => {
            const ext = path.extname(file.originalname);
            cb(null, `${uuid()}${ext}`);
        }
    })
});


module.exports = upload;