import { Router } from "express"
import { TaskController } from "../controller/Task.js";

export const createTaskRouter = ({taskModel})=>{
    const taskRouter = new Router();
    const taskController = new TaskController({taskModel: taskModel});

    taskRouter.post('/', taskController.add);
    
    return taskRouter;
}