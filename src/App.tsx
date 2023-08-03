import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routeMapper } from "./youtube/helpers/RouteMapper/routeMapper";
import { RoutesData } from "./youtube/helpers/RouteMapper/routes";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {RoutesData.map(item => routeMapper(item.path, item.component, item?.arg))}
      </Routes>
    </BrowserRouter>
  ); 
}
