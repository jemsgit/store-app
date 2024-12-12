import { useEffect } from "react";
import { Stack, Box } from "@mui/material";

import OrdersList from "../../components/OrdersList/OrdersList";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchOrders } from "../../store/ordersSlice";

import { realTimeOrdersService } from "../../service/realtimeSlotService";
import Packers from "../../components/Packers/Packers";
import { fetchPackers } from "../../store/packersSlice";
import { useDesktopMode } from "../../hooks/useDesktop";

function OrdersPage() {
  const dispatch = useAppDispatch();
  const isDesktop = useDesktopMode();

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
    <Stack
      gap={3}
      sx={{
        flexDirection: isDesktop ? "row" : "column",
        alignItems: "stretch",
      }}
    >
      <Box sx={{ flex: "1 1 auto" }}>
        <Packers packers={packers} isLoading={isLoadingPackers} />
      </Box>
      <Box sx={{ flex: "2 2 auto" }}>
        <OrdersList orders={orders} isLoading={isLoading} />
      </Box>
    </Stack>
  );
}

export default OrdersPage;
