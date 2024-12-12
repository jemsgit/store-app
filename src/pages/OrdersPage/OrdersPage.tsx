import { useEffect } from "react";
import { Stack } from "@mui/material";

import OrdersList from "../../components/OrdersList/OrdersList";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchOrders } from "../../store/ordersSlice";

import { realTimeOrdersService } from "../../service/realtimeSlotService";
import Packers from "../../components/Packers/Packers";
import { fetchPackers } from "../../store/packersSlice";

function OrdersPage() {
  const dispatch = useAppDispatch();

  const { orders, isLoading } = useAppSelector((state) => state.orders);
  const { packers, isLoading: isLoadingPackers } = useAppSelector(
    (state) => state.packers
  );

  useEffect(() => {
    dispatch(fetchOrders());
    dispatch(fetchPackers());
  }, [dispatch]);

  useEffect(() => {
    realTimeOrdersService.subscribe();
    return () => {
      realTimeOrdersService.unsubscribe();
    };
  }, []);

  return (
    <div>
      <Stack gap={3}>
        <Packers packers={packers} isLoading={isLoadingPackers} />
        <OrdersList orders={orders} isLoading={isLoading} />
      </Stack>
    </div>
  );
}

export default OrdersPage;
