/*
 * @category  Youtube
 * @author    Wiktor Koscielny <wiktorkoscielny@gmail.com>
 */

import { PureComponent } from "react";
import PropTypes from "prop-types";
import {
  subscriptionLinks,
  helpLinks,
  textLinks,
  secondaryLinks,
  mainLinks,
} from "./Sidebar.config";

/** @namespace Youtube/Component/Sidebar/Component */
export class SidebarComponent extends PureComponent {
  static propTypes = {};

  state = {};

  render() {
    return (
      <div className="w-2/12 bg-[#212121] pr-1 overflow-auto pb-8 sidebar min-w-[180px]">
        <ul className="flex flex-col border-b-2 border-gray-700">
          {mainLinks.map(({ icon, name }) => {
            return (
              <li
                key={name}
                className={`pl-6 py-3 hover:bg-zinc-600 ${
                  name === "Home" ? "bg-slate-600" : ""
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
        <ul className="flex flex-col border-b-2 border-gray-700">
          {secondaryLinks.map(({ icon, name }) => {
            return (
              <li key={name} className={`pl-6 py-3 hover:bg-zinc-600 `}>
                <a href="#" className="flex items-center gap-5">
                  {icon}
                  <span className="text-sm tracking-wider">{name}</span>
                </a>
              </li>
            );
          })}
        </ul>
        <ul className="flex flex-col border-b-2 border-gray-700">
          {subscriptionLinks.map(({ icon, name }) => {
            return (
              <li key={name} className={`pl-6 py-3 hover:bg-zinc-600 `}>
                <a href="#" className="flex items-center gap-5">
                  {icon}
                  <span className="text-sm tracking-wider">{name}</span>
                </a>
              </li>
            );
          })}
        </ul>
        <ul className="flex flex-col border-b-2 border-gray-700">
          {helpLinks.map(({ icon, name }) => {
            return (
              <li key={name} className={`pl-6 py-3 hover:bg-zinc-600 `}>
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
        <span className="px-4 text-sm text-zinc-400">
          &copy; 2023 Wiktor Koscielny
        </span>
        <br />
      </div>
    );
  }
}

export default SidebarComponent;
