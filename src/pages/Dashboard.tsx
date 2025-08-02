import React, { useState } from 'react';
import { Card, Row, Col, Statistic, Typography, Tabs, Space, Table } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined, DollarOutlined, BankOutlined, RiseOutlined, WalletOutlined } from '@ant-design/icons';
import { Line, Column, Pie } from '@ant-design/charts';
import financeData from './financeData.json';

const { Title, Text } = Typography;

export const Dashboard: React.FC = () => {
  const [data] = useState(financeData);



  // 格式化货币显示
  const formatCurrency = (num: number) => {
    if (num >= 10000) {
      return '¥' + (num / 10000).toFixed(1) + '万';
    }
    return '¥' + num.toLocaleString();
  };

  // 获取趋势图标
  const getTrendIcon = (trend: string) => {
    return trend === 'up' ? <ArrowUpOutlined /> : <ArrowDownOutlined />;
  };

  // 获取趋势颜色
  const getTrendColor = (trend: string) => {
    return trend === 'up' ? '#52c41a' : '#ff4d4f';
  };

  return (
    <div style={{ padding: '16px' }}>
      {/* 今日财务概览 */}
      <div style={{ marginBottom: 24 }}>
        <Title level={4} style={{ marginBottom: 16 }}>今日财务概览</Title>
        <Row gutter={16}>
          <Col span={6}>
            <Card>
              <Statistic
                title="总收入"
                value={data.todayData.totalRevenue.value}
                formatter={(value) => formatCurrency(Number(value))}
                valueStyle={{ color: getTrendColor(data.todayData.totalRevenue.trend) }}
                prefix={<DollarOutlined />}
                suffix={
                  <Space>
                    {getTrendIcon(data.todayData.totalRevenue.trend)}
                    <Text style={{ color: getTrendColor(data.todayData.totalRevenue.trend), fontSize: 12 }}>
                      {data.todayData.totalRevenue.change}%
                    </Text>
                  </Space>
                }
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic
                title="总支出"
                value={data.todayData.totalExpense.value}
                formatter={(value) => formatCurrency(Number(value))}
                valueStyle={{ color: getTrendColor(data.todayData.totalExpense.trend) }}
                prefix={<WalletOutlined />}
                suffix={
                  <Space>
                    {getTrendIcon(data.todayData.totalExpense.trend)}
                    <Text style={{ color: getTrendColor(data.todayData.totalExpense.trend), fontSize: 12 }}>
                      {data.todayData.totalExpense.change}%
                    </Text>
                  </Space>
                }
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic
                title="净利润"
                value={data.todayData.netProfit.value}
                formatter={(value) => formatCurrency(Number(value))}
                valueStyle={{ color: getTrendColor(data.todayData.netProfit.trend) }}
                prefix={<RiseOutlined />}
                suffix={
                  <Space>
                    {getTrendIcon(data.todayData.netProfit.trend)}
                    <Text style={{ color: getTrendColor(data.todayData.netProfit.trend), fontSize: 12 }}>
                      {data.todayData.netProfit.change}%
                    </Text>
                  </Space>
                }
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic
                title="现金流"
                value={data.todayData.cashFlow.value}
                formatter={(value) => formatCurrency(Number(value))}
                valueStyle={{ color: getTrendColor(data.todayData.cashFlow.trend) }}
                prefix={<BankOutlined />}
                suffix={
                  <Space>
                    {getTrendIcon(data.todayData.cashFlow.trend)}
                    <Text style={{ color: getTrendColor(data.todayData.cashFlow.trend), fontSize: 12 }}>
                      {Math.abs(data.todayData.cashFlow.change)}%
                    </Text>
                  </Space>
                }
              />
            </Card>
          </Col>
        </Row>
      </div>

      {/* 过去7天财务趋势 */}
      <div style={{ marginBottom: 24 }}>
        <Title level={4} style={{ marginBottom: 16 }}>过去7天财务趋势</Title>
        <Tabs
          defaultActiveKey="1"
          items={[
            {
              key: '1',
              label: '收入支出对比',
              children: (
                <Row gutter={16}>
                  <Col span={12}>
                    <Card title="收入趋势" className="chart-card">
                      <Line
                        data={data.weeklyData.revenue}
                        xField="date"
                        yField="value"
                        smooth={true}
                        color="#52c41a"
                        point={{
                          size: 4,
                          shape: 'circle',
                        }}
                        xAxis={{
                          label: {
                            formatter: (text: any) => {
                              const date = new Date(text);
                              return `${date.getMonth() + 1}/${date.getDate()}`;
                            },
                          },
                        }}
                      />
                    </Card>
                  </Col>
                  <Col span={12}>
                    <Card title="支出趋势" className="chart-card">
                      <Line
                        data={data.weeklyData.expense}
                        xField="date"
                        yField="value"
                        smooth={true}
                        color="#ff4d4f"
                        point={{
                          size: 4,
                          shape: 'circle',
                        }}
                        xAxis={{
                          label: {
                            formatter: (text: any) => {
                              const date = new Date(text);
                              return `${date.getMonth() + 1}/${date.getDate()}`;
                            },
                          },
                        }}
                      />
                    </Card>
                  </Col>
                </Row>
              ),
            },
            {
              key: '2',
              label: '净利润趋势',
              children: (
                <Row gutter={16}>
                  <Col span={12}>
                    <Card title="净利润趋势" className="chart-card">
                      <Line
                        data={data.weeklyData.netProfit}
                        xField="date"
                        yField="value"
                        smooth={true}
                        color="#1890ff"
                        point={{
                          size: 4,
                          shape: 'circle',
                        }}

                        xAxis={{
                          label: {
                            formatter: (text: any) => {
                              const date = new Date(text);
                              return `${date.getMonth() + 1}/${date.getDate()}`;
                            },
                          },
                        }}
                      />
                    </Card>
                  </Col>
                  <Col span={12}>
                    <Card title="现金流趋势" className="chart-card">
                      <Column
                        data={data.weeklyData.cashFlow}
                        xField="date"
                        yField="value"
                        color="#722ed1"

                        xAxis={{
                          label: {
                            formatter: (text: any) => {
                              const date = new Date(text);
                              return `${date.getMonth() + 1}/${date.getDate()}`;
                            },
                          },
                        }}
                      />
                    </Card>
                  </Col>
                </Row>
              ),
            },
          ]}
        />
      </div>

      {/* 收支结构分析 */}
      <Row gutter={16} style={{ marginBottom: 24 }}>
        <Col span={12}>
          <Card title="收入结构分析" className="chart-card">
            <Pie
              data={data.revenueBreakdown.map(item => ({
                type: item.category,
                value: item.amount,
              }))}
              angleField="value"
              colorField="type"
              radius={0.8}
              label={false}

              legend={{
                position: 'bottom',
              }}
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="支出结构分析" className="chart-card">
            <Pie
              data={data.expenseBreakdown.map(item => ({
                type: item.category,
                value: item.amount,
              }))}
              angleField="value"
              colorField="type"
              radius={0.8}
              label={false}

              legend={{
                position: 'bottom',
              }}
            />
          </Card>
        </Col>
      </Row>

      {/* 重要账户概览 */}
      <Card title="重要账户概览" className="chart-card">
        <Table
          dataSource={data.topAccounts}
          pagination={false}
          size="small"
          rowKey="name"
          columns={[
            {
              title: '账户名称',
              dataIndex: 'name',
              key: 'name',
            },
            {
              title: '账户类型',
              dataIndex: 'type',
              key: 'type',
              render: (type: string) => (
                <Text style={{
                  color: type === '收入' ? '#52c41a' :
                        type === '费用' ? '#ff4d4f' :
                        type === '资产' ? '#1890ff' : '#722ed1'
                }}>
                  {type}
                </Text>
              ),
            },
            {
              title: '余额',
              dataIndex: 'balance',
              key: 'balance',
              render: (balance: number) => formatCurrency(balance),
            },
            {
              title: '变化',
              dataIndex: 'change',
              key: 'change',
              render: (change: number) => (
                <Text style={{ color: change > 0 ? '#52c41a' : '#ff4d4f' }}>
                  {change > 0 ? '+' : ''}{change}%
                </Text>
              ),
            },
          ]}
        />
      </Card>
    </div>
  );
};
