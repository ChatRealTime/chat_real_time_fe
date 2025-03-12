import { z } from "zod";

export const LoginBody = z.object({
  email: z.string(),
  password: z.string(),
});

export type LoginBodyType = z.infer<typeof LoginBody>;

export const LoginResponse = z.object({
  message: z.string(),
  data: z.object({
    _id: z.string(),
    email: z.string(),
    fullname: z.string(),
    avatar: z.string().nullable(),
  }),
});

export type LoginResponseType = z.infer<typeof LoginResponse>;

export const RegisterBody = z
  .object({
    email: z.string(),
    password: z.string(),
    fullname: z.string(),
    confirmPassword: z.string(),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "Xác nhận mật khẩu không khớp",
        path: ["confirmPassword"],
      });
    }
  });

export type RegisterBodyType = z.infer<typeof RegisterBody>;

export const RegisterResponse = z.object({
  message: z.string(),
  data: z.object({
    _id: z.string(),
    email: z.string(),
    fullname: z.string(),
    avatar: z.string().nullable(),
  }),
});

export type RegisterResponseType = z.infer<typeof RegisterResponse>;

export const LogoutResponse = z.object({
  message: z.string(),
});

export type LogoutResponseType = z.infer<typeof LogoutResponse>;
