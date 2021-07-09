import {createSlice} from "@reduxjs/toolkit"

const name = "board";

const initialState ={};

const reducers ={};

const articleSlice = createSlice({
    name,
    initialState,
    reducers
});

export const articleReducer = articleSlice.reducer;
export const articleActions = articleSlice.actions;