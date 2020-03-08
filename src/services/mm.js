// deployed: const API_URL = 'https://morris-managed.herokuapp.com/api/v1';
// dev: const API_URL = 'http://localhost:7892/api/v1';

// eslint-disable-next-line
const API_URL = process.env.API_URL;

export const login = (email, password) => {
  const body = { email, password };
  return fetch(`${API_URL}/auth/login`, { method: 'POST', 
    body: JSON.stringify(body), 
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include' })
    .then(res => res.json());
};

export const signedIn = () => {
  return fetch(`${API_URL}/auth/signed-in`, { method: 'GET', credentials: 'include' })
    .then(res => res.json());
};

export const logout = () => {
  return fetch(`${API_URL}/auth/logout`, { method: 'GET', credentials: 'include' })
    .then(res => res.json());
};

export const getAllDances = () => {
  return fetch(`${API_URL}/dances`)
    .then((res) => res.json());
};

