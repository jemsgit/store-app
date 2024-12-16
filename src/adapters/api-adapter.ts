import fetcher from "../lib/fetcher";
import { Order, Statistic } from "../models/order";
import { PackerResponseDTO } from "../models/packer";
import { orderMapper } from "./order-mapper";

export const ordersAdapter = {
  getOrders: async (): Promise<Order[] | undefined> => {
    try {
      let res = await fetcher.get("/api/orders");
      return res.data.map(orderMapper);
    } catch (e) {
      console.log(e);
    }
  },
  getStatistic: async (): Promise<Statistic | undefined> => {
    try {
      let res = await fetcher.get("/api/statistic");
      return res.data as Statistic;
    } catch (e) {
      console.log(e);
    }
  },
  getPackers: async (): Promise<PackerResponseDTO | undefined> => {
    try {
      let res = await fetcher.get("/api/packers");
      return res.data;
    } catch (e) {
      console.log(e);
    }
  },
};
