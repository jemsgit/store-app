export type OrderState = "Собран" | "Подтвержден" | "Требуется отгрузка";

export type OrderStatus = {
  state: OrderState;
  stateTime: string;
};

export type OrderDTO = {
  id: string;
  type: string;
  name: string;
  state: OrderState;
  stateTime: string; // DATE  "2024-12-06T15:30:00.000Z"
  readyForPackingAt?: string; // DATE "2024-12-06T15:30:00.000Z"
  packedAt?: string; // DATE "2024-12-06T15:30:00.000Z"
  readyForDeliverAt: string; // DATE "2024-12-06T15:30:00.000Z"
  statusHistory: OrderStatus[];
};

export type Order = {
  id: string;
  name: string;
  state: OrderState;
  readyForPackingAt?: Date; // на сборку
  packedAt?: Date; // собран
  packingTime?: string; // время на сборку - разница между "собран" и "на сборку"
  isPacked: boolean; // был в статусе собран
  stateTime: Date;
  updated?: boolean;
};

export type StatisticDTO = {
  todayShipment: {
    count: number;
    weight: number;
  };
  tomorrowShipment: {
    count: number;
    weight: number;
  };
  todayShipmentCount: number;
  yesterdayShipmentCount: number;
  yearRecord: number;
  monthlyAverageTime: number;
};

export type Statistic = {
  todayShipment: {
    count: number;
    weight: number;
  };
  tomorrowShipment: {
    count: number;
    weight: number;
  };
  todayShipmentCount: number;
  yesterdayShipmentCount: number;
  yearRecord: number;
  monthlyAverageTime: number;
};

type UpdateType = "initial" | "update";

export type OrderUpdates = {
  type: UpdateType;
  data: object;
};
