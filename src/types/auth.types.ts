import { z } from "zod";

export const LoginBody = z.object({
  email: z.string(),
  password: z.string(),
});

export type LoginBodyType = z.infer<typeof LoginBody>;

export const LoginResponse = z.object({
  message: z.string(),
  data: z.object({
    email: z.string(),
    fullname: z.string(),
    avatar: z.string().nullable(),
  }),
});

export type LoginResponseType = z.infer<typeof LoginResponse>;
