/*
 * @category  Youtube
 * @author    Wiktor Koscielny <wiktorkoscielny@gmail.com>
 */

import { PureComponent } from "react";
import { connect } from "react-redux";
import SearchpageComponent from "./Searchpage.component";

/** @namespace Component/Searchpage/Container/mapStateToProps */
function mapStateToProps(state: any) {
  return {};
}

/** @namespace Component/Searchpage/Container/mapDispatchToProps */
function mapDispatchToProps(dispatch: any) {
  return {};
}

/** @namespace Youtube/Component/Searchpage/Container */
class SearchpageContainer extends PureComponent {
  render() {
    return <SearchpageComponent />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchpageContainer);
