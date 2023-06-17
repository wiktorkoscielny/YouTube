/*
 * @category  Youtube
 * @author    Wiktor Koscielny <wiktorkoscielny@gmail.com>
 */

import { PureComponent } from "react";
import { connect } from "react-redux";
import LoaderComponent from "./Loader.component";

/** @namespace Component/Loader/Container/mapStateToProps */
function mapStateToProps(state: any) {
  return {};
}

/** @namespace Component/Loader/Container/mapDispatchToProps */
function mapDispatchToProps(dispatch: any) {
  return {};
}

/** @namespace Youtube/Component/Loader/Container */
class LoaderContainer extends PureComponent {
  render() {
    return <LoaderComponent />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoaderContainer);
