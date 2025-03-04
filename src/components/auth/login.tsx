import { Link } from "react-router-dom";

export default function Login() {
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

          <form>
            <div className="form-control w-full mb-4">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="abc@gmail.com"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control w-full mb-6">
              <label className="label">
                <span className="label-text">Mật khẩu</span>
              </label>
              <input
                type="password"
                placeholder="123456"
                className="input input-bordered w-full"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Quên mật khẩu?
                </a>
              </label>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary w-full">Đăng nhập</button>
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
