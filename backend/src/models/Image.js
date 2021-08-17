module.exports = (sequelize, type) => {
    return sequelize.define('image', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: type.STRING,
            allowNull: false,
        },
        email: {
            type: type.STRING,
            allowNull: false,
            validate: {
                isEmail: true,
            }
        },
        phone: {
            type: type.STRING,
            allowNull: false,
            validate: {
                min: 10
            }
        },
    })
}
