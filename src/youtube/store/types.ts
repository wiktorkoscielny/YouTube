export interface InitialState {
  videos: HomePageVideos[];
  currentPlayingVideo: currentPlayingVideo | null;
  searchParams: string;
  nextPageToken: string | null;
  recommendedVideos: RecommendedVideos[];
}

export interface HomePageVideos {}
export interface currentPlayingVideo {}
export interface RecommendedVideos {}
