/*
 * @category  Youtube
 * @author    Wiktor Koscielny <wiktorkoscielny@gmail.com>
 */

import React from "react";
import { connect } from "react-redux";
import WatchpageComponent from "./Watchpage.component";
import { getVideoDetails } from "../../store/reducers/getVideoDetails";
import { getRecommendedVideos } from "../../store/reducers/getRecommendedVideos";
import { AppDispatch, RootState } from "../../store";
import { navigationProviderType } from "../../helpers/NavigationProvider/types";

/** @namespace Component/Watchpage/Container/mapStateToProps */
function mapStateToProps(state: RootState) {
  return {
    currentPlaying: state.youtubeApp.currentPlaying,
    recommendedVideos: state.youtubeApp.recommendedVideos,
  };
}

/** @namespace Component/Watchpage/Container/mapDispatchToProps */
function mapDispatchToProps(dispatch: AppDispatch) {
  return {
    getVideoDetails: (payload: string) => dispatch(getVideoDetails(payload)),
    getRecommendedVideos: (payload: string) =>
      dispatch(getRecommendedVideos(payload)),
  };
}

type Props = ReturnType<typeof mapDispatchToProps> &
  ReturnType<typeof mapStateToProps> &
  navigationProviderType;

type StateTypes = {
  showMoreStatus: boolean;
};

/** @namespace Youtube/Component/Watchpage/Container */
class WatchpageContainer extends React.Component<Props, StateTypes> {
  state: StateTypes = { showMoreStatus: false };

  containerFunctions() {
    return {
      toggleShowMoreStatus: this.toggleShowMoreStatus.bind(this),
    };
  }

  componentDidMount() {
    const { paramsKey, getVideoDetails, navigation } = this.props;

    if (paramsKey) {
      getVideoDetails(paramsKey);
      this.setState({ showMoreStatus: false });
    } else {
      navigation("/");
    }
  }

  componentDidUpdate(prevProps: Props) {
    const { getRecommendedVideos, getVideoDetails, paramsKey } = this.props;

    if (prevProps.currentPlaying !== this.props.currentPlaying) {
      getRecommendedVideos(paramsKey);
    }

    if (prevProps.paramsKey !== this.props.paramsKey) {
      getVideoDetails(paramsKey);
    }
  }

  toggleShowMoreStatus() {
    const { showMoreStatus } = this.state;

    this.setState({ showMoreStatus: !showMoreStatus });
  }

  containerProps() {
    const {
      currentPlaying,
      paramsKey,
      getRecommendedVideos,
      recommendedVideos,
    } = this.props;

    const { showMoreStatus } = this.state;

    return {
      currentPlaying,
      showMoreStatus,
      paramsKey,
      getRecommendedVideos,
      recommendedVideos,
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
