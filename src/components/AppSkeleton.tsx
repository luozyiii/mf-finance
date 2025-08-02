import React from 'react';
import styles from './AppSkeleton.module.css';

export const AppSkeleton: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* 页面头部骨架屏 */}
      <div className={styles.pageHeader}>
        <div className={styles.breadcrumb}>
          <div className={styles.breadcrumbItem}></div>
          <div className={styles.breadcrumbSeparator}></div>
          <div className={styles.breadcrumbItem}></div>
        </div>
        <div className={styles.pageTitle}></div>
        <div className={styles.pageDescription}></div>
      </div>

      {/* 财务指标卡片骨架屏 */}
      <div className={styles.metricsGrid}>
        {[...Array(4)].map((_, index) => (
          <div key={index} className={styles.metricCard}>
            <div className={styles.metricIcon}></div>
            <div className={styles.metricContent}>
              <div className={styles.metricValue}></div>
              <div className={styles.metricLabel}></div>
              <div className={styles.metricChange}></div>
            </div>
          </div>
        ))}
      </div>

      {/* 图表和报表区域 */}
      <div className={styles.reportsSection}>
        <div className={styles.chartCard}>
          <div className={styles.chartHeader}>
            <div className={styles.chartTitle}></div>
            <div className={styles.chartFilters}>
              <div className={styles.filterButton}></div>
              <div className={styles.filterButton}></div>
              <div className={styles.filterButton}></div>
            </div>
          </div>
          <div className={styles.chartContent}>
            <div className={styles.lineChart}>
              {/* 模拟折线图 */}
              <div className={styles.chartGrid}>
                {[...Array(5)].map((_, index) => (
                  <div key={index} className={styles.gridLine}></div>
                ))}
              </div>
              <div className={styles.chartLine}></div>
              <div className={styles.chartDots}>
                {[...Array(8)].map((_, index) => (
                  <div key={index} className={styles.chartDot}></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={styles.summaryHeader}>
            <div className={styles.summaryTitle}></div>
          </div>
          <div className={styles.summaryContent}>
            {[...Array(6)].map((_, index) => (
              <div key={index} className={styles.summaryItem}>
                <div className={styles.summaryLabel}></div>
                <div className={styles.summaryValue}></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 财务表格区域 */}
      <div className={styles.tableSection}>
        <div className={styles.tableCard}>
          <div className={styles.tableHeader}>
            <div className={styles.tableTitle}></div>
            <div className={styles.tableActions}>
              <div className={styles.dateRange}></div>
              <div className={styles.exportButton}></div>
            </div>
          </div>
          <div className={styles.tableContent}>
            <div className={styles.tableHeaderRow}>
              {[...Array(6)].map((_, index) => (
                <div key={index} className={styles.tableHeaderCell}></div>
              ))}
            </div>
            {[...Array(10)].map((_, rowIndex) => (
              <div key={rowIndex} className={styles.tableRow}>
                {[...Array(6)].map((_, cellIndex) => (
                  <div key={cellIndex} className={styles.tableCell}></div>
                ))}
              </div>
            ))}
          </div>
          <div className={styles.tablePagination}>
            <div className={styles.paginationInfo}></div>
            <div className={styles.paginationControls}>
              <div className={styles.paginationButton}></div>
              <div className={styles.paginationButton}></div>
              <div className={styles.paginationButton}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
