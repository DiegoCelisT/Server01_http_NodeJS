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

    //Copiado da documentação de sequelize (Creating the first Seed):
      await queryInterface.bulkInsert('Users', [{
      name: 'Diego',
      description: 'Engenheiro Mecânico',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Laura',
      description: 'Engenheira Industrial',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Héctor',
      description: 'Goleiro',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);



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
