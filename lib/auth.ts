export const isAuthenticated = (): boolean => {
  if (typeof window === 'undefined') return false;
  const token = localStorage.getItem('token');
  return !!token;
};

export const getToken = (): string | null => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('token');
};

export const getUser = () => {
  if (typeof window === 'undefined') return null;
  const userStr = localStorage.getItem('user');
  return userStr ? JSON.parse(userStr) : null;
};

export const logout = () => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  window.location.href = '/';
};

