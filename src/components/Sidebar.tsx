import { useState } from "react";
import {
  Home,
  Layers,
  MessageSquare,
  FileText,
  BarChart2,
  HelpCircle,
  Users,
  Phone,
  ChevronDown,
  Menu
} from "lucide-react";

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export default function Sidebar({ collapsed, onToggle }: SidebarProps) {
  const [activeItem, setActiveItem] = useState("myCases");
  const [workspaceExpanded, setWorkspaceExpanded] = useState(true);

  const mainMenuItems = [
    { id: "dashboard", label: "仪表盘", icon: Home },
  ];

  const workspaceItems = [
    { id: "myCases", label: "我的案件", icon: FileText },
    { id: "myMediation", label: "我的调解", icon: MessageSquare },
    { id: "mySignature", label: "我的签约", icon: FileText },
    { id: "myComplaints", label: "我的诉讼", icon: HelpCircle },
    { id: "myReturns", label: "我的还款", icon: BarChart2 },
    { id: "myMessages", label: "我的短信", icon: MessageSquare },
    { id: "customerLog", label: "客户查询记录", icon: Users },
  ];

  const managementItems = [
    { id: "caseManagement", label: "案件管理", icon: Layers },
    { id: "mediationManagement", label: "调解管理", icon: MessageSquare },
    { id: "complaintManagement", label: "诉讼管理", icon: HelpCircle },
    { id: "customerManagement", label: "客户管理", icon: Users },
  ];

  return (
    <aside className={`flex flex-col bg-[#1e293b] text-white transition-all ${collapsed ? "w-16" : "w-64"}`}>
      <div className="flex h-12 items-center justify-between border-b border-blue-800 px-4">
        <button onClick={onToggle} className="text-gray-300 hover:text-white">
          <Menu className="h-5 w-5" />
        </button>
      </div>
      <div className="overflow-y-auto">
        <ul className="space-y-1 p-2">
          {mainMenuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveItem(item.id)}
                className={`flex w-full items-center rounded px-3 py-2 ${
                  activeItem === item.id ? "bg-blue-800" : "hover:bg-blue-900"
                }`}
              >
                <item.icon className="h-5 w-5" />
                {!collapsed && <span className="ml-2">{item.label}</span>}
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-2">
          <div
            className="flex cursor-pointer items-center justify-between px-4 py-2 text-sm font-medium text-gray-300"
            onClick={() => setWorkspaceExpanded(!workspaceExpanded)}
          >
            {!collapsed && <span>工作台</span>}
            {!collapsed && <ChevronDown className={`h-4 w-4 transition-transform ${workspaceExpanded ? "" : "-rotate-90"}`} />}
          </div>

          {workspaceExpanded && (
            <ul className="space-y-1 p-2">
              {workspaceItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveItem(item.id)}
                    className={`flex w-full items-center rounded px-3 py-2 ${
                      activeItem === item.id ? "bg-blue-800" : "hover:bg-blue-900"
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    {!collapsed && <span className="ml-2">{item.label}</span>}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <ul className="space-y-1 p-2">
          {managementItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveItem(item.id)}
                className={`flex w-full items-center rounded px-3 py-2 ${
                  activeItem === item.id ? "bg-blue-800" : "hover:bg-blue-900"
                }`}
              >
                <item.icon className="h-5 w-5" />
                {!collapsed && <span className="ml-2">{item.label}</span>}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-auto border-t border-blue-800 p-4">
        <div className="flex items-center text-sm">
          <Phone className="h-4 w-4" />
          {!collapsed && <span className="ml-2">MSCC语音外呼平台</span>}
        </div>
      </div>
    </aside>
  );
}
