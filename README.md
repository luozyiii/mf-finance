# 财务系统 (mf-finance)

## 项目简介

这是一个基于 React + TypeScript 的财务管理微前端应用，提供财务概览、账户管理、财务报表等功能。

## 主要功能

- 💰 **财务概览**: 今日财务数据和过去7天趋势分析
- 🏦 **账户管理**: 银行账户和资金账户管理
- 📋 **财务报表**: 收入报表、支出报表、资产负债表
- 📊 **成本分析**: 成本结构分析和优化建议
- 🔍 **数据可视化**: 财务数据图表展示

## 技术栈

- **框架**: React 18 + TypeScript
- **构建工具**: Rsbuild + Module Federation
- **UI组件**: Ant Design
- **图表库**: @ant-design/charts
- **路由**: React Router v6
- **样式**: CSS Modules + Ant Design

## 快速开始

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm run dev
```

应用将在 http://localhost:3002 启动

### 构建生产版本
```bash
npm run build
```

### GitHub Pages 部署
```bash
npm run build:gh-pages
```

详细部署说明请参考 [DEPLOYMENT.md](./DEPLOYMENT.md)

## 页面结构

- `/finance` - 财务概览（默认页面）
- `/finance/accounts` - 账户管理
- `/finance/reports` - 财务报表
- `/finance/cost-analysis` - 成本分析

## 功能特性

### 财务概览
- 今日财务指标：总收入、总支出、净利润、现金流
- 7天财务趋势：收入支出对比、净利润和现金流趋势
- 收支结构分析：收入来源和支出类别饼图
- 重要账户概览：主要账户余额和变化情况

### 账户管理
- 银行账户信息管理
- 账户余额实时监控
- 资金流水记录

### 财务报表
- 收入报表：按时间和类别统计
- 支出报表：费用分类和趋势
- 资产负债表：资产负债结构
- 现金流量表：现金流入流出分析

## 开发说明

### 环境要求
- Node.js >= 16
- npm >= 8

### 微前端集成
- 作为远程模块暴露给主应用
- 支持独立开发和部署
- 与主应用共享认证状态
