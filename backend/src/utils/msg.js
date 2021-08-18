module.exports = (success, description, data) => {
    return {
        success,
        description,
        data : success ? data : []
    }
}