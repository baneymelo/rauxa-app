const msg = require("../utils/msg");

module.exports = async (req, res, next) => {
    try {
        let err = '';
        const isForm = req.headers['content-type'];
        const mult = isForm.toString().split(';')[0]
        if(mult !== 'multipart/form-data'){
            err = 'The request doesnt contain a form data'
            return res.status(400).json(msg(
                false,
                err
            ))
        }
        return next();
    } catch (error) {
        console.error(error);
    }
}