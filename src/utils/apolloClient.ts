import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import fetch from 'cross-fetch';

const httpLink = new HttpLink({
    uri: 'https://www.reaction-club.com/graphql', // Replace with your GraphQL endpoint
    fetch,
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})

export default client;
