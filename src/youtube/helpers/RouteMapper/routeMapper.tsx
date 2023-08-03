import { Route } from "react-router-dom";

import { NavigationProvider } from "../NavigationProvider/navigationProvider";

export const routeMapper = (arg0: any, arg1: any, arg2?: any) => {

  const renderRoute = (path: any, arg1: any, isWithNavigation?: any) => {
    if (isWithNavigation) {
      return (<Route path={path} element={<NavigationProvider Component={arg1} />} />)
    };

    return <Route path={path} element={arg1} />;
  };


  return renderRoute(arg0, arg1, arg2);
}


