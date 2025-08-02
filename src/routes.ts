export const financeRoutes = {
  appName: "财务系统",
  appKey: "finance",
  routes: [
    {
      path: "/finance/dashboard",
      name: "财务概览",
      icon: "DashboardOutlined",
      showBack: false
    },
    {
      path: "/finance/reports",
      name: "财务报表",
      icon: "FileTextOutlined",
      showBack: true,
      backPath: "/finance/dashboard"
    },
    {
      path: "/finance/accounts",
      name: "账务管理",
      icon: "BankOutlined",
      showBack: true
      // 不设置backPath，默认返回上一页
    },
    {
      path: "/finance/cost-analysis",
      name: "成本分析",
      icon: "PieChartOutlined",
      showBack: true,
      backPath: "/finance/dashboard"
    }
  ]
};
