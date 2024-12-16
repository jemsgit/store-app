import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ordersAdapter } from "../adapters/api-adapter";
import { Packer, PackerResponseDTO } from "../models/packer";

// Define the state shape
interface PackersState {
  packers: Packer[];
  record?: PackerResponseDTO["record"];
  isLoading: boolean;
}

// Initial state
const initialState: PackersState = {
  packers: [],
  record: undefined,
  isLoading: false,
};

// Async thunks for fetching slots and filters
export const fetchPackers = createAsyncThunk("slots/fetchPackers", async () => {
  const response = await ordersAdapter.getPackers();
  return response || [];
});

// Slice
const packersSlice = createSlice({
  name: "packers",
  initialState,
  reducers: {
    setInitialOrders(state, action: PayloadAction<Packer[]>) {
      state.packers = action.payload;
    },
    updateOrders(state, action: PayloadAction<Packer>) {
      const update = action.payload;
      const { id } = update;

      const index = state.packers.findIndex(
        (packer: Packer) => packer.id === id
      );

      if (index >= 0) {
        state.packers[index] = {
          ...state.packers[index],
          ...update,
        };
      } else {
        state.packers.unshift(update);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPackers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPackers.fulfilled, (state, action) => {
        if (action.payload) {
          const payload = action.payload as PackerResponseDTO;
          state.packers = payload.packers;
          state.record = payload.record;
        }
        state.isLoading = false;
      });
  },
});

export const { setInitialOrders, updateOrders } = packersSlice.actions;
export default packersSlice.reducer;
