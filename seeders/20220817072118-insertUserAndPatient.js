'use strict';

module.exports = {
  async up(queryInterface) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface
      .bulkInsert('Patients', [
        {
          id: 1,
          name: 'Rudi',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ])
      .then(() =>
        queryInterface.bulkInsert('Users', [
          {
            id: 2,
            patientId: 1,
            email: 'rudi@gmail.com',
            password: '123',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ])
      );
  },

  async down(queryInterface) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface
      .bulkDelete('Patients', {
        id: 2,
      })
      .then(() =>
        queryInterface.bulkDelete('Users', {
          id: 2,
        })
      );
  },
};
