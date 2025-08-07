import React, { useState as _useState } from 'react';
import { Card, Row as _Row, Col as _Col, Tabs, Table } from 'antd';

const incomeColumns = [
  {
    title: '项目',
    dataIndex: 'item',
    key: 'item',
  },
  {
    title: '金额',
    dataIndex: 'amount',
    key: 'amount',
    render: (amount: number) => `¥${amount.toLocaleString()}`,
  },
  {
    title: '占比',
    dataIndex: 'percentage',
    key: 'percentage',
    render: (percentage: number) => `${percentage}%`,
  },
];

const incomeData = [
  { key: '1', item: '产品销售', amount: 800000, percentage: 70.9 },
  { key: '2', item: '服务收入', amount: 200000, percentage: 17.7 },
  { key: '3', item: '其他收入', amount: 128900, percentage: 11.4 },
];

const expenseData = [
  { key: '1', item: '人力成本', amount: 400000, percentage: 44.8 },
  { key: '2', item: '运营费用', amount: 300000, percentage: 33.6 },
  { key: '3', item: '营销费用', amount: 193000, percentage: 21.6 },
];

export const Reports: React.FC = () => {
  return (
    <div style={{ padding: '16px' }}>
      <Tabs
        defaultActiveKey="income"
        items={[
          {
            key: 'income',
            label: '收入报表',
            children: (
              <Card>
                <Table
                  columns={incomeColumns}
                  dataSource={incomeData}
                  pagination={false}
                  summary={() => (
                    <Table.Summary.Row>
                      <Table.Summary.Cell index={0}>
                        <strong>总计</strong>
                      </Table.Summary.Cell>
                      <Table.Summary.Cell index={1}>
                        <strong>¥1,128,900</strong>
                      </Table.Summary.Cell>
                      <Table.Summary.Cell index={2}>
                        <strong>100%</strong>
                      </Table.Summary.Cell>
                    </Table.Summary.Row>
                  )}
                />
              </Card>
            ),
          },
          {
            key: 'expense',
            label: '支出报表',
            children: (
              <Card>
                <Table
                  columns={incomeColumns}
                  dataSource={expenseData}
                  pagination={false}
                  summary={() => (
                    <Table.Summary.Row>
                      <Table.Summary.Cell index={0}>
                        <strong>总计</strong>
                      </Table.Summary.Cell>
                      <Table.Summary.Cell index={1}>
                        <strong>¥893,000</strong>
                      </Table.Summary.Cell>
                      <Table.Summary.Cell index={2}>
                        <strong>100%</strong>
                      </Table.Summary.Cell>
                    </Table.Summary.Row>
                  )}
                />
              </Card>
            ),
          },
          {
            key: 'balance',
            label: '资产负债表',
            children: (
              <Card>
                <div
                  style={{
                    height: 300,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#f5f5f5',
                    borderRadius: 4,
                  }}
                >
                  资产负债表 - 开发中
                </div>
              </Card>
            ),
          },
          {
            key: 'cashflow',
            label: '现金流量表',
            children: (
              <Card>
                <div
                  style={{
                    height: 300,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#f5f5f5',
                    borderRadius: 4,
                  }}
                >
                  现金流量表 - 开发中
                </div>
              </Card>
            ),
          },
        ]}
      />
    </div>
  );
};
