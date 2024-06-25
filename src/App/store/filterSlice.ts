import { createSlice } from "@reduxjs/toolkit";

interface IFilterState {
    company: string,
    categories: string,
    platform: string
}

const initialState: IFilterState = {
    company: 'Компания',
    categories: 'Категория',
    platform: 'Платформа',
};

const filterSlice = createSlice({
    name: 'filterSlice',
    initialState,
    reducers: {
        setFilterValueCompany(state, action) {
            state.company = action.payload
        },
        setFilterValueCategories(state, action) {
            state.categories = action.payload
        },
        setFilterValuePlatform(state, action) {
            state.platform = action.payload
        },
    }
})

export const {
    setFilterValueCompany,
    setFilterValueCategories,
    setFilterValuePlatform } = filterSlice.actions;

export default filterSlice.reducer;