const APIURL = '';

export const signIn = (email, password) => {
  const body = { email, password };
  fetch(APIURL, { method: 'POST', body })
    .then(res => res.json());
};
