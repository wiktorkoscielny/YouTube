/*
 * @category  Youtube
 * @author    Wiktor Koscielny <wiktorkoscielny@gmail.com>
 */

import { PureComponent } from "react";

/** @namespace Youtube/Component/Loader/Component */
export class LoaderComponent extends PureComponent {
  render() {
    return (
      <div className="flex items-center w-full justify-center py-3">
        <div className="w-10 h-10 border-2 border-red-600 border-solid
                        rounded-full animate-spin border-t-transparent" />
      </div>
    );
  }
}

export default LoaderComponent;
