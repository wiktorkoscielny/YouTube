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

// type InheritedProps = {
//  videos: any;
//  searchTerm: any;
//  getSearchPageVideos: any;
// }

/** @namespace Youtube/Component/Searchpage/Component */
export class SearchpageComponent extends PureComponent<InheritedProps & PassedProps> {
  // const navigate = useNavigate();
  // const dispatch = useAppDispatch();
  // const videos = useAppSelector((state) => state.youtubeApp.videos);
  // const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);

  // useEffect(() => {
  //   dispatch(clearVideos());
  //   if (searchTerm === "") navigate("/");
  //   else {
  //     dispatch(getSearchPageVideos(false));
  //   }
  // }, [dispatch, navigate, searchTerm]);

  render() {
    return (
      <div className="max-h-screen overflow-hidden">
        <div style={{ height: "7.5vh" }}>
          <NavbarContainer />
        </div>
        <div className="flex" style={{ height: "92.5vh" }}>
          <SidebarContainer />
          {/* {videos.length ? (
            <div className="py-8 pl-8 flex flex-col gap-5 w-full">
              <InfiniteScroll
                dataLength={videos.length}
                next={() => dispatch(getSearchPageVideos(true))}
                hasMore={videos.length < 500}
                loader={<Spinner />}
                height={600}
              >
                {videos.map((item: HomePageVideos) => {
                  return (
                    <div className="my-5">
                       <SearchCard data={item} key={item.videoId} />
                    </div>
                  );
                })}
              </InfiniteScroll>
            </div>
          ) : (
            <LoaderContainer />
          )} */}
        </div>
      </div>
    );
  }
}

export default SearchpageComponent;
