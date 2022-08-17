'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert(
      'Users',
      [
        {
          id: 1,
          email: 'ramdan@gmail.com',
          password: '123',
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ]
    )
    .then(() => {
      return queryInterface.bulkInsert(
        'Doctors',
        [
          {
            id: 1,
            userId: 1,
            name: 'ramdan',
            createdAt: new Date(),
            updatedAt: new Date(),
          }
        ]
      )
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete(
      'Users',
      {
        id: 1
      }
    )
    .then(() => {
      return queryInterface.bulkDelete(
        'Doctors',
        {
          id: 1
        }
      )
    });
  }
};
