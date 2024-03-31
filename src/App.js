import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import ProductList from "./components/ProductList";

function App() {
  let client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: `https://gql.uttirna.in/graphql`,
    }),
  });
  return (
    <>
      <ApolloProvider client={client}>
        <ProductList />
      </ApolloProvider>
    </>
  );
}

export default App;
