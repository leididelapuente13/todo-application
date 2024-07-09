import { z } from "zod";

const taskSchema = z.object({
  task: z.required({message: 'The task is required'}).string({message: 'The task should be an string'}).min(3, {message: 'the task should be at least 3 characters of length'}),
  status: z.required().boolean().default(false)
});

export const validateTask = ({task})=>{
    taskSchema.safeParse(task);
}

// Validation schema for updates
export const validatePartialTask = ({task})=>{
    taskSchema.partial().safeParse(task);
}