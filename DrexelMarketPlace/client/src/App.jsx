import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import CreateListing from "./pages/CreateListing";
import UpdateListing from "./pages/UpdateListing";
import Listing from "./pages/Listing";
import Search from "./pages/Search";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {" "}
      {/* Ensures full height layout */}
      <BrowserRouter>
        <Header />
        <main className="flex-grow">
          {" "}
          {/* Pushes footer to bottom */}
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/sign-in"
              element={<SignIn />}
            />
            <Route
              path="/sign-up"
              element={<SignUp />}
            />
            <Route
              path="/about"
              element={<About />}
            />
            <Route
              path="/search"
              element={<Search />}
            />
            <Route
              path="/listing/:listingId"
              element={<Listing />}
            />

            <Route element={<PrivateRoute />}>
              <Route
                path="/profile"
                element={<Profile />}
              />
              <Route
                path="/create-listing"
                element={<CreateListing />}
              />
              <Route
                path="/update-listing/:listingId"
                element={<UpdateListing />}
              />
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
      <Footer className="mt-auto" />
    </div>
  );
}