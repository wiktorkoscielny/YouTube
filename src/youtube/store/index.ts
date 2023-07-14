import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";
import { InitialState } from "./types";
import { getHomePageVideos } from "./reducers/getMainVideos";
import { getSearchPageVideos } from "./reducers/getSearchPageVideos";
import { getVideoDetails } from "./reducers/getVideoDetails";
import { getRecommendedVideos } from "./reducers/getRecommendedVideos";

const initialState: InitialState = {
  videos: [],
  currentPlaying: null,
  searchParams: "",
  nextPageToken: null,
  recommendedVideos: [],
  isSidebarOpen: true
};

const YouTubeSlice = createSlice({
  name: "youtubeApp",
  initialState,
  reducers: {
    clearVideos: (state) => {
      state.videos = [];
      state.nextPageToken = null;
    },
    changeSearchParams: (state, action:PayloadAction<string>) => {
      state.searchParams = action.payload;
    },
    clearSearchParams: (state) => {
      state.searchParams = "";
    },
    toggleSidebarState: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getHomePageVideos.fulfilled, (state, action) => {
      state.videos = action.payload.parsedData;
      state.nextPageToken = action.payload.nextPageToken
    });
    builder.addCase(getSearchPageVideos.fulfilled, (state, action) => {
      state.videos = action.payload.parsedData;
      state.nextPageToken = action.payload.nextPageToken
    });
    builder.addCase(getVideoDetails.fulfilled, (state, action) => {
      state.currentPlaying = action.payload;
    });
    builder.addCase(getRecommendedVideos.fulfilled, (state, action) => {
      state.recommendedVideos = action.payload.parsedData;
    });
  },
});

export const store = configureStore({
  reducer: {
    youtubeApp: YouTubeSlice.reducer,
  },
});

export const { clearVideos, changeSearchParams, clearSearchParams, toggleSidebarState } = YouTubeSlice.actions;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
