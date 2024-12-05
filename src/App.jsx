import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Page1 from "./pages/Page1"
import Page2 from "./pages/Page2"
import Page3 from "./pages/Page3"
import Page4 from "./pages/Page4"
import Page5 from "./pages/Page5"
import Page6 from "./pages/Page6"
import Page7 from "./pages/Page7"
import Page8 from "./pages/Page8"
import Page10 from "./pages/Page10"
import PageST from "./pages/PageST"
import Page11 from "./pages/Page11"

function App() {
  return (
   <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="ws2" element={<Page1 />} />
          <Route path="ws3" element={<Page2 />} />
          <Route path="ws4" element={<Page3 />} />
          <Route path="ws5" element={<Page4 />} />
          <Route path="ws6" element={<Page5 />} />
          <Route path="ws7" element={<Page6 />} />
          <Route path="ws9" element={<Page7 />} />
          <Route path="ws8" element={<Page8 />} />
          <Route path="ws10" element={<Page10 />} />
          <Route path="st" element={<PageST />} />
          <Route path="ws11" element={<Page11 />} />
        </Routes>
     </BrowserRouter>
   </>
  )
}

export default App
