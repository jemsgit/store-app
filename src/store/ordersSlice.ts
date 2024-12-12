import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ordersAdapter } from "../adapters/api-adapter";
import { Order } from "../models/order";

// Define the state shape
interface SlotsState {
  orders: Order[];
  visibleOrders: Order[];
  isLoading: boolean;
}

// Initial state
const initialState: SlotsState = {
  orders: [],
  visibleOrders: [],
  isLoading: false,
};

// Async thunks for fetching slots and filters
export const fetchOrders = createAsyncThunk("slots/fetchOrders", async () => {
  const response = await ordersAdapter.getOrders();
  return response || [];
});

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
        state.orders = action.payload;
        state.isLoading = false;
      });
  },
});

export const { setVisibleOrder, setInitialOrders, updateOrders } =
  slotsSlice.actions;
export default slotsSlice.reducer;
