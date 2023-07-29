/* The code is importing various dependencies and modules required for setting up and configuring a
Redux store with persistence using Redux Toolkit and Redux Persist. */
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import CartSlice from './Slice/CartSlice';
import WishListSlice from './Slice/WishListSlice';

import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer, 
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist';



/* The `persistConfig` constant is an object that specifies the configuration options for persisting
the Redux store. */
const persistConfig = {
  key: 'root',
  storage,
};

/* The `combineReducers` function is used to combine multiple reducers into a single reducer function.
In this code, it is combining the `CartSlice` and `WishListSlice` reducers into a single root
reducer. */
const rootReducer = combineReducers({
  cart: CartSlice,
  wishList: WishListSlice,
});

/* The line `const persistedReducer = persistReducer(persistConfig, rootReducer);` is creating a new
persisted reducer by wrapping the root reducer with the `persistReducer` function. */
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const Store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(Store);

export default Store; // Add the default export
