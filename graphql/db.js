import fetch from 'node-fetch';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

export const getTodos = () => fetch(`${API_URL}`)
  .then(response => response.json())
  .then(json => json)
  .catch(e => console.error(e));
