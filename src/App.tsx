import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./youtube/routes/Homepage/Homepage.container";
import SearchpageContainer
from "./youtube/routes/Searchpage/Searchpage.container";
import Watchpage from "./youtube/routes/Watchpage/Watchpage";
import { NavigationProvider } from "./youtube/utils/navigationProvider";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/search" element={<NavigationProvider Component={SearchpageContainer} />} />
        <Route path="/watch/:id" element={<Watchpage />} />
      </Routes>
    </BrowserRouter>
  ); 
}
