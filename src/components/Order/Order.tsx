import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Order as OrderModel } from "../../models/order";
import { getTimeDiff, msToHuman } from "../../utils/date-utils";

interface Props {
  order: OrderModel;
}

function Order(props: Props) {
  const { order } = props;

  const [ellapsed, setEllapsed] = useState<string>("");

  useEffect(() => {
    let interval = undefined;
    if (order?.state === "На сборку") {
      setInterval(() => {
        let diff = getTimeDiff(order.readyForPackingAt as Date);
        const elapsedTime = msToHuman(diff);
        setEllapsed(elapsedTime);
        if (diff > 3000) {
        }
      }, 200);
    }
    return () => clearInterval(interval);
  }, [order.state, order.readyForPackingAt]);

  if (order.state === "На сборку") {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          animation: "bgBlink 2s ease 2s infinite",
        }}
      >
        <span>{order.name}</span>
        <span>{ellapsed}</span>
      </Box>
    );
  }

  if (order.state === "Собран") {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <span>{order.name}</span>
        <span>{order.packingTime}</span>
      </Box>
    );
  }

  if (order.state === "Готов к отгрузке") {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <span>{order.name}</span>
        <span>{!order.isPacked ? "Пропущена упаковка" : ""}</span>
      </Box>
    );
  }
  return null;
}

export default Order;
