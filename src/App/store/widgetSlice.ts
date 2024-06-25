import { createSlice } from "@reduxjs/toolkit";
import { IWidget, widgets } from "./data";

interface IWidgetState {
    widgets: IWidget[],
    activeWidgetId: number
}

const initialState: IWidgetState = {
    widgets: widgets,
    activeWidgetId: 1
};

const widgetSlice = createSlice({
    name: 'widgetSlice',
    initialState,
    reducers: {
        setActiveWidgetId(state, action) {
            state.activeWidgetId = action.payload
        },
        setWidgetList(state, action) {
            state.widgets = action.payload
        }
    }
})

export const {
    setActiveWidgetId,
    setWidgetList } = widgetSlice.actions;

export default widgetSlice.reducer;