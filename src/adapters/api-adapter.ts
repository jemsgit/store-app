import fetcher from "../lib/fetcher";
import { Order, Statistic } from "../models/order";
import { PackerResponseDTO } from "../models/packer";
import { orderMapper } from "./order-mapper";

export const ordersAdapter = {
  getOrders: async (): Promise<Order[] | undefined> => {
    try {
      let res = await fetcher.get("/orders");
      return res.data.map(orderMapper);
    } catch (e) {
      console.log(e);
    }
  },
  getStatistic: async (): Promise<Statistic | undefined> => {
    try {
      let res = await fetcher.get("/orders/stats");
      return res.data as Statistic;
    } catch (e) {
      console.log(e);
    }
  },
  getPackers: async (): Promise<PackerResponseDTO | undefined> => {
    try {
      let res = await fetcher.get("/packers/stats");
      if (!res.data.packers) {
        res.data.packers = [];
      }
      return res.data;
    } catch (e) {
      console.log(e);
    }
  },
};
