import { Link, useNavigate } from "react-router-dom";
import { apiInstance } from "../../utils/api.config";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  RegisterBody,
  RegisterBodyType,
  RegisterResponseType,
} from "../../types/auth.types";
import toast from "react-hot-toast";
import { handleErrorApi } from "../../utils/utils";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const form = useForm<RegisterBodyType>({
    resolver: zodResolver(RegisterBody),
    defaultValues: {
      email: "",
      fullname: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleRegister = async (body: RegisterBodyType) => {
    try {
      const res: RegisterResponseType = await apiInstance.post("/auth/signup", {
        email: body.email,
        password: body.password,
        fullname: body.fullname,
        confirmPassword: body.confirmPassword,
      });
      toast.success(res.message);
      navigate("/login");
    } catch (error) {
      handleErrorApi({ error, setError: form.setError });
    }
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold text-center mb-2">
            Tạo tài khoản
          </h2>
          <p className="text-center text-base-content/70 mb-6">
            Vui lòng điền các thông tin bên dưới để bắt đầu
          </p>

          <form
            onSubmit={form.handleSubmit(handleRegister, (errors) => {
              console.warn(errors);
            })}
          >
            <div className="form-control w-full mb-4">
              <label className="label" htmlFor="fullname">
                <span className="label-text">Tên hiển thị</span>
              </label>
              <input
                id="fullname"
                {...form.register("fullname")}
                type="text"
                placeholder="John Doe"
                className="input input-bordered w-full"
                required
              />
            </div>
            {form.formState.errors.fullname && (
              <p className="text-red-500 text-sm mt-1">
                {form.formState.errors.fullname.message}
              </p>
            )}

            <div className="form-control w-full mb-4">
              <label className="label" htmlFor="email">
                <span className="label-text">Email</span>
              </label>
              <input
                id="email"
                {...form.register("email")}
                type="email"
                placeholder="abc@email.com"
                className="input input-bordered w-full"
                required
              />
            </div>
            {form.formState.errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {form.formState.errors.email.message}
              </p>
            )}

            <div className="form-control w-full mb-4">
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
            </div>

            <div className="form-control w-full mb-6">
              <label className="label" htmlFor="confirmPassword">
                <span className="label-text">Xác nhận mật khẩu</span>
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  {...form.register("confirmPassword")}
                  placeholder="123456"
                  className="input input-bordered w-full"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center px-2"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <Eye size={16} />
                  ) : (
                    <EyeOff size={16} />
                  )}
                </button>
              </div>
              {form.formState.errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {form.formState.errors.confirmPassword.message}
                </p>
              )}
            </div>

            <div className="form-control">
              <label className="label cursor-pointer justify-start gap-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary"
                  required
                />
                <span className="label-text flex flex-wrap gap-2">
                  Tôi đồng ý với{" "}
                  <Link to="#" className="link link-primary">
                    Điều khoản dịch vụ
                  </Link>{" "}
                  và{" "}
                  <Link to="#" className="link link-primary">
                    Chính sách bảo mật
                  </Link>
                </span>
              </label>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary w-full" type="submit">
                Đăng ký
              </button>
            </div>
          </form>

          <div className="divider my-6">HAY</div>

          <div className="text-center">
            <p className="text-sm">
              Đã có tài khoản
              <Link to={"/login"} className="link link-primary ml-1">
                Đăng nhập
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
