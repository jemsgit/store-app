import store from "../store/store"; // Your Redux store
import { updateOrders, setInitialOrders } from "../store/ordersSlice"; // Redux actions
import { Order } from "../models/order";
import { realTimeOrdersAdapter } from "../adapters/real-time-adapter";

import sound from "../sounds/pop.mp3";

const audio = new Audio(sound);

class RealTimeOrdersService {
  private static instance: RealTimeOrdersService;
  private unsubscribeFn: (() => void) | undefined = undefined;

  static getInstance() {
    if (!RealTimeOrdersService.instance) {
      RealTimeOrdersService.instance = new RealTimeOrdersService();
    }
    return RealTimeOrdersService.instance;
  }

  subscribe() {
    if (!this.unsubscribeFn) {
      this.unsubscribeFn = realTimeOrdersAdapter.subscribe(this.handleUpdate);
    }
  }

  unsubscribe() {
    if (this.unsubscribeFn) {
      this.unsubscribeFn();
      this.unsubscribeFn = undefined;
    }
  }

  private handleUpdate = (type: string, update: Order[] | Order) => {
    const { orders } = store.getState();
    if (type === "initial") {
      store.dispatch(setInitialOrders(update as Order[]));
    } else if (type === "update") {
      const order = update as Order;
      const currentOrder = orders.orders.find((item) => item.id === order.id);
      if (currentOrder) {
        if (
          (currentOrder.state === "На сборку" &&
            (order.state === "Собран" || order.state === "Готов к отгрузке")) ||
          (currentOrder.state === "Собран" &&
            order.state === "Готов к отгрузке")
        ) {
          try {
            audio.play();
          } catch (e) {
            console.log("cant play");
          }
        }
      }
      (update as Order).updated = true;
      store.dispatch(updateOrders(update as Order));
      setTimeout(() => {
        (update as Order).updated = false;
        store.dispatch(updateOrders(update as Order));
      }, 2000);
    }
  };
}

export const realTimeOrdersService = RealTimeOrdersService.getInstance();
