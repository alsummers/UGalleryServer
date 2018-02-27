module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('user', {
        username: DataTypes.STRING,
        passwordhash: {
            type: DataTypes.STRING,
            validate: {
                len: {
                    args: [0,6],
                    msg: "Password must be 6 character minimum"
                }
            }
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true,
            }
        }
    })
    return User;
}