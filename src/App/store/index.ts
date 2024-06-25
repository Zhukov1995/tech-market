import { configureStore } from "@reduxjs/toolkit";
import widgetsReducer from "./widgetSlice";
import filtersReducer from "./filterSlice";


const store = configureStore({
    reducer: {
        widgets: widgetsReducer,
        filters: filtersReducer
    },
    devTools: process.env.NODE_ENV !== 'production'
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>

export default store;