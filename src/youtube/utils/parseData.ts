import axios from "axios";
import { convertVideoDataToString } from "./convertVideoDataToString";
import { parseVideoDuration } from "./parseVideoDuration";
import { timeSinceHelper } from "./timeSinceHelper";
import { YOUTUBE_API_URL } from "./constants";
import { HomePageVideos } from "../store/types";

const API_KEY = process.env.REACT_APP_YT_DATA_API_KEY;

export const parseData = async (items: any[]) => {
    try {
        const videosIds: string[] = [];
        const channelIds: string[] = [];
        items.forEach(
           ( item: {snippet: {channelId: string}; id: {videoId: string}}) => {
                const {channelId} = item.snippet;
                const {videoId} = item.id;

                channelIds.push(channelId);
                videosIds.push(videoId)
            }
        );

        const {
            data: { items: channelsData },
          } = await axios.get(
            `${YOUTUBE_API_URL}/channels?part=snippet,contentDetails&id=${channelIds.join(
              ","
            )}&key=${API_KEY}`
          );

        const parsedChannelsData: { id: string; image: string }[] = [];
    channelsData.forEach(
      (channel: {
        id: string;
        snippet: { thumbnails: { default: { url: string } } };
      }) =>
        parsedChannelsData.push({
          id: channel.id,
          image: channel.snippet.thumbnails.default.url,
        })
    );

    const {
        data: { items: videosData },
      } = await axios.get(
        `${YOUTUBE_API_URL}/videos?part=contentDetails,statistics&id=${videosIds.join(
          ","
        )}&key=${API_KEY}`
      );

    const parsedData: HomePageVideos[] = [];
    items.forEach(
      (
        item: {
          snippet: {
            channelId: string;
            title: string;
            description: string;
            thumbnails: { medium: { url: string } };
            publishedAt: Date;
            channelTitle: string;
          };
          id: { videoId: string };
        },
        index: number
      ) => {
        const { image: channelImage } = parsedChannelsData.find(
          (data) => data.id === item.snippet.channelId
        )!;
        const {
            id: {
                videoId
            },
            snippet: {
                title,
                description,
                thumbnails: {
                    medium: {
                        url
                    }
                },
                channelId,
                channelTitle,
                publishedAt
            }
          } = item;
        if (channelImage)
          parsedData.push({
            videoId: videoId,
            videoTitle: title,
            videoDescription: description,
            videoThumbnail: url,
            videoLink: `https://www.youtube.com/watch?v=${item.id.videoId}`,
            videoDuration: parseVideoDuration(
              videosData[index].contentDetails.duration
            ),
            videoViews: convertVideoDataToString(
              videosData[index].statistics.viewCount
            ),
            videoAge: timeSinceHelper(new Date(publishedAt)),
            channelInfo: {
              id: channelId,
              image: channelImage,
              name: channelTitle,
            },
          });
      }
    );

    return parsedData;
    } catch(errors) {
        console.log(errors);
    }
}