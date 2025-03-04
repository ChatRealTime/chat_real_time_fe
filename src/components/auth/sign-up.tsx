import { Link } from "react-router-dom";

export default function SignUp() {
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

          <form>
            <div className="form-control w-full mb-4">
              <label className="label">
                <span className="label-text">Tên hiển thị</span>
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control w-full mb-4">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="abc@email.com"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control w-full mb-4">
              <label className="label">
                <span className="label-text">Mật khẩu</span>
              </label>
              <input
                type="password"
                placeholder="123456"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control w-full mb-6">
              <label className="label">
                <span className="label-text">Xác nhận mật khẩu</span>
              </label>
              <input
                type="password"
                placeholder="123456"
                className={`input input-bordered w-full`}
                required
              />
            </div>

            <div className="form-control">
              <label className="label cursor-pointer justify-start gap-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary"
                  required
                />
                <span className="label-text">
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
              <button className="btn btn-primary w-full">Đăng ký</button>
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
