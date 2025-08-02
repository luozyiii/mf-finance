/**
 * 部署配置
 * 用于处理不同环境下的路径和URL配置
 */

// 获取基础路径
export const getBasePath = (): string => {
  // 从环境变量获取，如果没有则根据当前环境判断
  const publicUrl = process.env.PUBLIC_URL;
  if (publicUrl) {
    return publicUrl;
  }
  
  // 开发环境
  if (process.env.NODE_ENV === 'development') {
    return '';
  }
  
  // 生产环境默认值
  return '/mf-finance';
};

// 获取完整的URL路径
export const getFullPath = (path: string): string => {
  const basePath = getBasePath();
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return basePath + cleanPath;
};

// 检查是否为GitHub Pages环境
export const isGitHubPages = (): boolean => {
  return process.env.NODE_ENV === 'production' && 
         (window.location.hostname === 'luozyiii.github.io' || 
          window.location.hostname.includes('github.io'));
};

// 获取登录页面URL
export const getLoginUrl = (): string => {
  if (isGitHubPages()) {
    // GitHub Pages 环境，跳转到主应用 mf-shell 的登录页
    return 'https://luozyiii.github.io/mf-shell/login';
  }

  // 开发环境，跳转到本地主应用
  return 'http://localhost:3000/login';
};

// 获取主应用URL
export const getShellUrl = (): string => {
  if (isGitHubPages()) {
    return 'https://luozyiii.github.io/mf-shell';
  }

  return 'http://localhost:3000';
};

// 路由配置
export const routeConfig = {
  basePath: getBasePath(),
  loginUrl: getLoginUrl(),
  shellUrl: getShellUrl(),
};
