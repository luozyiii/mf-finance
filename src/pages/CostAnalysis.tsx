import React from 'react';
import { Card, Row, Col } from 'antd';

export const CostAnalysis: React.FC = () => {
  return (
    <div style={{ padding: '16px' }}>
      <Row gutter={16}>
        <Col span={12}>
          <Card title="成本结构分析" style={{ height: 300 }}>
            <div style={{ 
              height: 200, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              background: '#f5f5f5',
              borderRadius: 4
            }}>
              饼图占位符 - 成本结构分析
            </div>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="成本趋势分析" style={{ height: 300 }}>
            <div style={{ 
              height: 200, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              background: '#f5f5f5',
              borderRadius: 4
            }}>
              折线图占位符 - 成本趋势分析
            </div>
          </Card>
        </Col>
      </Row>
      <Row gutter={16} style={{ marginTop: 16 }}>
        <Col span={24}>
          <Card title="部门成本对比" style={{ height: 300 }}>
            <div style={{ 
              height: 200, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              background: '#f5f5f5',
              borderRadius: 4
            }}>
              柱状图占位符 - 部门成本对比
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
