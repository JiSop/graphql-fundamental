import { getTodos } from './db'

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || 'World'}`,
    todos: (_, { userId }) => getTodos(userId),
  },
};

export default resolvers;
