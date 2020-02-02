const API_URL = 'https://morris-managed.herokuapp.com/api/v1';

export const signIn = (email, password) => {
  const body = { email, password };
  fetch(`${API_URL}/login`, { method: 'POST', credentials: 'include', body })
    .then(res => res.json());
};

export const allDances = () => {
  return fetch(`${API_URL}/dances`)
    .then((res) => res.json());
};
