import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useTailwind } from "tailwind-rn/dist";
import SafeAreaAndroid from "../components/SafeAreaAndroid";
import {
  useNavigation,
  CompositeNavigationProp,
} from "@react-navigation/native";
import { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";
import { TabStackParamList } from "../navigator/TabNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigator/RootNavigator";
import ThemedImage from "@rneui/themed/dist/Image";
import { Input } from "@rneui/themed";
import { useQuery } from "@apollo/client";
import { GET_CUSTOMERS } from "../graphql/queries";

export type CustomerScreenNavigationProp = CompositeNavigationProp<
  BottomTabBarButtonProps<TabStackParamList, "Customers">,
  NativeStackNavigationProp<RootStackParamList>
>;
const CustomersScreen = () => {
  const tw = useTailwind();
  const navigation = useNavigation<CustomerScreenNavigationProp>();
  const [input, setInput] = useState<string>("");
  const { loading, error, data } = useQuery(GET_CUSTOMERS);

  console.log(data);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <ScrollView
      style={(SafeAreaAndroid.AndroidSafeArea, { backgroundColor: "#59C1CC" })}
    >
      <ThemedImage
        source={{ uri: "https://links.papareact.com/3jc" }}
        containerStyle={tw("w-full h-64")}
        PlaceholderContent={<ActivityIndicator />}
      />
      <Input
        placeholder="Search by Customer"
        value={input}
        onChangeText={setInput}
        containerStyle={tw("bg-white pt-5 pb-0 px-10")}
      />

      {/* {data?.getCustomers.map(({ name: ID, value: { email, name} }: CustomerResponse) => ({

      }))} */}
    </ScrollView>
  );
};

export default CustomersScreen;
