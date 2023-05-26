import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";
import { InitialState } from "./types";

const initialState: InitialState = {};

export const store = configureStore({
    reducer: {}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
