import fetcher from "../lib/fetcher";
import { Order, Statistic } from "../models/order";
import { Packer } from "../models/packer";
import { packerMapper } from "./apcker-mapper";
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
  getPacker: async (): Promise<Packer[] | undefined> => {
    try {
      let res = await fetcher.get("/api/packers");
      return res.data.map(packerMapper);
    } catch (e) {
      console.log(e);
    }
  },
};
