import axios from "axios";
import { timeSinceHelper } from "./timeSinceHelper";
import { convertVideoDataToString } from "./convertVideoDataToString";
import { parseVideoDuration } from "./parseVideoDuration";
import { YOUTUBE_API_URL } from "./constants";
import { ItemTypeA, ItemTypeB, RecommendedVideos } from "../store/types";

const API_KEY = process.env.REACT_APP_YT_DATA_API_KEY;

export const parseRecommendedData = async (
  items: ItemTypeA[] | ItemTypeB[],
  videoId: string
) => {
  try {
    const videoIds: string[] = [];
    const channelIds: string[] = [];
    const newItems: ItemTypeA[] | ItemTypeB[] = [];

    items.forEach((item) => {
      channelIds.push(item.snippet.channelId);
      if ((item as ItemTypeA).contentDetails?.upload?.videoId) {
        videoIds.push((item as ItemTypeA).contentDetails.upload.videoId);
        newItems.push(item as ItemTypeA);
      }

      if (
        (item as ItemTypeB).contentDetails?.playlistItem?.resourceId?.videoId
      ) {
        videoIds.push(
          (item as ItemTypeB).contentDetails.playlistItem?.resourceId?.videoId
        );
        newItems.push(item as ItemTypeB);
      }
    });

    const {
      data: { items: videosData },
    } = await axios.get(
      `${YOUTUBE_API_URL}/videos?part=contentDetails,statistics&id=${videoIds.join(
        ","
      )}&key=${API_KEY}`
    );

    const parsedData: RecommendedVideos[] = [];

    if ((newItems[0] as ItemTypeA).contentDetails?.upload) {
      newItems.forEach((item, index) => {
        if (videoId === (item as ItemTypeA)?.contentDetails?.upload?.videoId)
          return;

        parsedData.push({
          videoId: (item as ItemTypeA).contentDetails?.upload?.videoId,
          videoTitle: item.snippet.title,
          videoThumbnail: item.snippet.thumbnails.medium.url,
          videoDuration: parseVideoDuration(
            videosData[index].contentDetails.duration
          ),
          videoViews: convertVideoDataToString(
            videosData[index].statistics.viewCount
          ),
          videoAge: timeSinceHelper(new Date(item.snippet.publishedAt)),
          channelInfo: {
            id: item.snippet.channelId,
            name: item.snippet.channelTitle,
          },
        });
      });
    }
    
    if (
      (newItems[0] as ItemTypeB).contentDetails?.playlistItem
    ) {
      newItems.forEach((item, index) => {
        if (
          videoId === (item as ItemTypeB)?.contentDetails?.playlistItem?.resourceId?.videoId
        ) return;

        parsedData.push({
          videoId: (item as ItemTypeB).contentDetails?.playlistItem?.resourceId
            .videoId,
          videoTitle: item.snippet.title,
          videoThumbnail: item.snippet.thumbnails.medium.url,
          videoDuration: parseVideoDuration(
            videosData[index].contentDetails.duration
          ),
          videoViews: convertVideoDataToString(
            videosData[index].statistics.viewCount
          ),
          videoAge: timeSinceHelper(new Date(item.snippet.publishedAt)),
          channelInfo: {
            id: item.snippet.channelId,
            name: item.snippet.channelTitle,
          },
        });
      });
    }

    return parsedData;
  } catch (err) {
    console.log(err);
  }
};
