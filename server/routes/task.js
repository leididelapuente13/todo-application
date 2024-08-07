import { Router } from "express"
import { TaskController } from "../controller/Task.js";

export const createTaskRouter = ({TaskModel})=>{
    const taskRouter = Router();
    const taskController = new TaskController({TaskModel: TaskModel});

    taskRouter.get('/', taskController.get)
    taskRouter.post('/', taskController.add);
    taskRouter.delete('/:id', taskController.delete);
    taskRouter.put('/:id', taskController.edit)
    return taskRouter;
}