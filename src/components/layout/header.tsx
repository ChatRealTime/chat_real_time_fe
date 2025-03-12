import { LogOut, MessageSquare, UserCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";
import { apiInstance } from "../../utils/api.config";
import toast from "react-hot-toast";
import { handleErrorApi } from "../../utils/utils";
import { LogoutResponseType } from "../../types/auth.types";

export default function Header() {
  const { authUser } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res: LogoutResponseType = await apiInstance.post("/auth/logout");
      toast.success(res.message);
      navigate("/login");
    } catch (error: any) {
      handleErrorApi(error);
    }
  };

  return (
    <header className="navbar bg-base-100 shadow-sm px-4 md:px-8 lg:px-16">
      <div className="navbar-start">
        <Link to={"/"} className="btn btn-ghost text-xl">
          <MessageSquare className="h-6 w-6 text-primary mr-2" />
          HA Chat
        </Link>
      </div>
      <div className="navbar-end">
        {!authUser ? (
          <>
            <Link to={"/login"} className="btn btn-ghost">
              Đăng nhập
            </Link>
            <Link to={"/sign-up"} className="btn btn-primary">
              Đăng ký
            </Link>
          </>
        ) : (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src={authUser.avatar || "/avatar-default.png"}
                  alt="Avatar"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-48"
            >
              <li>
                <Link to="/profile">
                  <UserCircle className="h-5 w-5 mr-2" />
                  Hồ sơ
                </Link>
              </li>
              <li>
                <Link to="/chat">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Chat
                </Link>
              </li>
              <li>
                <button className="text-red-500" onClick={handleLogout}>
                  <LogOut className="h-5 w-5 mr-2" /> Đăng xuất
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
