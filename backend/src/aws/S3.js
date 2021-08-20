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

const initUpload = (files, ext) => {
    const params = files.map((file,i) => {
        return {
            Bucket: 'rauxa-s3',
            Key: `${uuid()}${ext[i]}`,
            Body: file,
            'ContentEncoding': 'base64', 
            Metadata: {
                'Content-Type': 'image/jpeg'
            }
        }
    });

    for (const param of params) {
        s3.upload(param, (s3err, data) => {
            if (s3err) throw s3err;
            console.log(`${data.Location}`);
        })
    } 

}

module.exports = {
    upload,
    initUpload
};