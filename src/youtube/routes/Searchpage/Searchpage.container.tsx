/*
 * @category  Youtube
 * @author    Wiktor Koscielny <wiktorkoscielny@gmail.com>
 */

import { PureComponent } from "react";
import { connect } from "react-redux";
import SearchpageComponent from "./Searchpage.component";
import { clearVideos } from "../../store";
import { getSearchPageVideos } from "../../store/reducers/getSearchPageVideos";

/** @namespace Component/Searchpage/Container/mapStateToProps */
function mapStateToProps(state: any) {
  return {
    videos: state.youtubeApp.videos,
    searchTerm: state.youtubeApp
  };
}

/** @namespace Component/Searchpage/Container/mapDispatchToProps */
function mapDispatchToProps(dispatch: any) {
  return {
    clearVideosData: () => dispatch(clearVideos()),
    getSearchPageVideos: (payload: boolean) =>
      dispatch(getSearchPageVideos(payload))
  };
}

export type Props = ReturnType<typeof mapDispatchToProps> &
  ReturnType<typeof mapStateToProps> & InheritedProps;

export type InheritedProps = {
    navigation: any;
    location: any;
}

/** @namespace Youtube/Component/Searchpage/Container */
class SearchpageContainer extends PureComponent<Props> {

  componentDidMount() {
    const {
      clearVideosData
    } = this.props;

    clearVideosData();
  }

  containerProps() {
    const {
      videos,
      searchTerm,
      getSearchPageVideos,
      clearVideosData,
      navigation,
      location
    } = this.props;

    return {
      videos,
      searchTerm,
      getSearchPageVideos,
      clearVideosData,
      navigation,
      location
    }
  }

  render() {
    return  <SearchpageComponent {...this.containerProps()} />
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchpageContainer);
