// 部署配置
export const deploymentConfig = {
  // 主应用 URL
  shellApp: {
    development: 'http://localhost:3000',
    production: 'https://luozyiii.github.io/mf-shell',
  },

  // 当前财务模块 URL
  financeApp: {
    development: 'http://localhost:3002',
    production: 'https://luozyiii.github.io/mf-finance',
  },

  // 路由 basename 配置
  basename: {
    development: '',
    production: '/mf-finance',
  },

  // 获取当前环境的配置
  getCurrentConfig() {
    const env = process.env.NODE_ENV || 'development';
    return {
      shellUrl: this.shellApp[env as keyof typeof this.shellApp],
      financeUrl: this.financeApp[env as keyof typeof this.financeApp],
      basename: this.basename[env as keyof typeof this.basename],
      isProduction: env === 'production',
    };
  },
};

// 导出当前环境配置
export const currentConfig = deploymentConfig.getCurrentConfig();
