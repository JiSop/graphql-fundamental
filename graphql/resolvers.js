import { getTodos } from './db'

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || 'World'}`,
    todos: () => getTodos(),
  },
};

export default resolvers;
