import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "..";
import { HomePageVideos } from "../types";
import { parseData } from "../../utils/parseData";
import { YOUTUBE_API_URL } from "../../utils/constants";

const API_KEY = process.env.REACT_APP_YT_DATA_API_KEYV2;

export const getSearchPageVideos = createAsyncThunk(
  "youtubeApp/serachPageVideos",
  async (isNext: boolean, { getState }) => {
    const {
      youtubeApp: { nextPageToken: nextPageTokenFromState, videos, searchParams },
    } = getState() as RootState;
    const {
      data: { items, nextPageToken },
    } = await axios.get(
      `${YOUTUBE_API_URL}/search?q=${searchParams}&key=${API_KEY}&part=snippet&type=video&${
        isNext ? `pageToken=${nextPageTokenFromState}` : ""
      }`
    );
    const parsedData: HomePageVideos[] = await parseData(items);
    
    return { parsedData: [...videos, ...parsedData], nextPageToken };
  }
);