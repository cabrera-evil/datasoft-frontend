import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./layout/Layout"
import NotFound from "./pages/NotFound/NotFound"
import Feed from "./pages/Feed/Feed"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Feed />} />
          <Route path="category/:catId" element={<Feed />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
