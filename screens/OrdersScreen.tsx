import { View, Text } from "react-native";
import React from "react";
import useOrders from "../hooks/useOrders";
import { useQuery } from "@apollo/client";
import { GET_ORDERS } from "../graphql/queries";

const OrdersScreen = () => {
  const { data } = useOrders();

  data?.map((item) => console.log(item));
  return (
    <View>
      <Text>OrdersScreen</Text>
    </View>
  );
};

export default OrdersScreen;
