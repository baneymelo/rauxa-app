const location = require("aws-sdk/clients/location");
const { ImageSchema } = require("../config/dbseed");
const msg = require("../utils/msg");

module.exports.upload = async (req, res) => {
    try {
        const { image } = await req;
        console.log(image);
        const newImage = await ImageSchema.create(image)
        if(newImage){
            return res.status(201).send(msg(
                true,
                'Image uploaded successfully',
                newImage
            ));
        }
    } catch (error) {
        console.error(error.message);
        return res.status(400).send(msg(
            false,
            `${error.message}`
        ));
    }
}

module.exports.gallery = async (req, res) => {
    const images = await ImageSchema.findAll({ limit: 10, order: [['updatedAt', 'DESC']]});
    return res.send(msg(
        true,
        'Fetched images successfully',
        images
    ))
}