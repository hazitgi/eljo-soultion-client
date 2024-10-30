// src/ApolloClient.js
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "http://localhost:4999/graphql", // Replace with your endpoint
});
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("access_token") ?? ""; // Retrieve token from localStorage
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
