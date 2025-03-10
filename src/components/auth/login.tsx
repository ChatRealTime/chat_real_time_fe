import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { apiInstance } from "../../utils/api.config";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await apiInstance.post("/auth/login", {
        email,
        password,
      });

      navigate("/profile");
    } catch (error) {
      console.error("Lỗi đăng nhập:", error);
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

          <form onSubmit={handleLogin}>
            <div className="form-control w-full mb-4">
              <label className="label" htmlFor="email">
                <span className="label-text">Email</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="abc@gmail.com"
                className="input input-bordered w-full"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-control w-full mb-6">
              <label className="label" htmlFor="password">
                <span className="label-text">Mật khẩu</span>
              </label>
              <input
                id="password"
                type="password"
                placeholder="123456"
                className="input input-bordered w-full"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
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
