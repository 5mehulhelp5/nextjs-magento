import {GraphQLClient} from 'graphql-request';

const endpoint = process.env.GRAPHQL_ENDPOINT as string;

const graphQLClient = new GraphQLClient(endpoint);
graphQLClient.setHeader(
  'X-GQL-Token',
  process.env.MAGENTO_ACCESS_TOKEN as string
);

export default graphQLClient;
