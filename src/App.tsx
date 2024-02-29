import './App.css'
import {Link, Route, Routes} from "react-router-dom";
import Cars from "./pages/Cars.tsx";
import StartPage from "./pages/StartPage.tsx";
import Course from "./pages/Course.tsx";

function App() {



  return (
    <>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/cars"}>Cars</Link>
        <Link to={"/course/currywurst"}>Course/currywurst</Link>
      </nav>
    <Routes>
      <Route path={"/"} element={<StartPage />} />
      <Route path={"/cars"} element={<Cars />} />
      <Route path={"/course/:currywurst"} element={<Course />} />
    </Routes>
    </>
  )
}

export default App
