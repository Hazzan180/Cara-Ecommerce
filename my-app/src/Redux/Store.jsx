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



const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  cart: CartSlice,
  wishList: WishListSlice,
});

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
