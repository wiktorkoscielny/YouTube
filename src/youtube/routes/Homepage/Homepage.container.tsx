/*
 * @category  Youtube
 * @author    Wiktor Koscielny <wiktorkoscielny@gmail.com>
 */

import { PureComponent } from "react";
import { connect } from "react-redux";
import HomepageComponent from "./Homepage.component";
import { getHomePageVideos } from "../../store/reducers/getMainVideos";
import { clearVideos } from "../../store";

/** @namespace Component/Homepage/Container/mapStateToProps */
function mapStateToProps(state: any) {
  return {
    videos: state.youtubeApp.videos,
  };
}

/** @namespace Component/Homepage/Container/mapDispatchToProps */
function mapDispatchToProps(dispatch: any) {
  return {
    getHomePageVideos: (payload: boolean) =>
      dispatch(getHomePageVideos(payload)),
    clearVideosData: () => dispatch(clearVideos())
  };
}

export type State = {};

export type Props = ReturnType<typeof mapDispatchToProps> &
  ReturnType<typeof mapStateToProps>;

/** @namespace Youtube/Component/Homepage/Container */
class HomepageContainer extends PureComponent<Props, State> {
  state: State = {};

  componentDidMount() {
    const {
      getHomePageVideos,
      clearVideosData
    } = this.props;

    getHomePageVideos(false);
    clearVideosData();
  }

  containerFunctions = {};

  containerProps() {
    const { videos, getHomePageVideos } = this.props;

    return {
      videos,
      getHomePageVideos
    };
  }

  render() {
    return (
      <HomepageComponent
        {...this.containerProps()}
        {...this.containerFunctions}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomepageContainer);
