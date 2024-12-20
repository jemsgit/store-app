import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ordersAdapter } from "../adapters/api-adapter";
import { Order, Statistic } from "../models/order";

// Define the state shape
interface SlotsState {
  orders: Order[];
  statistic: Statistic;
  visibleOrders: Order[];
  isLoading: boolean;
  isStatisticLoading: boolean;
}

// Initial state
const initialState: SlotsState = {
  orders: [],
  visibleOrders: [],
  statistic: {
    todayShipment: {
      count: 0,
      weight: 0,
    },
    tomorrowShipment: {
      count: 0,
      weight: 0,
    },
    todayShipmentCount: 0,
    yesterdayShipmentCount: 0,
    yearRecord: 0,
    monthlyAverageTime: 0,
  },
  isLoading: false,
  isStatisticLoading: false,
};

// Async thunks for fetching slots and filters
export const fetchOrders = createAsyncThunk("slots/fetchOrders", async () => {
  const response = await ordersAdapter.getOrders();
  return response || [];
});

export const fetchStatistic = createAsyncThunk(
  "slots/fetchStatistic",
  async () => {
    const response = await ordersAdapter.getStatistic();
    return response || [];
  }
);

// Slice
const slotsSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setVisibleOrder(state, action: PayloadAction<Order[]>) {
      state.visibleOrders = action.payload;
    },
    filterOrders(state) {
      const filteredSlots = state.orders.filter((order: Order) => {
        return !order.isPacked;
      });
      state.visibleOrders = filteredSlots;
    },
    setInitialOrders(state, action: PayloadAction<Order[]>) {
      state.orders = action.payload;
    },
    updateOrders(state, action: PayloadAction<Order>) {
      const update = action.payload;
      const { id } = update;

      const index = state.orders.findIndex((order: Order) => order.id === id);

      if (index >= 0) {
        state.orders[index] = {
          ...state.orders[index],
          ...update,
        };
      } else {
        state.orders.unshift(update);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        console.log(action.payload);
        state.orders = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchStatistic.pending, (state) => {
        state.isStatisticLoading = true;
      })
      .addCase(fetchStatistic.fulfilled, (state, action) => {
        if (action.payload) {
          state.statistic = action.payload as Statistic;
        }
        state.isStatisticLoading = false;
      });
  },
});

export const { setVisibleOrder, setInitialOrders, updateOrders } =
  slotsSlice.actions;
export default slotsSlice.reducer;
