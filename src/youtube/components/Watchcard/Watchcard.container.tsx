/*
 * @category  Youtube
 * @author    Wiktor Koscielny <wiktorkoscielny@gmail.com>
 */

import { PureComponent } from "react";
import WatchcardComponent from "./Watchcard.component";
import { RecommendedVideos } from "../../store/types";

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

export default WatchcardContainer;
