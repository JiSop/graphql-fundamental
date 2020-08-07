import fetch from 'node-fetch';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

export const getTodos = userId => {
  const REQUEST_URL = !!userId ? `${API_URL}?userId=${userId}` : API_URL;
  return fetch(`${REQUEST_URL}`)
    .then(res => res.json())
    .then(json => json)
    .catch(e => console.error(e))
};
