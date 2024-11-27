"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("tasks", [
      {
        taskId: '1',
        uid: "285132c7-697a-4a5e-957d-9b8ea0f43f87",
        taskTitle: '123',
        taskText: '321',
        completed: false,
        createdAt: '2024-10-03 15:25:33',
        updatedAt: '2024-10-03 15:25:33',
      },
      {
        taskId: '2',
        uid: "285132c7-697a-4a5e-957d-9b8ea0f43f87",
        taskTitle: '456',
        taskText: '654',
        completed: false,
        createdAt: '2024-10-03 15:25:33',
        updatedAt: '2024-10-03 15:25:33',
      },
      {
        taskId: '3',
        uid: "285132c7-697a-4a5e-957d-9b8ea0f43f87",
        taskTitle: '789',
        taskText: '987',
        completed: false,
        createdAt: '2024-10-03 15:25:33',
        updatedAt: '2024-10-03 15:25:33',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};