import React, { useState } from 'react';

interface CaseData {
  caseNumber: string;
  caseStatus: string;
  isCommonProblem: string;
  complainant: string;
  idNumber: string;
  name: string;
  allocationTime: string;
  latestCallTime: string;
  batchNumber: string;
  adjustmentStatus: string;
  communicationStatus: string;
}

const CustomerServiceSystem: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<'myCases' | 'departmentCases'>('myCases');
  const [caseData, setCaseData] = useState<CaseData[]>([]);
  
  return (
    <div className="flex h-screen bg-gray-100">
      {/* 侧边栏 */}
      <div className="w-48 bg-blue-800 text-white">
        <div className="p-4 border-b border-blue-700 flex items-center">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-2">
            <span className="text-blue-800">⚖</span>
          </div>
          <h1 className="text-lg font-bold">晨鑫调解中心管理系统</h1>
        </div>
        
        <div className="p-4 border-b border-blue-700">
          <div className="flex items-center mb-2">
            <span className="mr-2">📊</span>
            <span>仪表盘</span>
          </div>
        </div>
        
        <div className="p-4 border-b border-blue-700">
          <div className="flex items-center">
            <span className="mr-2">🗂️</span>
            <span>工作台</span>
          </div>
          <div className="ml-6 mt-2">
            <div className="py-1 bg-blue-700 rounded px-2">我的案件</div>
            <div className="py-1">我的调解</div>
            <div className="py-1">我的签约</div>
            <div className="py-1">我的诉讼</div>
            <div className="py-1">我的诉款</div>
            <div className="py-1">我的短信</div>
          </div>
        </div>
        
        <div className="p-4 border-b border-blue-700">
          <div className="flex items-center">
            <span className="mr-2">📝</span>
            <span>客户查询记录</span>
          </div>
        </div>
        
        <div className="p-4 border-b border-blue-700">
          <div className="flex items-center">
            <span className="mr-2">📁</span>
            <span>案件管理</span>
          </div>
        </div>
        
        <div className="p-4 border-b border-blue-700">
          <div className="flex items-center">
            <span className="mr-2">🤝</span>
            <span>调解管理</span>
          </div>
        </div>
        
        <div className="p-4 border-b border-blue-700">
          <div className="flex items-center">
            <span className="mr-2">⚖️</span>
            <span>诉讼管理</span>
          </div>
        </div>
      </div>
      
      {/* 主内容区 */}
      <div className="flex-1 flex flex-col">
        {/* 顶部栏 */}
        <div className="bg-white p-4 flex justify-between items-center border-b">
          <div className="flex items-center">
            <span className="text-blue-800 mr-1">📋</span>
            <span className="text-gray-500">工作台 / 我的案件</span>
          </div>
          <div className="flex items-center">
            <span className="mr-4">欢迎您，宋方毅</span>
            <span className="text-gray-500">今天是2025年3月18日</span>
            <div className="ml-4 flex">
              <span className="mx-2 text-blue-600">🔔</span>
              <span className="mx-2 text-blue-600">👤</span>
              <span className="mx-2 text-blue-600">🔄</span>
            </div>
          </div>
        </div>
        
        {/* 选项卡 */}
        <div className="bg-white p-4">
          <div className="flex border-b">
            <div 
              className={`px-4 py-2 ${selectedTab === 'myCases' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
              onClick={() => setSelectedTab('myCases')}
            >
              我的案件
            </div>
            <div 
              className={`px-4 py-2 ${selectedTab === 'departmentCases' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
              onClick={() => setSelectedTab('departmentCases')}
            >
              部门案件
            </div>
          </div>
        </div>
        
        {/* 搜索表单 */}
        <div className="bg-white p-4 m-4 rounded-md shadow">
          <div className="grid grid-cols-4 gap-4">
            <div className="flex flex-col">
              <label className="mb-1 text-sm">案件编号</label>
              <textarea className="border rounded p-2 h-20" />
            </div>
            
            <div className="flex flex-col">
              <label className="mb-1 text-sm">案件状态</label>
              <div className="border rounded p-2 flex justify-between">
                <span className="text-gray-400">请选择</span>
                <span>▼</span>
              </div>
            </div>
            
            <div className="flex flex-col">
              <label className="mb-1 text-sm">是否常见问题</label>
              <div className="border rounded p-2 flex justify-between">
                <span className="text-gray-400">请选择</span>
                <span>▼</span>
              </div>
            </div>
            
            <div className="flex flex-col">
              <label className="mb-1 text-sm">批次号</label>
              <input className="border rounded p-2" />
            </div>
            
            <div className="flex flex-col">
              <label className="mb-1 text-sm">委托方</label>
              <div className="border rounded p-2 flex justify-between">
                <span className="text-gray-400">请选择</span>
                <span>▼</span>
              </div>
            </div>
            
            <div className="flex flex-col">
              <label className="mb-1 text-sm">证件号</label>
              <input className="border rounded p-2" />
            </div>
            
            <div className="flex flex-col">
              <label className="mb-1 text-sm">姓名</label>
              <input className="border rounded p-2" />
            </div>
            
            <div className="flex flex-col">
              <label className="mb-1 text-sm">分配时间</label>
              <div className="flex">
                <input className="border rounded p-2 w-1/2 mr-1" placeholder="开始日期" />
                <input className="border rounded p-2 w-1/2" placeholder="结束日期" />
              </div>
            </div>
            
            <div className="flex flex-col">
              <label className="mb-1 text-sm">是否上传平台</label>
              <div className="border rounded p-2 flex justify-between">
                <span className="text-gray-400">请选择</span>
                <span>▼</span>
              </div>
            </div>
            
            <div className="flex flex-col">
              <label className="mb-1 text-sm">调解编号</label>
              <input className="border rounded p-2" />
            </div>
            
            <div className="flex flex-col">
              <label className="mb-1 text-sm">调解状态</label>
              <div className="border rounded p-2 flex justify-between">
                <span className="text-gray-400">请选择</span>
                <span>▼</span>
              </div>
            </div>
            
            <div className="flex flex-col">
              <label className="mb-1 text-sm">沟通状态</label>
              <div className="border rounded p-2 flex justify-between">
                <span className="text-gray-400">请选择</span>
                <span>▼</span>
              </div>
            </div>
            
            <div className="flex flex-col">
              <label className="mb-1 text-sm">最近一次AI标签</label>
              <input className="border rounded p-2" />
            </div>
          </div>
          
          <div className="flex justify-center mt-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">搜索</button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">清空</button>
          </div>
        </div>
        
        {/* 功能按钮 */}
        <div className="px-4 flex space-x-2">
          <button className="bg-blue-500 text-white px-3 py-1 rounded flex items-center">
            <span>案件导出</span>
            <span className="ml-1">▼</span>
          </button>
          <button className="bg-blue-500 text-white px-3 py-1 rounded flex items-center">
            <span>提交电子函件</span>
            <span className="ml-1">▼</span>
          </button>
          <button className="bg-blue-500 text-white px-3 py-1 rounded flex items-center">
            <span>申请短信群发</span>
            <span className="ml-1">▼</span>
          </button>
          <button className="bg-blue-500 text-white px-3 py-1 rounded flex items-center">
            <span>案件上传平台</span>
            <span className="ml-1">▼</span>
          </button>
          <button className="bg-orange-500 text-white px-3 py-1 rounded flex items-center">
            <span>取消上传平台</span>
            <span className="ml-1">▼</span>
          </button>
          <button className="bg-blue-500 text-white px-3 py-1 rounded flex items-center">
            <span>导出函件</span>
            <span className="ml-1">▼</span>
          </button>
        </div>
        
        {/* 表格 */}
        <div className="p-4 flex-1">
          <div className="bg-white rounded-md shadow overflow-x-auto">
            <div className="p-2 bg-yellow-50 text-xs">
              查询结果统计：列表条数：0，列表当前案件总额：¥ 0
            </div>
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100 text-sm">
                  <th className="py-2 px-3 border-b text-left">
                    <input type="checkbox" />
                  </th>
                  <th className="py-2 px-3 border-b text-left">案件状态 ▼</th>
                  <th className="py-2 px-3 border-b text-left">调解状态 ▼</th>
                  <th className="py-2 px-3 border-b text-left">调解编号 ▼</th>
                  <th className="py-2 px-3 border-b text-left">最近一次... ▼</th>
                  <th className="py-2 px-3 border-b text-left">批次号 ▼</th>
                  <th className="py-2 px-3 border-b text-left">委托方 ▼</th>
                  <th className="py-2 px-3 border-b text-left">调解中心 ▼</th>
                  <th className="py-2 px-3 border-b text-left">案件编号 ▼</th>
                  <th className="py-2 px-3 border-b text-left">案件类型 ▼</th>
                  <th className="py-2 px-3 border-b text-left">姓名 ▼</th>
                  <th className="py-2 px-3 border-b text-left">证件号 ▼</th>
                  <th className="py-2 px-3 border-b text-left">分配时间 ▼</th>
                  <th className="py-2 px-3 border-b text-left">分配状态 ▼</th>
                  <th className="py-2 px-3 border-b text-left">调解员 ▼</th>
                  <th className="py-2 px-3 border-b text-left">沟通状态 ▼</th>
                  <th className="py-2 px-3 border-b text-left">最近联系... ▼</th>
                </tr>
              </thead>
              <tbody>
                {caseData.length === 0 && (
                  <tr>
                    <td colSpan={17} className="text-center py-8">
                      暂无数据
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            
            {/* 分页 */}
            <div className="p-4 flex justify-between items-center text-sm">
              <div>共 0 条</div>
              <div className="flex items-center">
                <span>20条/页</span>
                <div className="flex ml-4">
                  <button className="border px-2 py-1 mx-1 text-gray-400">《</button>
                  <button className="border px-2 py-1 mx-1 text-gray-400">〈</button>
                  <button className="border px-2 py-1 mx-1 bg-blue-500 text-white">1</button>
                  <button className="border px-2 py-1 mx-1 text-gray-400">〉</button>
                  <button className="border px-2 py-1 mx-1 text-gray-400">》</button>
                </div>
                <div className="ml-4">
                  <span>前往</span>
                  <input className="border w-10 mx-1 px-2 py-1" />
                  <span>页</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 底部通话平台 */}
      <div className="fixed bottom-0 left-0 right-0 bg-blue-800 text-white p-2 flex items-center">
        <div className="mr-4">MSCC语音外呼平台</div>
        <input className="bg-white text-black rounded px-2 py-1 mx-1" placeholder="请选择呼叫中心" />
        <input className="bg-white text-black rounded px-2 py-1 mx-1" placeholder="请选择主叫号码" />
        <input className="bg-white text-black rounded px-2 py-1 mx-1" placeholder="请输入被叫号码" />
        <button className="bg-green-500 rounded-full w-10 h-10 flex justify-center items-center mx-2">
          <span>📞</span>
        </button>
        <button className="bg-red-500 rounded-full w-10 h-10 flex justify-center items-center mx-2">
          <span>📵</span>
        </button>
      </div>
    </div>
  );
};

export default CustomerServiceSystem; 