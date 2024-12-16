import { useEffect } from "react";
import { Stack, Box } from "@mui/material";

import OrdersList from "../../components/OrdersList/OrdersList";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchOrders, fetchStatistic } from "../../store/ordersSlice";

import { realTimeOrdersService } from "../../service/realtimeSlotService";
import Packers from "../../components/Packers/Packers";
import { fetchPackers } from "../../store/packersSlice";
import { useDesktopMode } from "../../hooks/useDesktop";
import Statistic from "../../components/Statistic/Statistic";

function OrdersPage() {
  const dispatch = useAppDispatch();
  const isDesktop = useDesktopMode();

  const { orders, isLoading, statistic, isStatisticLoading } = useAppSelector(
    (state) => state.orders
  );
  const {
    packers,
    record,
    isLoading: isLoadingPackers,
  } = useAppSelector((state) => state.packers);

  useEffect(() => {
    dispatch(fetchOrders());
    dispatch(fetchPackers());
    dispatch(fetchStatistic());
  }, [dispatch]);

  useEffect(() => {
    realTimeOrdersService.subscribe();
    return () => {
      realTimeOrdersService.unsubscribe();
    };
  }, []);

  const {
    todayShipment,
    tomorrowShipment,
    todayShipmentCount,
    yesterdayShipmentCount,
    yearRecord,
    monthlyAverageTime,
  } = statistic;

  return (
    <Box>
      <Statistic
        todayShipment={todayShipment}
        tomorrowShipment={tomorrowShipment}
        todayShipmentCount={todayShipmentCount}
        yesterdayShipmentCount={yesterdayShipmentCount}
        yearRecord={yearRecord}
        monthlyAverageTime={monthlyAverageTime}
        isLoading={isStatisticLoading}
      />
      <Stack
        gap={3}
        sx={{
          flexDirection: isDesktop ? "row" : "column",
          alignItems: "stretch",
        }}
      >
        <Box sx={{ flex: "1 1 auto" }}>
          <Packers
            packers={packers}
            isLoading={isLoadingPackers}
            record={record}
          />
        </Box>
        <Box sx={{ flex: "2 2 auto" }}>
          <OrdersList orders={orders} isLoading={isLoading} />
        </Box>
      </Stack>
    </Box>
  );
}

export default OrdersPage;
