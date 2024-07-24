import { validatePartialTask, validateTask } from "../schemas/Tasks.js";
export class TaskController {
  constructor(TaskModel) {
    this.TaskModel = TaskModel;
  }

  add = async (request, response)=>{
    console.log(request.body);
    const validationResult = validateTask(request.body);

    if(!validationResult.success) return response.status(400).json({message: JSON.parse(validationResult.message)});

    try {
      const newTask = await this.TaskModel.create({data: request.body});

      response.status(201).json({message: 'Task created succesfully', data: newTask});

    } catch (error) {
      response.status(500).json({message: 'Internal server error'});
    }
  }

  get = async (request, response) => {
    try {
      const { status } = request.query;
      const tasks = await this.TaskModel.getAll(status);
      response.json(tasks);
    } catch (error) {
      response.status(500).json({
        message: "Theres has been an error in the server",
        error: JSON.parse(error)
      });
    }
  };

  edit = async (request, response) => {
    const validationResult = validatePartialTask(request.body);
    const { id } = request.params;
    console.log(validationResult);

    if (!validationResult.success) {
      return response
        .status(400)
        .json({ error: JSON.parse(validationResult.message) });
    }

    try {
      const updatedData = await this.TaskModel.update({
        id: id,
        newData: validationResult.data
      });
      if (!updatedData) {
        return response.status(404).json({ message: "Task not found" });
      }

      return response.json({
        message: "Task updated succesfully",
        data: JSON.parse(updatedData)
      });
    } catch (error) {
      response.status(500).json({
        message: "There has been an error in the server",
        error: JSON.parse(error)
      });
    }
  };

  delete = async (request, response) => {
    const { id } = request.params;

    try {
      const result = await this.TaskModel.delete({ id: id });

      if (!result) {
        response.status(404).json({ task: "Task was not found" });
      }

      return response.json({ message: "Task deleted successfully" });
    } catch (error) {
      response
        .status(500)
        .json({ message: "There has been an error in the server" });
    }
  };
}
