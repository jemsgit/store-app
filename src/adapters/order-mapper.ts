import { OrderDTO, Order } from "../models/order";
import { msToHuman } from "../utils/date-utils";

function getTimeDiff(packedTime?: Date, readyTime?: Date): string | undefined {
  if (!readyTime || !packedTime) {
    return;
  }
  return msToHuman(packedTime?.getTime() - readyTime?.getTime());
}

export const orderMapper = (item: OrderDTO): Order => {
  const readyForPackingAt = item.readyForPackingAt
    ? new Date(item.readyForPackingAt.replace("Z", ""))
    : undefined;
  const packedAt = item.packedAt
    ? new Date(item.packedAt.replace("Z", ""))
    : undefined;
  const packingTime =
    item.state === "Собран"
      ? getTimeDiff(packedAt, readyForPackingAt)
      : undefined;
  return {
    id: item.id,
    name: item.name,
    state: item.state,
    readyForPackingAt: readyForPackingAt,
    packedAt: packedAt,
    packingTime,
    isPacked: item.isPacked,
    stateTime: new Date(item.stateTime.replace("Z", "")),
  };
};
