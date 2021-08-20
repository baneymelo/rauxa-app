/**
 * @module Helpers
 */

/**
 * response handler
 * @function msg
 * @param {Boolean} success - operation status
 * @param {String} description - status datail
 * @param {Array} [data] - query data
 * @returns {Object} object
 */

module.exports = (success, description, data) => {
    return {
        success,
        description,
        data : success ? data : []
    }
}