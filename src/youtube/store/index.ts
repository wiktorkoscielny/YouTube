import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";
import { InitialState } from "./types";
import { getHomePageVideos } from "./reducers/getMainVideos";

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
  extraReducers: (builder) => {
    builder.addCase(getHomePageVideos.fulfilled, (state, action) => {
      state.videos = action.payload.parsedData;
      state.nextPageToken = action.payload.nextPageToken
    })
  },
});

export const store = configureStore({
  reducer: {
    youtubeApp: YouTubeSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
