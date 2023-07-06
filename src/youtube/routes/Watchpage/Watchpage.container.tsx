/*
 * @category  Youtube
 * @author    Wiktor Koscielny <wiktorkoscielny@gmail.com>
 */

import { PureComponent } from "react";
import { connect } from "react-redux";
import WatchpageComponent from "./Watchpage.component";
import { getVideoDetails } from "../../store/reducers/getVideoDetails";
import { getRecommendedVideos } from "../../store/reducers/getRecommendedVideos";

/** @namespace Component/Watchpage/Container/mapStateToProps */
function mapStateToProps(state: any) {
  return {
    currentPlaying: state.youtubeApp.currentPlaying,
  };
}

/** @namespace Component/Watchpage/Container/mapDispatchToProps */
function mapDispatchToProps(dispatch: any) {
  return {
    getVideoDetails: (payload: string) => dispatch(getVideoDetails(payload)),
    getRecommendedVideos: (payload: string) =>
      dispatch(getRecommendedVideos(payload)),
  };
}

type InheritedProps = {
  navigation: any;
  location: any;
  paramsKey?: string;
};

type Props = ReturnType<typeof mapDispatchToProps> &
  ReturnType<typeof mapStateToProps> &
  InheritedProps;

type StateTypes = {
  showMoreStatus: boolean;
};

/** @namespace Youtube/Component/Watchpage/Container */
class WatchpageContainer extends PureComponent<Props, StateTypes> {
  state: StateTypes = { showMoreStatus: false };

  containerFunctions() {
    return {
      toggleShowMoreStatus: this.toggleShowMoreStatus.bind(this),
    };
  }

  componentDidMount() {
    const {
      paramsKey,
      getVideoDetails,
      navigation,
      currentPlaying,
      getRecommendedVideos,
    } = this.props;

    if (paramsKey) {
      getVideoDetails(paramsKey);
      this.setState({ showMoreStatus: false });
    } else {
      navigation("/");
    }

    if (currentPlaying && paramsKey) {
      getRecommendedVideos(paramsKey);
    }
  }

  toggleShowMoreStatus() {
    const { showMoreStatus } = this.state;

    this.setState({ showMoreStatus: !showMoreStatus });
  }

  containerProps() {
    const { currentPlaying, paramsKey } = this.props;

    const { showMoreStatus } = this.state;

    return {
      currentPlaying,
      showMoreStatus,
      paramsKey,
    };
  }

  render() {
    return (
      <WatchpageComponent
        {...this.containerProps()}
        {...this.containerFunctions()}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WatchpageContainer);
