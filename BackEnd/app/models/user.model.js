module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("user", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        middleName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        surname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        emailId: {
            type: DataTypes.STRING,
            allowNull: false
        },
        mobileNumber: {
            type: DataTypes.STRING,
            allowNull: false
        },
        panCardNumber: {
            type: DataTypes.STRING,
            allowNull: false
        },
        adharCardNumber: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        credits: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createDateTime: {
            type: DataTypes.STRING,
            allowNull: false
        },
        updateDateTime: {
            type: DataTypes.STRING,
            allowNull: false
        },
        updateCount: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return User;
}