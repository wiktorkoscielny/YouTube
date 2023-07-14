/*
 * @category  Youtube
 * @author    Wiktor Koscielny <wiktorkoscielny@gmail.com>
 */

import { PureComponent } from "react";
import { connect } from "react-redux";
import WatchcardComponent from "./Watchcard.component";
import { RecommendedVideos } from "../../store/types";

/** @namespace Component/Watchcard/Container/mapStateToProps */
function mapStateToProps(state: any) {
  return {};
}

/** @namespace Component/Watchcard/Container/mapDispatchToProps */
function mapDispatchToProps(dispatch: any) {
  return {};
}

export type Props = {
    data: RecommendedVideos
};

/** @namespace Youtube/Component/Watchcard/Container */
class WatchcardContainer extends PureComponent<Props> {

  containerProps() {
    const { data } = this.props;

    return { data };
  }

  render() {
    return (
      <WatchcardComponent {...this.containerProps()} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WatchcardContainer);
