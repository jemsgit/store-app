import { Order, OrderDTO, OrderUpdates } from "../models/order";
import realTimeUpdater from "../lib/real-time-updater";
import { orderMapper } from "./order-mapper";

export const realTimeOrdersAdapter = {
  subscribe: (cb: (type: string, data: Order[] | Order) => void) => {
    const unsubscribe = realTimeUpdater.subscribe((message: OrderUpdates) => {
      const { type, data } = message;

      if (type === "initial") {
        cb("initial", (data as OrderDTO[]).map(orderMapper));
        return;
      }
      if (type === "update") {
        cb("update", orderMapper(data as OrderDTO));
        return;
      }
    });
    return unsubscribe;
  },
};
