import { BrowserRouter, Routes } from "react-router-dom";
import { routeMapper } from "./youtube/helpers/RouteMapper/routeMapper";
import { RoutesData } from "./youtube/helpers/RouteMapper/routes";
import { DataCombinedType } from "./youtube/helpers/RouteMapper/types";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {RoutesData.map((item) => {
          const {
            path,
            component,
            isWithNavigation
          } = ({} = item);
          
          return routeMapper(
            ({
              path,
              component,
              isWithNavigation
            }) as DataCombinedType
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}
