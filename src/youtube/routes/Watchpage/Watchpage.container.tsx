/*
 * @category  Youtube
 * @author    Wiktor Koscielny <wiktorkoscielny@gmail.com>
 */

import { PureComponent } from "react";
import { connect } from "react-redux";
import WatchpageComponent from "./Watchpage.component";

/** @namespace Component/Watchpage/Container/mapStateToProps */
function mapStateToProps(state: any) {
  return {};
}

/** @namespace Component/Watchpage/Container/mapDispatchToProps */
function mapDispatchToProps(dispatch: any) {
  return {};
}

export type InheritedProps = {
    navigation: any;
    location: any;
}

/** @namespace Youtube/Component/Watchpage/Container */
class WatchpageContainer extends PureComponent<InheritedProps> {

  containerProps() {
    const {
        navigation,
        location
    } = this.props;

    return {
        navigation,
        location
    }
  }

  render() {
    return <WatchpageComponent {...this.containerProps()  } />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WatchpageContainer);
