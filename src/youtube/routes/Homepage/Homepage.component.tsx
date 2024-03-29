/*
 * @category  Youtube
 * @author    Wiktor Koscielny <wiktorkoscielny@gmail.com>
 */

import { PureComponent } from "react";
import NavbarContainer from "../../components/Navbar/Navbar.container";
import SidebarContainer from "../../components/Sidebar/Sidebar.container";
import CardContainer from "../../components/Card/Card.container";
import InfiniteScroll from "react-infinite-scroll-component";
import { HomePageVideos } from "../../store/types";
import LoaderContainer from "../../components/Loader/Loader.container";
import { getScreenHeight } from "../../utils/screenDimension";
import { MAX_VIDEOS_LENGTH, DELIMITER_SIZE, PLACEHOLDERS_MULTIPLER } from "./config";
import { InheritedHomepageProps } from "./types";
import PlaceholderContainer from "../../components/Placeholder/Placeholder.container";

/** @namespace Youtube/Component/Homepage/Component */
export class HomepageComponent extends PureComponent<InheritedHomepageProps> {
  renderLoaderWrapper() {
    return (
      <div className="flex gap-y-14 gap-x-8 flex-wrap p-8 justify-center">
        {[...Array(PLACEHOLDERS_MULTIPLER)].map((e, i) => <PlaceholderContainer key={i} />)}
      </div>
    );
  };

  render() {
    const { videos, getHomePageVideos } = this.props;
    const { renderLoaderWrapper } = this;

    return (
      <div className="max-h-screen overflow-hidden">
        <div style={{ height: "7.5vh" }}>
          <NavbarContainer />
        </div>
        <div className="flex" style={{ height: "92.5vh" }}>
          <SidebarContainer />
          <div className="w-full bg-yt-spec-base-background">
            {videos.length > 0 ? (
              <InfiniteScroll
                dataLength={videos.length}
                next={() => getHomePageVideos(true)}
                hasMore={videos.length < MAX_VIDEOS_LENGTH}
                loader={<LoaderContainer />}
                height={getScreenHeight() - DELIMITER_SIZE}
              >
                <div className="flex gap-y-14 gap-x-8 flex-wrap p-8 justify-center">
                  {videos.map((item: HomePageVideos) => {
                    return <CardContainer data={item} key={item.videoId} />;
                  })}
                </div>
              </InfiniteScroll>
            ) : renderLoaderWrapper() }
          </div>
        </div>
      </div>
    );
  }
}

export default HomepageComponent;
