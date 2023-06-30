import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./youtube/routes/Homepage/Homepage.container";
import SearchpageContainer
from "./youtube/routes/Searchpage/Searchpage.container";
import Watchpage from "./youtube/routes/Watchpage/Watchpage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/search" element={<SearchpageContainer />} />
        <Route path="/watch/:id" element={<Watchpage />} />
      </Routes>
    </BrowserRouter>
  ); 
}
