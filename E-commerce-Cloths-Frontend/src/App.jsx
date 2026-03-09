import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Login from "./Login";
import SignUp from "./SignUp";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Collection from "./pages/Collection";
import CategoryCollection from "./pages/CategoryCollection";
import ProductDetails from "./pages/ProductDetails";
import Profile from "./pages/Profile";

import About from "./pages/About";

function App() {

  const [success, changeSuccessState] = useState(false);
  const [authPage, changeAuthPage] = useState("login");

  const location = useLocation();

  const curr_loc = location.pathname == "/login" || location.pathname == "/signup" ;

  return (
    <main className="overflow-hidden text-tertiary">

      {!curr_loc && <Header/> }

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/collection/:category" element={<CategoryCollection />} />
        <Route path="/collection/:category/:id" element={<ProductDetails />} />
        <Route path="/About" element={<About />} />

        {/* Auth Pages */}
        <Route
          path="/login"
          element={
            <Login
              success={success}
              changeSuccessState={changeSuccessState}
              changeAuthPage={changeAuthPage}
            />
          }
        />

        <Route
          path="/signup"
          element={
            <SignUp
              success={success}
              changeSuccessState={changeSuccessState}
              changeAuthPage={changeAuthPage}
            />
          }
        />

      </Routes>

      {!curr_loc && <Footer /> }

    </main>
  );
}

export default App;