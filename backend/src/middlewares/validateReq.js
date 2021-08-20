const location = require("aws-sdk/clients/location");
const msg = require("../utils/msg");

/**
 * @module Middelwares
 */

/**
 * @async
 * @function validateReq
 * @param {{body: {description: string}, file: {location: string}, image: object }} req - Express request object
 * @param {object} res - Express response object
 * @param {function} next - Express next middleware function
 * @returns {Promise} - the next middleware function
 * @description Validate all properties of the req parameter are correctly set.
 */

module.exports = async (req, res, next) => {
    try {
        const { description } = await req.body;
        const { name, email, phone } = JSON.parse(description)
        const { location } = await req.file;
        if(name && email && phone && location){
            const newImage = {
                url: location,
                name,
                email: email.toLowerCase(),
                phone
            }
            req.image = newImage;
            return next();
        }
        return res.status(400).send(msg(
            false,
            'Missing data'
        ))
    } catch (error) {
        console.error(error);
    }
}