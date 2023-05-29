import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";
import { InitialState } from "./types";

const initialState: InitialState = {
  videos: [],
  currentPlayingVideo: null,
  searchParams: "",
  nextPageToken: null,
  recommendedVideos: [],
};

const YouTubeSlice = createSlice({
  name: "youtubeApp",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const store = configureStore({
  reducer: {
    youtubeApp: YouTubeSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
