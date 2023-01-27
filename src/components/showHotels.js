import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const ShowHotels = () => {
  const [hotels, setHotels] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:4000/hotels")
      .then((res) => {
        setHotels(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return hotels.map((hotel) => {
    return (
      <div className="container w-75 ">
        <ul key={hotel.id} className="row list-none">
          <div className="card-body">
            <div className="row transparent rounded shadow py-2 px-0 align-items-center">
              <div className="col-md-2">
                {" "}
                <img
                  src={hotel.imageUrl}
                  alt={`view of ${hotel.hotelName}`}
                  className="card-img-top rounded-circle border-dark opacity-75 shadow"
                />
              </div>
              <div className="col-md-8">
                <li className="display-6 text-muted text-center mb-3">
                  {hotel.hotelName}
                </li>
                <li className="">
                  <span className="fw-bold">Amenities:&nbsp;</span>
                  {hotel.amenities}
                </li>
                <li className="">
                  <span className="fw-bold">Address:&nbsp;</span>
                  {hotel.address}
                </li>
                <li className="">
                  <span className="fw-bold">Contact No:&nbsp;</span>
                  {hotel.phoneNo}
                </li>
              </div>
              <div className="col-md-2 my-auto ">
                <button
                  className=" w-100 btn btn-success opacity-75 mb-2"
                  onClick={() => {
                    navigate("./bookAroom");
                  }}
                >
                  Book a Room
                </button>
                <button
                  className="w-100 btn btn-success opacity-75 mb-2"
                  onClick={() => {
                    navigate("./addAreview");
                  }}
                >
                  Add a Review
                </button>
                <button
                  className="w-100  btn btn-success opacity-75"
                  onClick={() => {
                    navigate("./reviews");
                  }}
                >
                  <span className="fw-bold"></span>
                  Reviews
                </button>
              </div>
            </div>
          </div>
        </ul>
      </div>
    );
  });
};

export default ShowHotels;

// issues documented here

// make all the images look the same
// figure out how to get the images to display from the ajax call

// I just figured out that I want the application to scroll and the header to be fixed
