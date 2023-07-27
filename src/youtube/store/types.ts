export interface InitialState {
  videos: HomePageVideos[];
  currentPlaying: CurrentPlaying | null;
  searchParams: string;
  nextPageToken: string | null;
  recommendedVideos: RecommendedVideos[];
  isSidebarOpen: boolean;
  isMobile: boolean;
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
export interface CurrentPlaying {
  videoId: string;
  videoTitle: string;
  videoDescription: string;
  videoViews: string;
  videoLikes: string;
  videoAge: string;
  channelInfo: {
    id: string;
    image: string;
    name: string;
    subscribers: string;
  };
}

export interface RecommendedVideos {
  videoId: string;
  videoTitle: string;
  videoThumbnail: string;
  videoDuration: string;
  videoViews: string;
  videoAge: string;
  channelInfo: {
    id: string;
    name: string;
  };
}

export interface ItemTypeA {
  snippet: {
    title: string;
    thumbnails: { medium: { url: string } };
    publishedAt: Date;
    channelTitle: string;
    channelId: string;
  };
  contentDetails: { upload?: { videoId?: string } };
}

export interface ItemTypeB {
  snippet: {
    title: string;
    thumbnails: { medium: { url: string } };
    publishedAt: Date;
    channelTitle: string;
    channelId: string;
  };
  contentDetails: {
    playlistItem?: {
      playlistId?: string;
      resourceId?: {
        kind?: string;
        videoId?: string;
      };
    };
  };
}
