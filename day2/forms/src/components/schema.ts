import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

const schema = z
  .object({
    fullname: z.string().min(2, "Too short").max(20, "Too long"),
    email: z.email("Invalid email"),
    password: z.string().min(6, "Too short").max(20, "Too long"),
    confirmPassword: z.string().min(6, "Too short").max(20, "Too long"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const resolver = zodResolver(schema);
export type FormDataType = z.infer<typeof schema>;