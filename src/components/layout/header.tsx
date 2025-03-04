import { MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="navbar bg-base-100 shadow-sm px-4 md:px-8 lg:px-16">
      <div className="navbar-start">
        <Link to={"/"} className="btn btn-ghost text-xl">
          <MessageSquare className="h-6 w-6 text-primary mr-2" />
          HA Chat
        </Link>
      </div>
      <div className="navbar-end">
        <Link to={"/login"} className="btn btn-ghost">
          Đăng nhập
        </Link>
        <Link to={"/sign-up"} className="btn btn-primary">
          Đăng ký
        </Link>
      </div>
    </header>
  );
}
