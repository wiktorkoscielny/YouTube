/*
 * @category  Youtube
 * @author    Wiktor Koscielny <wiktorkoscielny@gmail.com>
 */

import { PureComponent } from "react";
import NavbarContainer from "../../components/Navbar/Navbar.container";
import SidebarContainer from "../../components/Sidebar/Sidebar.container";
import LoaderContainer from "../../components/Loader/Loader.container";
import InfiniteScroll from "react-infinite-scroll-component";
import { HomePageVideos } from "../../store/types";
import { Props as InheritedProps } from "./Searchpage.container";
import { InheritedProps as PassedProps } from "./Searchpage.container";
import CardContainer from "../../components/Card/Card.container";

/** @namespace Youtube/Component/Searchpage/Component */
export class SearchpageComponent extends PureComponent<InheritedProps & PassedProps> {

  render() {
    const { videos, getSearchPageVideos } = this.props;

    return (
      <div className="max-h-screen overflow-hidden">
        <div style={{ height: "7.5vh" }}>
          <NavbarContainer />
        </div>
        <div className="flex" style={{ height: "92.5vh" }}>
          <SidebarContainer />
          {videos.length ? (
            <div className="py-8 pl-8 flex flex-col gap-5 w-full">
              <InfiniteScroll
                dataLength={videos.length}
                next={() => getSearchPageVideos(true)}
                hasMore={videos.length < 500}
                loader={<LoaderContainer />}
                height={600}
              >
                {videos.map((item: HomePageVideos) => {
                  return (
                    <div className="my-5">
                       <CardContainer data={item} key={item.videoId} isSearchPage={true} />
                    </div>
                  );
                })}
              </InfiniteScroll>
            </div>
          ) : (
            <LoaderContainer />
          )}
        </div>
      </div>
    );
  }
}

export default SearchpageComponent;
