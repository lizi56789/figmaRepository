import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import CaseManagement from "./components/CaseManagement";

function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />
        <main className="flex-1 overflow-auto bg-gray-50">
          <CaseManagement />
        </main>
      </div>
    </div>
  );
}

export default App;
