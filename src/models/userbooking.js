'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class UserBooking extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    UserBooking.init(
        {
            userId: DataTypes.INTEGER,
            bookingId: DataTypes.INTEGER
        },
        {
            sequelize,
            modelName: 'UserBooking'
        }
    );
    return UserBooking;
};
