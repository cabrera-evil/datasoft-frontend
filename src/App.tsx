import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./layout/Layout"
import Feed from "./pages/Feed/Feed"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/" element={<Feed />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
