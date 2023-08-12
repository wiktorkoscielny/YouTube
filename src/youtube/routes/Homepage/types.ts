import { HomePageVideos } from "../../store/types";

export type InheritedHomepageProps = {
  videos: HomePageVideos[];
  getHomePageVideos: any;
  sidebarState: boolean;
};
