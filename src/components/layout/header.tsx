import { MessageSquare } from "lucide-react";

export default function Header() {
  return (
    <header className="navbar bg-base-100 shadow-sm px-4 md:px-8 lg:px-16">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">
          <MessageSquare className="h-6 w-6 text-primary mr-2" />
          HA Chat
        </a>
      </div>
      <div className="navbar-end">
        <a className="btn btn-ghost">Đăng nhập</a>
        <a className="btn btn-primary">Đăng ký</a>
      </div>
    </header>
  );
}
