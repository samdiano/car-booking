'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        await queryInterface.bulkInsert(
            'Cars',
            [
                {
                    name: 'Dodge',
                    model: 'Viper',
                    year: 1997,
                    VIN: '3N1BC1AP1BL101980',
                    price: '$669.94',
                    image: 'http://dummyimage.com/143x130.bmp/cc0000/ffffff',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Nissan',
                    model: 'Sentra',
                    year: 1994,
                    VIN: 'WAUKH94F27N507612',
                    price: '$501.02',
                    image: 'http://dummyimage.com/165x153.png/5fa2dd/ffffff',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Volkswagen',
                    model: 'Rabbit',
                    year: 2010,
                    VIN: '3C4PDDEGXCT789586',
                    price: '$710.58',
                    image: 'http://dummyimage.com/239x122.jpg/cc0000/ffffff',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Mitsubishi',
                    model: 'Diamante',
                    year: 1995,
                    VIN: 'KL4CJBSB6FB942503',
                    price: '$666.90',
                    image: 'http://dummyimage.com/232x112.bmp/dddddd/000000',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Saab',
                    model: '900',
                    year: 1992,
                    VIN: 'WBY2Z2C54FV475999',
                    price: '$956.82',
                    image: 'http://dummyimage.com/218x238.png/ff4444/ffffff',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Ford',
                    model: 'Focus',
                    year: 2004,
                    VIN: 'WAUFL44D23N842140',
                    price: '$542.51',
                    image: 'http://dummyimage.com/243x134.jpg/cc0000/ffffff',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Mercedes-Benz',
                    model: 'E-Class',
                    year: 2012,
                    VIN: 'WBAKA8C57AC165441',
                    price: '$916.11',
                    image: 'http://dummyimage.com/153x121.bmp/ff4444/ffffff',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Nissan',
                    model: 'Datsun/Nissan Z-car',
                    year: 1990,
                    VIN: '1G4PP5SK3E4570155',
                    price: '$677.49',
                    image: 'http://dummyimage.com/134x154.bmp/5fa2dd/ffffff',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Lexus',
                    model: 'SC',
                    year: 2009,
                    VIN: '2FMGK5B81FB300851',
                    price: '$709.01',
                    image: 'http://dummyimage.com/192x236.png/ff4444/ffffff',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Mercedes-Benz',
                    model: 'C-Class',
                    year: 2001,
                    VIN: '1GD312CG9EF437171',
                    price: '$828.50',
                    image: 'http://dummyimage.com/187x120.bmp/dddddd/000000',
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            ],
            {}
        );
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};
