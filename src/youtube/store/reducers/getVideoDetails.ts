import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { timeSinceHelper } from "../../utils/timeSinceHelper";
import { convertVideoDataToString } from "../../utils/convertVideoDataToString";
import { YOUTUBE_API_URL } from "../../utils/constants";

const API_KEY = process.env.REACT_APP_YT_DATA_API_KEYV2;

export const getVideoDetails = createAsyncThunk(
  "yotubeApp/videoDetails",
  async (id: string) => {
    const {
      data: { items },
    } = await axios.get(
      `${YOUTUBE_API_URL}/videos?key=${API_KEY}&part=snippet,statistics&type=video&id=${id}`
    );

    return parseData(items[0]);
  }
);

const parseData = async (item: {
  snippet: {
    channelId: string;
    title: string;
    description: string;
    publishedAt: Date;
    channelTitle: string;
  };
  id: string;
  statistics: { viewCount: string; likeCount: string };
}) => {
  const {
    data: {
      items: [
        {
          snippet: {
            thumbnails: {
              default: { url: channelImage },
            },
          },
          statistics: { subscriberCount },
        },
      ],
    },
  } = await axios.get(
    `${YOUTUBE_API_URL}/channels?part=snippet,statistics&id=${item.snippet.channelId}&key=${API_KEY}`
  );

  return {
    videoId: item.id,
    videoTitle: item.snippet.title,
    videoDescription: item.snippet.description,
    videoViews: parseInt(item.statistics.viewCount).toLocaleString(),
    videoLikes: convertVideoDataToString(item.statistics.likeCount),
    videoAge: timeSinceHelper(new Date(item.snippet.publishedAt)),
    channelInfo: {
      id: item.snippet.channelId,
      image: channelImage,
      name: item.snippet.channelTitle,
      subscribers: convertVideoDataToString(subscriberCount, true),
    },
  };
};
