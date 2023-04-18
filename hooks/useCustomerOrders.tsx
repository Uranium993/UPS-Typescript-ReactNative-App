import React from "react";

const useCustomerOrders = (userId: any) => {
  const { loading, error, data } = useQuery(GET_ORDERS);
  const [customerOrders, setCustomerOrders] = useState<Order[]>([]);

  useEffect(() => {
    if (!data) return;

    const orders: Order[] = data.getOrders.map(({ value }: OrderResponce) => ({
      ...value,
    }));

    const customerOrders = orders.filter(
      (order) => order.trackingitems.customer_id === userId
    );

    setOrders(customerOrders);
  }, [data, userId]);

  return { loading, error, customerOrders };
};

export default useCustomerOrders;
