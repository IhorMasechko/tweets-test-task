import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./usersSlice";
import { filtersReducer } from "./filterSlice";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "filter",
  storage,
  whitelist: "idFollowers",
};

export const store = configureStore({
  reducer: {
    users: usersReducer,
    filter: persistReducer(persistConfig, filtersReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
