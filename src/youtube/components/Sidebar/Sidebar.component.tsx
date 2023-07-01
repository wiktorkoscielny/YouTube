/*
 * @category  Youtube
 * @author    Wiktor Koscielny <wiktorkoscielny@gmail.com>
 */

import { PureComponent } from "react";
import {
  subscriptionLinks,
  helpLinks,
  textLinks,
  secondaryLinks,
  mainLinks,
} from "./Sidebar.config";
import { Props } from "./Sidebar.container";

/** @namespace Youtube/Component/Sidebar/Component */
export class SidebarComponent extends PureComponent<Props> {
  render() {
    const { sidebarState } = this.props;

    return (
      <>
        {sidebarState && (
          <div
            className="w-2/12 bg-yt-spec-base-background pr-1 overflow-y-hidden
          hover:overflow-y-auto pb-8 pt-2 sidebar min-w-[180px]"
          >
            <ul className="flex flex-col border-b-2 border-gray-700 mx-1 pb-2">
              {mainLinks.map(({ icon, name }) => {
                return (
                  <li
                    key={name}
                    className={`pl-6 py-3 hover:bg-zinc-600 rounded-[10px] ${
                      name === "Home" ? "bg-yt-spec-additive-background" : ""
                    }`}
                  >
                    <a href="#" className="flex items-center gap-5">
                      {icon}
                      <span className="text-sm tracking-wider">{name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
            <ul className="flex flex-col border-b-2 border-gray-700 mx-1 pb-2 pt-2">
              {secondaryLinks.map(({ icon, name }) => {
                return (
                  <li
                    key={name}
                    className={`pl-6 py-3 hover:bg-zinc-600 rounded-[10px] `}
                  >
                    <a href="#" className="flex items-center gap-5">
                      {icon}
                      <span className="text-sm tracking-wider">{name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
            <ul className="flex flex-col border-b-2 border-gray-700 mx-1 pb-2 pt-2">
              {subscriptionLinks.map(({ icon, name }) => {
                return (
                  <li
                    key={name}
                    className={`pl-6 py-3 hover:bg-zinc-600 rounded-[10px] `}
                  >
                    <a href="#" className="flex items-center gap-5">
                      {icon}
                      <span className="text-sm tracking-wider">{name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
            <ul className="flex flex-col border-b-2 border-gray-700 mx-1 pb-2 pt-2">
              {helpLinks.map(({ icon, name }) => {
                return (
                  <li
                    key={name}
                    className={`pl-6 py-3 hover:bg-zinc-600 rounded-[10px] `}
                  >
                    <a href="#" className="flex items-center gap-5">
                      {icon}
                      <span className="text-sm tracking-wider">{name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
            <ul className="flex gap-2 flex-wrap text-sm p-4 text-zinc-400">
              {textLinks[0].map((name) => {
                return <li key={name}>{name}</li>;
              })}
            </ul>
            <ul className="flex gap-2 flex-wrap text-sm p-4 text-zinc-400">
              {textLinks[1].map((name) => {
                return <li key={name}>{name}</li>;
              })}
            </ul>
            <div className="mx-4">
              <span className="text-sm text-zinc-400">
                &copy; 2023 Wiktor Koscielny
              </span>
            </div>
            <br />
          </div>
        )}
      </>
    );
  }
}

export default SidebarComponent;
