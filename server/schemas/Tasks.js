import { z } from "zod";

const taskSchema = z.object({
  task: z
    .string({ message: "The task should be an string" })
    .min(3, { message: "the task should be at least 3 characters of length" }),
  status: z
    .number().int().nonnegative().lte(1)
    .default(0)
});

export const validateTask = ({data}) => {
  const result = taskSchema.safeParse(data);
  return result;
};

// Validation schema for updates
export const validatePartialTask = ({ data }) => {
  const result = taskSchema.partial().safeParse(data);
  console.log('result', result)
  return result;
};