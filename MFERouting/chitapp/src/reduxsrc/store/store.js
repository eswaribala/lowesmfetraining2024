import {applyMiddleware, configureStore, createStore} from '@reduxjs/toolkit';
import checkboxReducer from "../reducers/reducer";
import storage from 'redux-persist/lib/storage';
import {persistReducer, persistStore} from "redux-persist";
import {thunk} from "redux-thunk";
/*
const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, checkboxReducer);

const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);

 */
const store = configureStore({
    reducer: checkboxReducer,
    // Optionally, add additional middleware
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

export default store;