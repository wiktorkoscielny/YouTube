import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "..";
import { YOUTUBE_API_URL } from "../../utils/constants";
import { parseData } from "../../utils/parseData";
import { HomePageVideos } from "../types";

const API_KEY = process.env.REACT_APP_YT_DATA_API_KEY;

export const getHomePageVideos = createAsyncThunk(
  "youtubeApp/mainVideos",
  async (isNext: boolean, { getState }) => {
    const {
      youtubeApp: { nextPageToken: nextPageTokenFromState, videos },
    } = getState() as RootState;
    
    const {
      data: { items, nextPageToken },
    } = await axios.get(
      `${YOUTUBE_API_URL}/search?maxResults=20&q=""&key=${API_KEY}&part=snippet&type=video&${
        isNext ? `pageToken=${nextPageTokenFromState}` : ""
      }`
    );

    const parsedData: HomePageVideos[] = await parseData(items);

    return { parsedData: [...videos, ...parsedData], nextPageToken };
  }
);
