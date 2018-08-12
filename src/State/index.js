import { ApolloClient } from 'apollo-client';
import { withClientState } from 'apollo-link-state';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { resolvers, defaults } from './resolvers/message';

const typeDefs = `
  interface Node {
    id: ID!
  }

  type Message implements Node{
    id: ID!
    content: String!
    author: String!
  }
  
  type Mutation {
    addMessage(content: String!, author: String!): Message
  }
  type Query {
    messages: [Message]
    getMessage(id: ID!): Message
  }
`;
const cache = new InMemoryCache({dataIdFromObject: object => object.id});
export const client = new ApolloClient({
  cache,
  link: withClientState({ resolvers, defaults, cache, typeDefs }),
});