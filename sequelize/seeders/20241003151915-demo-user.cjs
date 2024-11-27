"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("users", [
      {
        uid: "285132c7-697a-4a5e-957d-9b8ea0f43f87",
        userEmail: "test@gmail.com",
        username: "testte",
        hashedPassword: "$2a$15$20VcD2RNW0iePxcpCsrS0OdQiWn3Ki5r79JWn7n6wSfTcvOUgW5lS",
        createdAt: '2024-10-03 15:25:33',
        updatedAt: '2024-10-03 15:25:33',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};