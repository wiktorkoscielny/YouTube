/*
 * @category  Youtube
 * @author    Wiktor Koscielny <wiktorkoscielny@gmail.com>
 */

import { PureComponent } from "react";
import '../../style/css/Placeholder.css'

/** @namespace Youtube/Component/Placeholder/Component */
export class PlaceholderComponent extends PureComponent {
  render() {
    return (
      <div className="w-full min-w-[300px] max-w-[356px] justify-center">
        <div className="relative border-[1px] border-transparent rounded-[12px]
                        h-[202px] bg-yt-spec-additive-background overflow-hidden">
          <div className="placeholder-background" />
        </div>
        <div className="flex gap-2 pt-3 h-[100px]">
          <div className="min-w-fit">
            <div className="h-9 w-9 rounded-full bg-yt-spec-additive-background" />
          </div>
          <div className="h-[98px] w-full">
            <div className="h-[48px] w-full bg-yt-spec-additive-background border-[1px]
                            border-transparent rounded-[12px] overflow-hidden relative">
              <div className="placeholder-background" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PlaceholderComponent;
