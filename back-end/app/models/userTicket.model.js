module.exports = (sequelize, DataTypes) => {
    const UserTicket = sequelize.define("userticket", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        pnr: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bookingId: {
            type: DataTypes.STRING,
            allowNull: false
        },
        traceId: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isLcc: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        isTicketDone: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    });

    return UserTicket;
}