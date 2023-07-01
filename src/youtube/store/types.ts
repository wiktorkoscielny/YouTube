export interface InitialState {
  videos: HomePageVideos[];
  currentPlayingVideo: currentPlayingVideo | null;
  searchParams: string;
  nextPageToken: string | null;
  recommendedVideos: RecommendedVideos[];
  isSidebarOpen: boolean;
}

export interface HomePageVideos {
  videoId: string;
  videoTitle: string;
  videoDescription: string;
  videoThumbnail: string;
  videoLink: string;
  videoDuration: string;
  videoViews: string;
  videoAge: string;
  channelInfo: {
    id: string;
    image: string;
    name: string;
  };
}
export interface currentPlayingVideo {}
export interface RecommendedVideos {}
