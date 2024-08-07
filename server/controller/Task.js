import e from "express";
import { validatePartialTask, validateTask } from "../schemas/Tasks.js";
export class TaskController {
  constructor({ TaskModel }) {
    this.TaskModel = TaskModel;
  }

  add = async (request, response) => {
    const validationResult = validateTask({ data: request.body });

    if (!validationResult.success)
      return response
        .status(400)
        .json({ message: JSON.parse(validationResult.message) });

    try {
      const newTaskRequest = await this.TaskModel.create({
        data: request.body
      });

      response.status(201).json(newTaskRequest);
    } catch (error) {
      response
        .status(500)
        .json({ message: "Internal server error", error: error.message });
    }
  };

  get = async (request, response) => {
    const { status } = request.query;

    const { validationError, statusInTinyInt } = status !== undefined && this.parseStatusToTinyInt({
      status: status
    });

    if (status !== undefined && validationError !== undefined)
      return response.json({ error: validationError });

    const taskStatus = status === undefined ? status : statusInTinyInt;
    try {
      const tasks = await this.TaskModel.get({ status: taskStatus });
      response.json(tasks);
    } catch (error) {
      response.status(500).json({
        message: "Theres has been an error in the server",
        error: error.message
      });
    }
  };

  parseStatusToTinyInt = ({ status }) => {
    let statusToLowerCase = status.toLowerCase();
    if (statusToLowerCase !== "true" && statusToLowerCase !== "false") {
      return { validationError: "Invalid status: " + status };
    }
    const statusInTinyInt = statusToLowerCase === "true" ? 1 : 0;

    return { statusInTinyInt: statusInTinyInt };
  };

  edit = async (request, response) => {
    const validationResult = validatePartialTask({data: request.body});

    if (!validationResult.success) {
      return response
        .status(400)
        .json({ error: validationResult.message});
    }

    const { id } = request.params;
    console.log(id);
    try {
      const {taskWasUpdated, updatedTask} = await this.TaskModel.update({
        id: id,
        newData: request.body
      });

      if (!taskWasUpdated) {
        return response.status(404).json({ message: "Task not found" });
      }

      return response.json({
        message: "Task updated successfully",
        data: updatedTask
      });
    } catch (error) {
      response.status(500).json({
        message: "There has been an error in the server",
        error: error.message
      });
    }
  };

  delete = async (request, response) => {
    const { id } = request.params;
    console.log(id);
    try {
      const result = await this.TaskModel.delete({ id });

      if (!result) {
        response.status(404).json({ task: "Task was not found" });
      }

      return response.json({ message: "Task deleted successfully" });
    } catch (error) {
      response
        .status(500)
        .json({ error: error.message });
    }
  };
}
