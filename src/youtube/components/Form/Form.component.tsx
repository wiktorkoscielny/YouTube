/*
 * @category  Youtube
 * @author    Wiktor Koscielny <wiktorkoscielny@gmail.com>
 */

import { PureComponent } from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";

type InheritedProps = {
  navigation: any;
  location: any;
  paramsKey?: string;
  searchParams: string;
  getSearchPageVideos: any;
  clearVideosData: any;
  changeSearchParams: any;
  clearSearchParams: any;
};

/** @namespace Youtube/Component/Form/Component */
export class FormComponent extends PureComponent<InheritedProps> {
  handleSearch = () => {
    const { location, navigation, getSearchPageVideos, clearVideosData } =
      this.props;

    if (location.pathname !== "/search") navigation("/search");
    else {
      clearVideosData();
      getSearchPageVideos(false);
    }
  };

  render() {
    const { handleSearch } = this;
    const { searchParams, changeSearchParams, clearSearchParams } = this.props;

    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <div
          className="flex bg-yt-spec-base-background items-center
                     h-10 px-4 pr-0 border border-[#303030] rounded-3xl"
        >
          <div className="flex gap-4 items-center pr-5">
            <div>
              <AiOutlineSearch className="text-xl" />
            </div>
            <input
              type="text"
              className="bg-yt-spec-base-background w-full
                         focus:outline-none border-none"
              placeholder="Search"
              value={searchParams}
              onChange={(e) => changeSearchParams(e.target.value)}
            />

            <AiOutlineClose
              className={`text-xl cursor-pointer ${
                !searchParams ? "invisible" : "visible"
              }`}
              onClick={() => clearSearchParams()}
            />
          </div>
          <button
            className="h-10 w-[64px] flex items-center justify-center
                       bg-zinc-800 border border-[#303030]"
            style={{ borderRadius: "0 25px 25px 0" }}
            type="submit"
          >
            <AiOutlineSearch className="text-xl" />
          </button>
        </div>
      </form>
    );
  }
}

export default FormComponent;
