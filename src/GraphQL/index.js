import gql from 'graphql-tag';

export const GET_MESSAGES = gql`{
    messages @client {
        id
        content
    }
}
`;

export const ADD_MESSAGE = gql`
    mutation AddMessage($content: String!, $author: String!) {
        addMessage(content: $content, author: $author) @client
    }
`;