import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";
import CustomersScreen from "./screens/CustomersScreen";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./navigator/RootNavigator";
import { ApolloClient, ApolloProvider } from "@apollo/client";
import { InMemoryCache } from "@apollo/client/cache";

const client = new ApolloClient({
  uri: "https://fraserburgh.stepzen.net/api/gone-bear/__graphql",

  headers: {
    Authorization: `Apikey fraserburgh::stepzen.io+1000::00ecd6b5120169b7e1cd989039b4297839adbc8999e8ea990b803ec013ac5aaf`,
  },
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ApolloProvider>
    </TailwindProvider>
  );
}
