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
            'Users',
            [
                {
                    firstName: 'Marvin',
                    lastName: 'Ginnaly',
                    email: 'mginnaly0@unesco.org',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    firstName: 'Kleon',
                    lastName: 'Sleigh',
                    email: 'ksleigh1@china.com.cn',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    firstName: 'Dulcy',
                    lastName: 'Arghent',
                    email: 'darghent2@vkontakte.ru',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    firstName: 'Morgana',
                    lastName: 'Currm',
                    email: 'mcurrm3@rediff.com',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    firstName: 'Edik',
                    lastName: 'Mushart',
                    email: 'emushart4@technorati.com',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    firstName: 'Kelli',
                    lastName: 'Bagguley',
                    email: 'kbagguley5@arizona.edu',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    firstName: 'Juline',
                    lastName: 'Mollen',
                    email: 'jmollen6@mtv.com',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    firstName: 'Byrle',
                    lastName: 'Beeson',
                    email: 'bbeeson7@home.pl',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    firstName: 'Fancie',
                    lastName: 'Runham',
                    email: 'frunham8@dagondesign.com',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    firstName: 'Alejandrina',
                    lastName: 'Banyard',
                    email: 'abanyard9@skyrock.com',
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
        await queryInterface.bulkDelete('Users', null, {});
    }
};
