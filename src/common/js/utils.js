//设置和获取本地存储信息
export const setLocal = (name, value) => {
  localStorage.setItem(name, value);
};
export const getLocal = (name) => {
  return localStorage.getItem(name);
};
