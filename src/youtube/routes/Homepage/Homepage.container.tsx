/*
 * @category  Youtube
 * @author    Wiktor Koscielny <wiktorkoscielny@gmail.com>
 */

import { PureComponent } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import HomepageComponent from "./Homepage.component";
import { getHomePageVideos } from "../../store/reducers/getMainVideos";

/** @namespace Component/Homepage/Container/mapStateToProps */
function mapStateToProps(state: any) {
  return {
    videos: state.youtubeApp.videos
  };
}

/** @namespace Component/Homepage/Container/mapDispatchToProps */
function mapDispatchToProps(dispatch: any) {
  return {
    getHomePageVideos: (payload: boolean) =>
      dispatch(getHomePageVideos(payload)),
  };
}

type State = {};

type Props = ReturnType<typeof mapDispatchToProps> &
  ReturnType<typeof mapDispatchToProps>;

/** @namespace Youtube/Component/Homepage/Container */
class HomepageContainer extends PureComponent<Props, State> {
  static propTypes = {
    getHomePageVideos: PropTypes.func.isRequired
  };

  state: State = {};

  static defaultProps = {};

  componentDidMount() {
    const { getHomePageVideos } = this.props;

    return getHomePageVideos(false);
  }

  containerFunctions = {};

  containerProps() {
    const {} = this.props;

    return {};
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
