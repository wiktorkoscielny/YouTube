/*
 * @category  Youtube
 * @author    Wiktor Koscielny <wiktorkoscielny@gmail.com>
 */

import { PureComponent } from "react";
import { connect } from "react-redux";
import SearchpageComponent from "./Searchpage.component";
import { clearVideos } from "../../store";
import { getSearchPageVideos } from "../../store/reducers/getSearchPageVideos";
import { navigationProviderType } from "../../helpers/NavigationProvider/types";
import { RootState, AppDispatch } from "../../store";

/** @namespace Component/Searchpage/Container/mapStateToProps */
function mapStateToProps(state: RootState) {
  return {
    videos: state.youtubeApp.videos,
    searchTerm: state.youtubeApp.searchParams,
  };
}

/** @namespace Component/Searchpage/Container/mapDispatchToProps */
function mapDispatchToProps(dispatch: AppDispatch) {
  return {
    clearVideosData: () => dispatch(clearVideos()),
    getSearchPageVideos: (payload: boolean) =>
      dispatch(getSearchPageVideos(payload)),
  };
}

export type Props = ReturnType<typeof mapDispatchToProps> &
  ReturnType<typeof mapStateToProps> &
  navigationProviderType;

export type State = {
  containerSize: number;
};

/** @namespace Youtube/Component/Searchpage/Container */
class SearchpageContainer extends PureComponent<Props> {
  state: State = { containerSize: 0 };

  componentDidMount() {
    const { searchTerm, clearVideosData, navigation, getSearchPageVideos } =
      this.props;

    const { calculateAvaliableSpace } = this;

    clearVideosData();

    if (searchTerm == "") {
      navigation("/");
    } else {
      getSearchPageVideos(false);
    }

    calculateAvaliableSpace();

    window.addEventListener("resize", calculateAvaliableSpace);
  }

  componentWillUnmount(): void {
    const { calculateAvaliableSpace } = this;

    window.removeEventListener("resize", calculateAvaliableSpace);
  }

  calculateAvaliableSpace = () => {
    const { containerSize } = this.state;
    const containerHeight =
      document.getElementById("searchContainer").offsetHeight;

    if (containerSize !== containerHeight) {
      this.setState({ containerSize: containerHeight });
    }
  };

  containerProps() {
    const {
      videos,
      searchTerm,
      getSearchPageVideos,
      clearVideosData,
      navigation,
      location,
    } = this.props;

    const { containerSize } = this.state;

    return {
      videos,
      searchTerm,
      getSearchPageVideos,
      clearVideosData,
      navigation,
      location,
      containerSize,
    };
  }

  render() {
    return <SearchpageComponent {...this.containerProps()} />;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchpageContainer);
