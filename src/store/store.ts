import { configureStore } from "@reduxjs/toolkit";
import ordersReducer from "./ordersSlice";
import packersReducer from "./packersSlice";

import slotListenerMiddleware from "./middlewares/slotUpdate";

const store = configureStore({
  reducer: {
    orders: ordersReducer,
    packers: packersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(slotListenerMiddleware.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
