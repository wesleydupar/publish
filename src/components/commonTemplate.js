import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../components/style.css";

const CommonTemplate = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [currentUser, setCurrentUser] = useState("");

  const logOut = () => {
    setLoggedIn(false);
  };

  useEffect(() => {});
  return (
    <>
      {loggedIn ? (
        <>
          <header className="mb-5">
            <nav className="navbar navbar-expand-md transparent-header position-fixed w-100 top-0">
              <div className="container-fluid">
                <div>
                  <Link to="./home" className="navbar-brand text-white fw-bold">
                    BonStay
                  </Link>
                </div>
                <div className="d-flex gap-3">
                  <Link to="./home" className="nav-link text-white">
                    Home
                  </Link>
                  <Link to="./showHotels" className="nav-link text-white">
                    Hotels
                  </Link>
                  <Link to="./Bookings" className="nav-link text-white">
                    Bookings
                  </Link>
                  <Link
                    to="/"
                    className="nav-link text-white"
                    onClick={() => {
                      logOut();
                    }}
                  >
                    Logout
                  </Link>
                </div>
              </div>
            </nav>
          </header>
          <main className="p-5">
            <Outlet
              context={[loggedIn, setLoggedIn, currentUser, setCurrentUser]}
            />
          </main>
          <footer className="w-100 text-center transparent-header text-white position-fixed bottom-0">
            @copyrights reserverd
          </footer>
        </>
      ) : (
        <>
          <header className="mb-5">
            <nav className="navbar navbar-expand-md transparent-header position-fixed w-100 top-0">
              <div className="container-fluid">
                <Link to="/" className="navbar-brand text-white fw-bold">
                  BonStay
                </Link>
              </div>
            </nav>
          </header>
          <main className="p-5">
            <Outlet
              context={[loggedIn, setLoggedIn, currentUser, setCurrentUser]}
            />
          </main>
          <footer className="w-100 text-center transparent-header text-white position-fixed bottom-0">
            @copyrights reserverd
          </footer>
        </>
      )}
    </>
  );
};
export default CommonTemplate;
// i will need to see if i can export an object containing the user's information for use in the other components
