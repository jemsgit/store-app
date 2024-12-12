export type OrderState = "Собран" | "На сборку" | "Готов к отгрузке";

export type OrderDTO = {
  id: string;
  type: string;
  name: string;
  state: OrderState;
  stateTime: string; // DATE  "2024-12-06T15:30:00.000Z"
  readyForPackingAt?: string; // DATE "2024-12-06T15:30:00.000Z"
  packedAt?: string; // DATE "2024-12-06T15:30:00.000Z"
  readyForDeliverAt: string; // DATE "2024-12-06T15:30:00.000Z"
  isPacked: boolean;
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
};

type UpdateType = "initial" | "update";

export type OrderUpdates = {
  type: UpdateType;
  data: object;
};
