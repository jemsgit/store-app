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
  const [isLong, setIsLong] = useState<boolean>(false);
  const [isNew, setIsNew] = useState<boolean>(true);

  useEffect(() => {
    let interval = undefined;
    if (order?.state === "На сборку") {
      interval = setInterval(() => {
        let diff = getTimeDiff(order.readyForPackingAt as Date);
        const elapsedTime = msToHuman(diff);
        setEllapsed(elapsedTime);
        if (diff > 300000) {
          setIsLong(true);
        } else {
          setIsLong(false);
        }
      }, 200);
    }
    return () => clearInterval(interval);
  }, [order.state, order.readyForPackingAt, isLong]);

  useEffect(() => {
    setTimeout(() => {
      setIsNew(false);
    }, 2000);
  }, []);

  useEffect(() => {
    let interval = undefined;
    if (order?.state === "На сборку") {
      interval = setInterval(() => {
        let diff = getTimeDiff(order.readyForPackingAt as Date);
        const elapsedTime = msToHuman(diff);
        setEllapsed(elapsedTime);
        if (diff > 7200000) {
          setIsLong(true);
        } else {
          setIsLong(false);
        }
      }, 200);
    }
    return () => clearInterval(interval);
  }, [order.state, order.readyForPackingAt, isLong]);

  if (order.state === "На сборку") {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          animation: isLong ? "bgBlink 2s ease 2s infinite" : "none",
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
          animation: isNew ? "bgBlinkGr 2s ease" : "none",
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
          animation: isNew ? "bgBlinkGr 2s ease" : "none",
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
