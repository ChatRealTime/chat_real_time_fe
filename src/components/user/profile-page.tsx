import { Camera } from "lucide-react";
import { useAuthStore } from "../../store/useAuthStore";

export default function ProfilePage() {
  const { authUser } = useAuthStore();
  return (
    <div className="flex h-screen bg-base-200">
      {/* Left side - Avatar */}
      <div className="w-2/5 flex flex-col items-center justify-center p-8">
        <div className="relative">
          <div className="avatar">
            <div className="w-64 h-64 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src={authUser?.avatar || "/avatar-default.png"}
                alt="User avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <button className="btn btn-circle btn-md absolute bottom-4 right-2 bg-primary text-primary-content">
            <Camera size={20} />
          </button>
          <input type="file" className="hidden" accept="image/*" />
        </div>
      </div>

      {/* Right side - User Info */}
      <div className="w-3/5 p-12 flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-12">Thông tin cá nhân</h1>

        <div className="form-control w-full max-w-md mb-8">
          <label className="label">
            <span className="label-text text-xl">Tên hiển thị</span>
          </label>
          <input
            type="text"
            className="input input-bordered input-lg w-full mt-2"
            value={authUser?.fullname}
            disabled
          />
        </div>

        <div className="form-control w-full max-w-md mb-12">
          <label className="label">
            <span className="label-text text-xl">Email</span>
          </label>
          <input
            type="email"
            className="input input-bordered input-lg w-full mt-2"
            value={authUser?.email}
            disabled
          />
        </div>

        <button className="btn btn-primary btn-lg w-full max-w-md">
          Cập nhật thông tin
        </button>
      </div>
    </div>
  );
}
