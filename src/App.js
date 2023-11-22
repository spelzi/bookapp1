import Main from "./component/Main";
import "./App.css";
import MainNav from "./component/MainNav";
import { Fragment } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import Login from "./component/auth/Login";
import Register from "./component/auth/Register";
import Home from "./component/Home";

function App() {
  return (
    <Fragment>
      <header>
        <MainNav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />

          <Route path="/books" element={<Main />} />

          <Route path="/get-started" element={<AuthPage />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </main>
    </Fragment>
  );
}

export default App;
