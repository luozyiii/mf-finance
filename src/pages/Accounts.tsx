import React from 'react';
import { Table, Button, Space, Tag, Card } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

const columns = [
  {
    title: '账户名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '账户类型',
    dataIndex: 'type',
    key: 'type',
    render: (type: string) => {
      const color = type === '资产' ? 'green' : type === '负债' ? 'red' : 'blue';
      return <Tag color={color}>{type}</Tag>;
    },
  },
  {
    title: '余额',
    dataIndex: 'balance',
    key: 'balance',
    render: (balance: number) => `¥${balance.toLocaleString()}`,
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    render: (status: string) => {
      const color = status === '正常' ? 'green' : 'red';
      return <Tag color={color}>{status}</Tag>;
    },
  },
  {
    title: '操作',
    key: 'action',
    render: () => (
      <Space size="middle">
        <Button type="link" icon={<EditOutlined />}>编辑</Button>
        <Button type="link" danger icon={<DeleteOutlined />}>删除</Button>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    name: '银行存款-工商银行',
    type: '资产',
    balance: 500000,
    status: '正常',
  },
  {
    key: '2',
    name: '应收账款',
    type: '资产',
    balance: 200000,
    status: '正常',
  },
  {
    key: '3',
    name: '应付账款',
    type: '负债',
    balance: 150000,
    status: '正常',
  },
  {
    key: '4',
    name: '短期借款',
    type: '负债',
    balance: 300000,
    status: '正常',
  },
];

export const Accounts: React.FC = () => {
  return (
    <div style={{ padding: '16px' }}>
      <Card
        extra={
          <Button type="primary" icon={<PlusOutlined />}>
            新增账户
          </Button>
        }
        styles={{ body: { padding: 0 } }}
      >
        <Table
          columns={columns}
          dataSource={data}
          pagination={{
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total) => `共 ${total} 条记录`
          }}
        />
      </Card>
    </div>
  );
};
