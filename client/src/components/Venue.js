import React, { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import VenueCard from "./VenueCard";

export default function Venue({ user, venues, setVenues }) {
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [organizer, setOrganizer] = useState(user.username);
  const [sport, setSport] = useState("");
  // const [date, setDate] = useState("");
  // const [time, setTime] = useState("");
  const [cost, setCost] = useState("");
  const [capacity, setCapacity] = useState("");
  const [image, setImage] = useState("");
  const [comment, setComment] = useState("");
  const [location, setLocation] = useState("");

  function addVenue(newVenue) {
    setVenues([...venues, newVenue]);
  }

  function updatedArray(deletedVenue) {
    const updatedVenue = venues.filter((venue) => {
      return venue.id !== deletedVenue.id;
    });
    setVenues(updatedVenue);
  }

  const newVenue = venues.map((venue) => {
    return (
      <VenueCard
        key={venue.id}
        venue={venue}
        user={user}
        updatedArray={updatedArray}
      />
    );
  });

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/venues", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        organizer,
        sport,
        // dates_available: date,
        // time_available: time,
        cost,
        capacity,
        image,
        comment,
        location,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((venue) => addVenue(venue));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div className="venue">
      <h1 className="rental">Rentals</h1>
      <div className="new-venue">{newVenue}</div>
      <div className="venue-form">
        <h1>Field Registration</h1>
        <form onSubmit={handleSubmit}>
          {/* <label htmlFor="organizer">organizer</label>
        <input
          type="text"
          id="organizer"
          autoComplete="off"
          value={organizer}
          onChange={(e) => setOrganizer(e.target.value)}
        /> */}
          <br></br>

          <label htmlFor="sport">sport</label>
          <br></br>
          <input
            type="text"
            id="sport"
            autoComplete="off"
            value={sport}
            onChange={(e) => setSport(e.target.value)}
          />
          <br></br>
          {/* <label htmlFor="time">Time:</label>
        <input
          type="time"
          className="event-input"
          id="time"
          name="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        /> */}

          {/* <label htmlFor="date">Date:</label>
        <input
          type="date"
          className="event-input"
          id="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        /> */}

          {/* 
        <label htmlFor="time">time</label>
        <input
          type="time"
          id="time"
          autoComplete="on"
          value=""
          // onChange={(e) => setOrganizer(e.target.value)}
        /> */}

          <label htmlFor="location">location</label>
          <br></br>
          <input
            type="text"
            id="location"
            autoComplete="off"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <br></br>
          <label htmlFor="cost">price per hour</label>
          <br></br>
          <input
            type="number"
            id="cost"
            autoComplete="off"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
          <br></br>
          <label htmlFor="capacity">Capacity</label>
          <br></br>
          <input
            id="capacity"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
            type="number"
            name="number_field"
            min="1"
            max="100"
            step="1"
          />
          {/* <label htmlFor="capacity">capacity</label>
        <input type="number" id="capacity" /> */}
          {/* <input
          type="number"
          id="spots_available"
          autoComplete="off"
          value=""
          // onChange={(e) => setOrganizer(e.target.value)}
        /> */}
          <br></br>
          <input
            onChange={(e) => setImage(e.target.value)}
            className="form-input"
            placeholder="Image URL"
          ></input>

          <br></br>
          <label htmlFor="comment">additional comments</label>
          <br></br>
          <input
            type="text"
            id="comment"
            autoComplete="off"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <br></br>

          <button className="btn-basic" type="submit">
            {isLoading ? "Loading..." : "New Venue"}
          </button>
          <p>{errors}</p>
        </form>
      </div>
    </div>
  );
}
