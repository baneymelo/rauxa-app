const location = require("aws-sdk/clients/location");
const msg = require("../utils/msg");

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