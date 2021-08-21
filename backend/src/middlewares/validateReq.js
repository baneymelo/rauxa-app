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
        const { location } = await req.file;

        if(!description){
            return res.status(400).json(msg(
                false,
                "description property is required"
            ))
        }

        const { name, email, phone } = JSON.parse(description)

        if(!name){
            return res.status(400).json(msg(
                false,
                "name field is required"
            ))
        }

        if(!email){
            return res.status(400).json(msg(
                false,
                "email field is required"
            ))
        }
        const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
        if(!email.match(pattern)){
            
            return res.status(400).json(msg(
                false,
                "email field is invalid"
            ))
        }

        if(!phone){
            return res.status(400).json(msg(
                false,
                "phone field is required"
            ))
        }

        if(phone.toString().length < 6 || phone.toString().length > 12 ){
            return res.status(400).json(msg(
                false,
                "Phone filed is invalid (min:6, max:12) characters"
            ))
        }

        if(location){
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