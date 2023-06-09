/*
 * @category  Youtube
 * @author    Wiktor Koscielny <wiktorkoscielny@gmail.com>
 */

import { PureComponent } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import SidebarComponent from "./Sidebar.component";

/** @namespace Component/Sidebar/Container/mapStateToProps */
function mapStateToProps(state: any) {
  return {};
}

/** @namespace Component/Sidebar/Container/mapDispatchToProps */
function mapDispatchToProps(dispatch: any) {
  return {};
}

/** @namespace Youtube/Component/Sidebar/Container */
class SidebarContainer extends PureComponent {
  static propTypes = {};

  static defaultProps = {};

  containerFunctions = {};

  containerProps() {
    const {} = this.props;

    return {};
  }

  render() {
    return (
      <SidebarComponent
        {...this.containerProps()}
        {...this.containerFunctions}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer);
