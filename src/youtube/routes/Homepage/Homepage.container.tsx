/*
 * @category  Youtube
 * @author    Wiktor Koscielny <wiktorkoscielny@gmail.com>
 */

import { PureComponent } from "react";
import { connect } from "react-redux";
import HomepageComponent from "./Homepage.component";
import { getHomePageVideos } from "../../store/reducers/getMainVideos";
import { AppDispatch, RootState, clearVideos } from "../../store";

/** @namespace Component/Homepage/Container/mapStateToProps */
function mapStateToProps(state: RootState) {
  return {
    videos: state.youtubeApp.videos,
    sidebarState: state.youtubeApp.isSidebarOpen
  };
}

/** @namespace Component/Homepage/Container/mapDispatchToProps */
function mapDispatchToProps(dispatch: AppDispatch) {
  return {
    getHomePageVideos: (payload: boolean) =>
      dispatch(getHomePageVideos(payload)),
    clearVideosData: () => dispatch(clearVideos())
  };
}

export type Props = ReturnType<typeof mapDispatchToProps> &
  ReturnType<typeof mapStateToProps>;

/** @namespace Youtube/Component/Homepage/Container */
class HomepageContainer extends PureComponent<Props> {

  componentDidMount() {
    const {
      getHomePageVideos,
      clearVideosData
    } = this.props;

    getHomePageVideos(false);
    clearVideosData();
  }

  containerProps() {
    const { videos, getHomePageVideos, sidebarState} = this.props;

    return {
      videos,
      getHomePageVideos,
      sidebarState
    };
  }

  render() {
    return (
      <HomepageComponent
        {...this.containerProps()}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomepageContainer);
