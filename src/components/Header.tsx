import { Bell, LogOut, User } from "lucide-react";

export default function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-4">
      <div className="flex items-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600">
          <img
            src="https://same-assets.com/images/default-service-icon.svg"
            alt="Logo"
            className="h-6 w-6"
          />
        </div>
        <h1 className="text-xl font-bold text-gray-800">晨鑫调解中心管理系统</h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center text-sm text-gray-600">
          <span>欢迎您，宋方毅</span>
          <span className="mx-2 text-gray-400">今天是2025年3月18日</span>
        </div>
        <div className="flex items-center gap-3">
          <Bell className="h-5 w-5 text-gray-500" />
          <User className="h-5 w-5 text-gray-500" />
          <LogOut className="h-5 w-5 text-gray-500" />
        </div>
      </div>
    </header>
  );
}
