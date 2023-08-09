import SearchpageContainer from "../../routes/Searchpage/Searchpage.container";
import WatchpageContainer from "../../routes/Watchpage/Watchpage.container";
import Homepage from "../../routes/Homepage/Homepage.container";
import { DataAltType } from "./types";

export const RoutesData: DataAltType[] = [
  { path: "/", component: <Homepage />, isWithNavigation: false },
  { path: "/search", component: SearchpageContainer, isWithNavigation: true },
  { path: "/watch/:id", component: WatchpageContainer, isWithNavigation: true },
];
