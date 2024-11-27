import TaskService from "./taskService.js";

class taskController {
  async createTask(req, res) {
    try {
      const { taskData } = req.body;
      const newTask = await TaskService.createTask(taskData);
      newTask.save();
      res.status(200).json({ task: newTask });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async getTasks(req, res) {
    try {
      const { uid } = req.body;
      if (uid == undefined) {
        res.status(400).json({ error: "Unauthorized error" });
      } else {
        const tasks = await TaskService.findAll(uid);
        const taskArray = tasks.map((task) => task.dataValues);
        res.status(200).json({ tasks: taskArray });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async changeCompleted(req, res) {
    try {
      const newCompleted = req.query.completed;
      const task = await TaskService.findTask(req.params.id);
      task.completed = newCompleted;
      await task.save();
      res.status(200).json({ task: task });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async getTask(req, res) {
    try {
      const task = await TaskService.findTask(req.params.id);
      res.status(200).json({ task: task });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async editTask(req, res) {
    try {
      const { taskId, taskTitle, taskText } = req.body.taskData;
      const task = await TaskService.findTask(taskId);
      task.taskTitle = taskTitle;
      task.taskText = taskText;
      task.save();
      res.status(200).json({ task: task });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async deleteTask(req, res) {
    try {
      const taskId = req.params.id;
      const task = await TaskService.findTask(taskId);
      await task.destroy();
      res.status(200).json({ taskId: taskId });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
}

export default new taskController();