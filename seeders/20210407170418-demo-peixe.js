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
    await queryInterface.bulkInsert('Peixes', [{
      nome: 'Nemo',
      especie: 'peixe palhaço',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nome: 'Dory',
      especie: 'cirurgiã-patela',
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
