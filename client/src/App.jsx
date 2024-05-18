import { Route, Routes } from "react-router-dom";
import LandingPage from "./Views/landingPage/LandingPage";
import Home from "./Views/homePage/HomePage";
import Detail from "./Views/detailPage/Detail";
import FormPage from "./Views/formPage/FormPage";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
    </>
  );
}

export default App;
