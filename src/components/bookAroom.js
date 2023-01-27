import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const BookAroom = () => {
  const [formData, setFormData] = useState({
    startDate: null,
    endDate: null,
    noOfPersons: null,
    noOfRooms: null,
    typeOfRoom: null,
  });

  const handleChange = () => {
    console.log("hello");
  };
  /** validations
   * start date: required, greater than today
   * end date: required, should be grteater than or equal to start date
   *
   * no of persons: number required, should be greater than 0 and less than or equal to five
   *
   * no of rooms: number required, should be greater than 0 and less than or equal to 3
   *
   * type of room: option
   * book: button should be a post with all the booking data
   *
   * show a message on success or failure
   *
   *  */
  return (
    <div className="container w-25 text-white transparent-header rounded shadow">
      <h4 className="display-6 text-center">Book a Room</h4>
      <form onSubmit={() => {}}>
        <label htmlFor="startDate">Start Date</label>
        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          className="form-control mb-2"
          onChange={handleChange}
        />
        <label htmlFor="endDatge">End Date</label>
        <input
          type="date"
          name="endDate"
          value={formData.endDate}
          className="form-control mb-2"
          onChange={handleChange}
        />
        <label htmlFor="noOfPersons">No of Persons</label>
        <input
          type="number"
          name="noOfPersons"
          value={formData.noOfPersons}
          className="form-control mb-2"
          onChange={handleChange}
        />
        <label htmlFor="noOfRooms">No of Rooms</label>
        <input
          type="number"
          name="noOfRooms"
          value={formData.noOfRooms}
          className="form-control mb-2"
          onChange={handleChange}
        />
        <label htmlFor="typeOfRoom">Type of Room</label>
        <select
          name="typeOfRoom"
          value={formData.typeOfRoom}
          className="form-control mb-3"
          id="roomSelect"
        >
          <option value="">--Select room type--</option>
          <option value="executive">Executive</option>
          <option value="suite">Suite</option>
          <option value="king">King</option>
          <option value="Queen">Queen</option>
        </select>
        <button type="submit" className="btn btn-success form-control mb-2">
          Book
        </button>
      </form>
    </div>
  );
};

export default BookAroom;
