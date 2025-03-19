import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calendar, ChevronLeft, ChevronRight, Download, FileText, Filter, Upload } from "lucide-react";

export default function CaseManagement() {
  const [activeTab, setActiveTab] = useState("myCases");

  return (
    <div className="container mx-auto p-6">
      <div className="mb-4 flex items-center">
        <div className="flex space-x-2 text-sm text-gray-500">
          <span>工作台</span>
          <span>/</span>
          <span>我的案件</span>
        </div>
      </div>

      <Tabs defaultValue="myCases" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="mb-4 grid w-full grid-cols-2 bg-transparent p-0">
          <TabsTrigger
            value="myCases"
            className={`border-b-2 pb-2 text-base font-medium ${
              activeTab === "myCases" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500"
            }`}
          >
            我的案件
          </TabsTrigger>
          <TabsTrigger
            value="departmentCases"
            className={`border-b-2 pb-2 text-base font-medium ${
              activeTab === "departmentCases" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500"
            }`}
          >
            部门案件
          </TabsTrigger>
        </TabsList>

        <TabsContent value="myCases" className="mt-0">
          <div className="rounded-md bg-white p-6 shadow-sm">
            <div className="grid grid-cols-4 gap-4">
              <div>
                <div className="mb-1 text-sm text-gray-600">案件编号</div>
                <Input placeholder="请输入" />
              </div>
              <div>
                <div className="mb-1 text-sm text-gray-600">案件状态</div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="请选择" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">全部</SelectItem>
                    <SelectItem value="open">处理中</SelectItem>
                    <SelectItem value="closed">已关闭</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <div className="mb-1 text-sm text-gray-600">是否高级审核</div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="请选择" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">是</SelectItem>
                    <SelectItem value="no">否</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <div className="mb-1 text-sm text-gray-600">批次号</div>
                <Input placeholder="请输入" />
              </div>
              <div>
                <div className="mb-1 text-sm text-gray-600">委托方</div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="请选择" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="company1">公司A</SelectItem>
                    <SelectItem value="company2">公司B</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <div className="mb-1 text-sm text-gray-600">证件号</div>
                <Input placeholder="请输入" />
              </div>
              <div>
                <div className="mb-1 text-sm text-gray-600">分配时间</div>
                <div className="relative">
                  <Input placeholder="请选择" />
                  <Calendar className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
                </div>
              </div>
              <div>
                <div className="mb-1 text-sm text-gray-600">姓名</div>
                <Input placeholder="请输入" />
              </div>
              <div>
                <div className="mb-1 text-sm text-gray-600">最近上传平台</div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="请选择" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="platform1">平台A</SelectItem>
                    <SelectItem value="platform2">平台B</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <div className="mb-1 text-sm text-gray-600">调解编号</div>
                <Input placeholder="请输入" />
              </div>
              <div>
                <div className="mb-1 text-sm text-gray-600">最近一次AI标签</div>
                <Input placeholder="请输入" />
              </div>
            </div>

            <div className="mt-6 flex justify-between">
              <div className="flex gap-2">
                <Button variant="default" className="bg-blue-500 hover:bg-blue-600">
                  搜索
                </Button>
                <Button variant="outline">
                  清空
                </Button>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" className="flex items-center gap-1 text-blue-500">
                  <FileText className="h-4 w-4" />
                  <span>案件导出</span>
                </Button>
                <Button variant="outline" className="flex items-center gap-1 text-blue-500">
                  <Upload className="h-4 w-4" />
                  <span>提交现结解析</span>
                </Button>
                <Button variant="outline" className="flex items-center gap-1 text-blue-500">
                  <Filter className="h-4 w-4" />
                  <span>案件上传平台</span>
                </Button>
                <Button variant="outline" className="flex items-center gap-1 text-blue-500">
                  <Download className="h-4 w-4" />
                  <span>取消上传平台</span>
                </Button>
                <Button variant="outline" className="flex items-center gap-1 text-blue-500">
                  <FileText className="h-4 w-4" />
                  <span>导出函件</span>
                </Button>
              </div>
            </div>

            <div className="mt-6">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="w-12">
                      <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                    </TableHead>
                    <TableHead>案件状态</TableHead>
                    <TableHead>调解状态</TableHead>
                    <TableHead>调解编号</TableHead>
                    <TableHead>批次号</TableHead>
                    <TableHead>委托方</TableHead>
                    <TableHead>调解中心</TableHead>
                    <TableHead>案件编号</TableHead>
                    <TableHead>案件类型</TableHead>
                    <TableHead>姓名</TableHead>
                    <TableHead>证件号</TableHead>
                    <TableHead>分配时间</TableHead>
                    <TableHead>分配状态</TableHead>
                    <TableHead>调解员</TableHead>
                    <TableHead>沟通状态</TableHead>
                    <TableHead>最近联系</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell colSpan={16} className="py-8 text-center text-gray-500">
                      暂无数据
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <div className="mt-4 flex items-center justify-between text-sm">
                <div className="text-gray-500">共 0 条</div>

                <div className="flex items-center gap-3">
                  <span>20条/页</span>
                  <div className="flex items-center">
                    <button className="flex h-8 w-8 items-center justify-center rounded-l border border-gray-300 bg-white">
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button className="flex h-8 w-8 items-center justify-center border border-blue-500 bg-blue-500 text-white">
                      1
                    </button>
                    <button className="flex h-8 w-8 items-center justify-center rounded-r border border-gray-300 bg-white">
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="flex items-center">
                    <span>前往</span>
                    <input className="mx-1 h-8 w-14 rounded border border-gray-300 px-2 text-center" />
                    <span>页</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="departmentCases">
          <div className="rounded-md bg-white p-6 shadow-sm">
            <div className="text-center text-gray-500">部门案件内容</div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
