import ApolloClient from 'apollo-boost';

// or you can use `import gql from 'graphql-tag';` instead

const client = new ApolloClient({
  uri: 'https://r10.academy.red/graphql',
});

export default client;
