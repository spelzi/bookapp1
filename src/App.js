import Home from "./component/Home";
import About from "./component/About";
import Service from "./component/Service";
import AuthLog1 from "./component/AuthLog";
import Authreg1 from "./component/Authreg";
import "./App.css";
import MainNav from "./component/MainNav";
import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import ForgetPass from "./component/ForgetPass";
import ConPolicy from "./component/ConPolicy";

function App() {
  return (
    <Fragment>
      <header>
        <MainNav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="about" element={<About />} />
          <Route path="service" element={<Service />} />
          <Route path="/login" element={<AuthLog1 />} />
          <Route path="/login/forgetPassword" element={<ForgetPass />} />
          <Route path="getstarted/register" element={<Authreg1 />} />
          <Route path="/condition/policy" element={<ConPolicy />} />
        </Routes>
      </main>
    </Fragment>
  );
}

export default App;
