/*
 * @category  Youtube
 * @author    Wiktor Koscielny <wiktorkoscielny@gmail.com>
 */

import { PureComponent } from "react";
import NavbarContainer from "../../components/Navbar/Navbar.container";
import WatchcardContainer from "../../components/Watchcard/Watchcard.container";
import SidebarContainer from "../../components/Sidebar/Sidebar.container";
import { BiLike, BiDislike } from "react-icons/bi";
import { HiScissors } from "react-icons/hi";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { FaShare } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { CurrentPlaying, RecommendedVideos } from "../../store/types";

type Props = {
  toggleShowMoreStatus: () => void;
  currentPlaying: CurrentPlaying | null;
  showMoreStatus: boolean;
  paramsKey?: string;
  recommendedVideos: RecommendedVideos[];
};

/** @namespace Youtube/Component/Watchpage/Component */
export class WatchpageComponent extends PureComponent<Props> {
  render() {
    const {
      toggleShowMoreStatus,
      currentPlaying,
      showMoreStatus,
      paramsKey,
      recommendedVideos,
    } = this.props;

    return (
      <>
        {currentPlaying && currentPlaying?.videoId === paramsKey && (
          <div className="max-h-screen overflow-hidden">
            <div style={{ height: "7.5vh" }}>
              <NavbarContainer />
            </div>
            <div className="flex w-full" style={{ height: "92.5vh" }}>
              <SidebarContainer />
              <div
                className="flex gap-y-10 gap-x-5 p-7 mx-20 mr-0 ml-0 w-full overflow-auto
                              grid grid-rows lg:grid-cols-[60%_auto]"
              >
                <div style={{ maxWidth: "800px" }}>
                  <div>
                    <iframe
                      width="100%"
                      height="502"
                      src={`https://www.youtube.com/embed/${paramsKey}?autoplay=1`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                    <div className="mt-5">
                      <p className="text-xl">{currentPlaying.videoTitle}</p>
                      <div className="flex flex-col md:flex-row gap-[10px] md:gap-0 justify-between mt-1">
                        <div className="text-sm text-gray-400">
                          <span className="after:content-['•'] after:mx-1">
                            {currentPlaying.videoViews} views
                          </span>
                          <span> {currentPlaying.videoAge} ago</span>
                        </div>
                        <div
                          className="flex items-center gap-4 uppercase"
                          style={{ flexFlow: "row wrap" }}
                        >
                          <div className="flex items-center gap-1 cursor-pointer">
                            <BiLike className="text-xl" />
                            <strong>{currentPlaying.videoLikes}</strong>
                          </div>
                          <div className="flex items-center gap-1 cursor-pointer">
                            <BiDislike className="text-xl" />
                            <strong>dislike</strong>
                          </div>
                          <div className="flex items-center gap-1 cursor-pointer">
                            <FaShare className="text-xl" />
                            <strong>share</strong>
                          </div>
                          <div className="flex items-center gap-1 cursor-pointer">
                            <HiScissors className="text-xl" />
                            <strong>clip</strong>
                          </div>
                          <div className="flex items-center gap-1 cursor-pointer">
                            <MdOutlinePlaylistAdd className="text-xl" />
                            <strong>save</strong>
                          </div>
                          <div className="flex items-center gap-1 cursor-pointer">
                            <BsThreeDots className="text-xl" />
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-4 flex-col border-solid border-gray-400 border-2 my-5 pb-3 border-l-transparent border-r-transparent">
                        <div className="flex items-center gap-5 mr-5 mt-4">
                          <div>
                            <img
                              src={currentPlaying.channelInfo.image}
                              alt="Youtube channel image"
                              className="rounded-full h-12 w-12"
                            />
                          </div>
                          <div className="w-5/6">
                            <h5 className="text-sm">
                              <strong>{currentPlaying.channelInfo.name}</strong>
                            </h5>
                            <h6 className="text-gray-400 text-xs">
                              {currentPlaying.channelInfo.subscribers}{" "}
                              subscribers
                            </h6>
                          </div>
                          <div>
                            <button className="uppercase bg-red-600 rounded-sm p-2 text-sm tracking-wider">
                              subscribe
                            </button>
                          </div>
                        </div>
                        <div
                          className={`${
                            !showMoreStatus ? "max-h-16 overflow-hidden" : ""
                          } text-sm w-11/12`}
                        >
                          <pre
                            style={{
                              fontFamily: `"Roboto", sans-serif`,
                            }}
                            className="whitespace-pre-wrap"
                          >
                            {currentPlaying.videoDescription}
                          </pre>
                        </div>
                        <div>
                          <button
                            className="uppercase text-sm cursor-pointer"
                            onClick={() => toggleShowMoreStatus()}
                          >
                            Show {showMoreStatus ? "less" : "more"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3 mr-0">
                  {Object.values(recommendedVideos)?.length &&
                    Object.values(recommendedVideos).map(
                      (item: RecommendedVideos) => {
                        return (
                          <WatchcardContainer data={item} key={item.videoId} />
                        );
                      }
                    )}
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default WatchpageComponent;
