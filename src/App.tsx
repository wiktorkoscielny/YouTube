import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./youtube/routes/Homepage/Homepage.container";
import SearchpageContainer
  from "./youtube/routes/Searchpage/Searchpage.container";
import WatchpageContainer
  from "./youtube/routes/Watchpage/Watchpage.container";
import { NavigationProvider } from "./youtube/utils/NavigationProvider/navigationProvider";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/search" element={<NavigationProvider Component={SearchpageContainer} />} />
        <Route path="/watch/:id" element={<NavigationProvider Component={WatchpageContainer} />} />
      </Routes>
    </BrowserRouter>
  ); 
}
