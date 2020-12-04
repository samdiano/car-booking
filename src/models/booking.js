'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Booking extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Booking.belongsToMany(models.User, {
                foreignKey: 'userId',
                through: 'UserBooking'
            });
        }
    }
    Booking.init(
        {
            pickupLocation: DataTypes.STRING,
            pickupTime: DataTypes.TIME,
            pickupDate: DataTypes.DATE,
            carId: DataTypes.INTEGER,
            userId: DataTypes.INTEGER
        },
        {
            sequelize,
            modelName: 'Booking'
        }
    );
    return Booking;
};
