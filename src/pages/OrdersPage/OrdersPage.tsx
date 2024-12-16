import { useEffect, useState } from "react";
import { Stack, Box, Modal, Button } from "@mui/material";

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
  const [showModal, setShowModal] = useState(false);

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
    const timerId = setInterval(() => {
      dispatch(fetchPackers());
      dispatch(fetchStatistic());
    }, 1000 * 60 * 5);
    return () => {
      clearInterval(timerId);
    };
  }, [dispatch]);

  useEffect(() => {
    realTimeOrdersService.subscribe();
    return () => {
      realTimeOrdersService.unsubscribe();
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 1000);
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
      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            background: "white",
            textAlign: "center",
          }}
        >
          <Box>На сайте используются звуковые уведомления</Box>
          <Button
            sx={{ background: "black", color: "white", mt: 2 }}
            onClick={() => setShowModal(false)}
          >
            Ok
          </Button>
        </Box>
      </Modal>
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
