// @ts-nocheck
const location = require("aws-sdk/clients/location");
const { ImageSchema } = require("../config/dbseed");
const msg = require("../utils/msg");

/**
 * @module Controllers
 */

/**
 * Upload image.
 * @async
 * @function upload
 * @param {{image: object}} req - Express request object
 * @param {object} res - Express response object
 * @returns {Promise<{success: Boolean, message: String, data: Array<{object}>}>} query response
 */

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


/**
 * Fetch all the images.
 * @async
 * @function gallery
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @return {Promise<{ success: Boolean, message: String, data: Array<{Object}> }>} query response
 */

module.exports.gallery = async (req, res) => {
    const images = await ImageSchema.findAll({ limit: 10, order: [['updatedAt', 'DESC']]});
    return res.send(msg(
        true,
        'Fetched images successfully',
        images
    ))
}