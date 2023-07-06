import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice/counterSlice";
import logger from "redux-logger";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
