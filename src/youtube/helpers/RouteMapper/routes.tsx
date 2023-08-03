import SearchpageContainer from "../../routes/Searchpage/Searchpage.container";
import WatchpageContainer from "../../routes/Watchpage/Watchpage.container";
import Homepage from "../../routes/Homepage/Homepage.container";

export const RoutesData: any[] = [
    {path: '/', component: <Homepage /> },
    {path: '/search', component: SearchpageContainer, arg: true},
    {path: '/watch/:id', component: WatchpageContainer, arg: true}
  ];
