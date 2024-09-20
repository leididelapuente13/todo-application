import { validatePartialTask, validateTask } from "../schemas/Tasks.js";
import parseBooleanStatusToTinyInt from "../helpers/booleanToTinyInt.js";
export class TaskController {
  constructor({ TaskModel }) {
    this.TaskModel = TaskModel;
  }

  add = async (request, response) => {
    console.log("data in controller: ", request.body);
    const validationResult = validateTask({ data: request.body });

    if (!validationResult.success)
      return response
        .status(400)
        .json({ message: JSON.parse(validationResult.message) });

    try {
      const newTaskRequest = await this.TaskModel.create({
        data: validationResult.data
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

    const { validationError, statusInTinyInt } =
      status !== undefined &&
      parseBooleanStatusToTinyInt({
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

  edit = async (request, response) => {
    const validationResult = validatePartialTask({ data: request.body });

    if (!validationResult.success) {
      return response.status(400).json({ error: validationResult.message });
    }

    const { id } = request.params;
    try {
      const { taskWasUpdated, updatedTask } = await this.TaskModel.update({
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

  editStatus = async (request, response) => {
    const { id } = request.params;
    const validationResult = validatePartialTask({ data: request.body });
    console.log(id, request.body);
    if (!validationResult.success) {
      return response.status(400).json({ error: validationResult.message });
    }
    console.log(validationResult);
    try {
      const { taskWasUpdated } = await this.TaskModel.updateStatus({
        id: id,
        status: validationResult.data.status
      });
      console.log(taskWasUpdated);
      if (!taskWasUpdated) {
        return response.status(404).json({ message: "Task not found" });
      }
      return response.json({
        message: "Task updated successfully"
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
    try {
      const result = await this.TaskModel.delete({ id });

      if (!result)
        return response.status(404).json({ task: "Task was not found" });

      response.json({ message: "Task deleted successfully" });
    } catch (error) {
      response.status(500).json({ error: error.message });
    }
  };

  deleteFinished = async (request, response) => {
    try {
      const result = await this.TaskModel.deleteAllFinished();

      if (!result)
        return response
          .status(404)
          .json({ message: "Not found finished tasks" });
      response.json({ message: "Tasks deleted successfully" });
    } catch (error) {
      response.status(500).json({ error: error.message });
    }
  };
}
