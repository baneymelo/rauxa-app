module.exports = (sequelize, type) => {
    return sequelize.define('image', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        url: {
            type: type.STRING,
            validate: {
                isUrl: true,      
            },
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
                len: {
                    arg: [7,12],
                    msg: 'Valid phone numbers between 6 and 12 digits'
                }
            }
        },
    })
}
