/*
 * @category  Youtube
 * @author    Wiktor Koscielny <wiktorkoscielny@gmail.com>
 */

import { PureComponent } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import NavbarComponent from "./Navbar.component";

/** @namespace Component/Navbar/Container/mapStateToProps */
function mapStateToProps(state: any) {
  return {};
}

/** @namespace Component/Navbar/Container/mapDispatchToProps */
function mapDispatchToProps(dispatch: any) {
  return {};
}

/** @namespace Youtube/Component/Navbar/Container */
class NavbarContainer extends PureComponent {
  static propTypes = {};

  static defaultProps = {};

  containerFunctions = {};

  containerProps() {
    const {} = this.props;

    return {};
  }

  render() {
    return (
      <NavbarComponent
        {...this.containerProps()}
        {...this.containerFunctions}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarContainer);
