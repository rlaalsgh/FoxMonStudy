import {createSlice} from "@reduxjs/toolkit"

const name = "board";

const initialState ={
    boardList: [],
    status: 0,
    statusText: "Loading"
};

const reducers ={
    getBoardList : (state, action) => {},//view에서 호출
    getBoardListSuccess: (state, action) => {
        state.boardList = action.payload?.data ?? [];
        state.status = action.payload?.status;
        state.statusText = action.payload?.statusText ?? "Success";
    },
    getBoardListFail: (state, action) => {
        state.boardList = initialState.boardList
        state.status = action.payload?.status ?? 500;
        state.statusText = action.payload?.statusText ?? "Network Error";
    }
};

const boardSlice = createSlice({
    name,
    initialState,
    reducers
});

export const boardReducer = boardSlice.reducer;
export const boardActions = boardSlice.actions;