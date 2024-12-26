import { OrderDTO, Order, OrderStatus, OrderState } from "../models/order";
import { msToHuman } from "../utils/date-utils";

function getTimeDiff(packedTime?: Date, readyTime?: Date): string | undefined {
  if (!readyTime || !packedTime) {
    return;
  }
  return msToHuman(packedTime?.getTime() - readyTime?.getTime());
}

function getStatusTime(state: OrderState, history?: OrderStatus[]) {
  if (!history || !history.length) {
    return;
  }
  const statusFromHistory = history.find((item) => item.state === state);
  if (!statusFromHistory) {
    return;
  }
  return new Date(statusFromHistory.stateTime.replace("Z", ""));
}

export const orderMapper = (item: OrderDTO): Order => {
  const readyForPackingAt = getStatusTime("Подтвержден", item.statusHistory);
  const packedAt = getStatusTime("Собран", item.statusHistory);
  const packingTime =
    item.state === "Собран"
      ? getTimeDiff(packedAt, readyForPackingAt)
      : undefined;
  const isPacked = item.statusHistory
    ? !!item.statusHistory.find((hist) => hist.state === "Собран")
    : false;
  return {
    id: item.id,
    name: item.name,
    state: item.state,
    readyForPackingAt: readyForPackingAt,
    packedAt: packedAt,
    packingTime,
    isPacked,
    stateTime: new Date(item.stateTime.replace("Z", "")),
    plannedShipmentDate: item.plannedShipmentDate
      ? new Date(item.plannedShipmentDate.replace("Z", "")).getTime()
      : Infinity,
  };
};
