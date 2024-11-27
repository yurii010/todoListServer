import { Task } from "../../sequelize/models/task.model.js";

class TaskService {
  async findTask(taskId) {
    const task = await Task.findByPk(taskId);
    return task;
  }

  async createTask(taskData) {
    const task = await Task.create({ taskId: taskData.taskId, uid: taskData.uid, taskTitle: taskData.taskTitle, taskText: taskData.taskText });
    return task;
  }

  async findAll(uid) {
    const tasks = await Task.findAll({ where: { uid: uid } });
    return tasks;
  }
}

export default new TaskService();
