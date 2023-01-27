// import logo from './logo.svg';
import "./App.css";
import React from "react";

import Login from "./components/login";
import Registration from "./components/registration";
import Home from "./components/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CommonTemplate from "./components/commonTemplate";
import ShowHotels from "./components/showHotels";
import Bookings from "./components/bookings";
import BookAroom from "./components/bookAroom";
import NotFound from "./components/notFound";
import AddAReview from "./components/addAreview";
import Reviews from "./components/reviews";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<CommonTemplate />}>
            <Route index="/" element={<Login />} />
            <Route path="login" element={<Login />} />
            <Route path="registration" element={<Registration />} />
            <Route path="home" element={<Home />} />
            <Route path="/showHotels" element={<ShowHotels />} />
            <Route path="showHotels/bookAroom" element={<BookAroom />} />
            <Route path="showHotels/addAreview" element={<AddAReview />} />
            <Route path="showHotels/reviews" element={<Reviews />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// axios.delete("http://localhost:4000/users/"+id)
//             .then(()=>{
//                 console.log("user deleted successfully")
//                 //get axios request latest records
//                 //other filter array
//                 setUsers(users.filter((user)=>{
//                     return user.id!=id
//                 }))
//             })
//             .catch()
//     }
