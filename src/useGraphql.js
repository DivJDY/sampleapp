import { useQuery } from "react-query";
import { GraphQLClient, request } from "graphql-request";

// GraphQL
export const useGQLQuery = (key, query, variables, config = {}) => {
  const endpoint = "https://spacex-production.up.railway.app/";
  const headers = {
    headers: {
      authorization: `Bearer token goes here`,
    },
  };

  const graphQLClient = new GraphQLClient(endpoint, headers);

  const fetchData = async () => await graphQLClient.request(query, variables);

  // const fetchData = async () => await request(endpoint, query, variables);

  return useQuery(key, fetchData, config);
};
