import { z } from "zod";
export const projectSchema = z.object({
  client_name: z.string().nonempty(),
  country: z.string().nonempty(),
  location: z.string().nonempty(),
  project_name: z.string().nonempty(),
  status: z.string().nonempty(),
});

export const employeeSchema = z.object({
  name: z.string().nonempty(),
  email: z.string().email(),
  password: z.string().min(8).nonempty(),
});

export const employeeUpdateSchema = z.object({
  name: z.string().nonempty(),
  email: z.string().email(),
});

export const orderSchema = z.object({
  sign_type: z.string().nonempty(),
  quantity: z.string().nonempty().refine(value => !isNaN(Number(value)), {
    message: "Quantity must be a number",
  }),
  projectId: z.string().nonempty().refine(value => !isNaN(Number(value)), {
    message: "Quantity must be a number",
  }),
  mode: z.string().nonempty(),
});
