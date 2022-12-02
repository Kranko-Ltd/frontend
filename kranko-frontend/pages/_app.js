import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import "../styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserProvider from "../src/context/UserContext";
import { useApollo } from "../src/lib/apolloClient";

function MyApp({ Component, pageProps }) {
  const client = useApollo(pageProps);

  return (
    <ApolloProvider client={client}>
      <UserProvider>
        <Component {...pageProps} />;
        <ToastContainer />
      </UserProvider>
    </ApolloProvider>
  );
}

export default MyApp;
