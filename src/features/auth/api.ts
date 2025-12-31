import api from '../../shared/api/api';

export async function login(username: string, password: string) {
  const res = await api.post('/login', { username, password });
  localStorage.setItem('token', res.data.accessToken);
  return res.data;
}

export function logout() {
  localStorage.removeItem('token');
}