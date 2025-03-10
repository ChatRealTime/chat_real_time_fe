import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import {
  LoginBody,
  LoginBodyType,
  LoginResponseType,
} from "../../types/auth.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { apiInstance } from "../../utils/api.config";
import { handleErrorApi } from "../../utils/utils";
import toast from "react-hot-toast";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const form = useForm<LoginBodyType>({
    resolver: zodResolver(LoginBody),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = async (body: LoginBodyType) => {
    try {
      const res: LoginResponseType = await apiInstance.post("/auth/login", {
        email: body.email,
        password: body.password,
      });
      toast.success(res.message);
      navigate("/profile");
    } catch (error) {
      handleErrorApi({ error, setError: form.setError });
    }
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <div className="card w-full max-w-sm bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold text-center mb-2">
            Đăng nhập
          </h2>
          <p className="text-center text-base-content/70 mb-6">
            Chào mừng bạn trờ lại với HA Chat
          </p>

          <form
            onSubmit={form.handleSubmit(handleLogin, (errors) => {
              console.warn(errors);
            })}
          >
            <div className="form-control w-full mb-4">
              <label className="label" htmlFor="email">
                <span className="label-text">Email</span>
              </label>
              <input
                id="email"
                type="email"
                {...form.register("email")} // this will register the input to react-hook-form
                placeholder="abc@gmail.com"
                className="input input-bordered w-full"
                required
              />
              {form.formState.errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {form.formState.errors.email.message}
                </p>
              )}
            </div>

            <div className="form-control w-full mb-6">
              <label className="label" htmlFor="password">
                <span className="label-text">Mật khẩu</span>
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  {...form.register("password")}
                  placeholder="123456"
                  className="input input-bordered w-full"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center px-2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <Eye size={16} /> : <EyeOff size={16} />}
                </button>
              </div>
              {form.formState.errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {form.formState.errors.password.message}
                </p>
              )}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover mt-1">
                  Quên mật khẩu?
                </a>
              </label>
            </div>

            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary w-full">
                Đăng nhập
              </button>
            </div>
          </form>

          <div className="divider my-6">HAY</div>

          <div className="text-center">
            <p className="text-sm">
              Chưa có tài khoản?
              <Link to={"/sign-up"} className="link link-primary ml-1">
                Đăng ký
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
