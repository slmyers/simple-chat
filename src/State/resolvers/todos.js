import gql from 'graphql-tag';

export const defaults = {
  messages: [],
};

export const resolvers = {
  Mutation: {
    addMessage: (_, { content, author }, { cache }) => {
      console.log("I AM CALLED");
      const query = gql`
          query GetMessages {
              messages @client {
                  author,
                  content,
                  id
              }
          }
      `;
      const { messages } = cache.readQuery({ query });
      const { id } = messages[messages.length - 1] || { id: 0 };
      const newMessage = {
        author,
        content,
        __typename: 'Message',
        id: id + 1,
      };
      cache.writeData({ data: { messages: [...messages].concat([newMessage])}});
      return newMessage;
    },
  },
};