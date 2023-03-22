import React from "react";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Search from "../Search";
import CarouselSlides from "./CarouselSlides";
import EventCard from "./EventCard";
import RosterCard from "./RosterCard";

export default function CreateEvent({
  user,
  events,
  setEvents,
  rosters,
  setRosters,
}) {
  const [organizer, setOrganizer] = useState(user.username);
  const [sport, setSport] = useState("");
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [spots, setSpots] = useState("");
  const [comments, setComments] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [player, setPlayer] = useState(user.username);

  function addEvent(newEvent) {
    setEvents([...events, newEvent]);
  }

  function updatedArray(deletedEvent) {
    const updatedevents = events.filter((event) => {
      return event.id !== deletedEvent.id;
    });
    setEvents(updatedevents);
  }

  const filtered = events.filter((event) => {
    return event.sport.toLowerCase().includes(search.toLowerCase());
  });

  const newEvent = filtered.map((event) => {
    return (
      <EventCard
        key={event.id}
        event={event}
        user={user}
        updatedArray={updatedArray}
      />
    );
  });
  // const newRoster = rosters.map((roster) => {
  //   return <RosterCard key={roster.id} roster={roster} user={user} />;
  // });

  function handleSubmit(e) {
    e.preventDefault();
    setEvents("");
    setErrors(null);
    setIsLoading(true);
    fetch("/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        organizer: organizer,
        sport: sport,
        sort: sort,
        category: category,
        level: level,
        date: date,
        time: time,
        location: location,
        price_per_player: price,
        spots_available: spots,
        //  comments: comments,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((events) => addEvent(events));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });

    // fetch("/roster", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     organizer: organizer,
    //     player: player,
    //   }),
    // }).then((r) => {
    //   setIsLoading(false);
    //   if (r.ok) {
    //     r.json().then((roster) => setRosters(roster));
    //   } else {
    //     r.json().then((err) => setErrors(err.errors));
    //   }
    // });
  }

  return (
    <div className="game-body">
      <CarouselSlides />
      <Search search={search} setSearch={setSearch} />
      <h1 className="game-text">Upcoming Games</h1>

      <div className="new-event">{newEvent}</div>
      <div className="event">
        <h1>HAVE A GAME IN MIND?</h1>
        <form onSubmit={handleSubmit}>
          {/* <label htmlFor="organizer">organizer</label>
          <input
            className="event-input"
            type="text"
            id="organizer"
            autoComplete="off"
            value={organizer}
            placeholder={user.username} */}
          {/* // onChange={(e) => setOrganizer(user.username)} */}
          {/* /> */}
          <label htmlFor="sort">type</label>
          <select
            className="event-input"
            id="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="Select">Select</option>
            <option value="FREE">free</option>
            <option value="PICK-UP">pick-up</option>
            <option value="LEAGUE">league</option>
            <option value="TOURNAMENT">tournament</option>
          </select>
          <br></br>
          <label htmlFor="sport">sport</label>
          <input
            className="event-input"
            type="text"
            id="sport"
            autoComplete="off"
            value={sport}
            onChange={(e) => setSport(e.target.value)}
          />
          <br></br>
          <label htmlFor="category">category</label>
          <select
            className="event-input"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Select">Select</option>
            <option value="Women">women</option>
            <option value="Men">men</option>
            <option value="Co-ed">coed</option>
            <option value="Over-30">over 30</option>
            <option value="Over-45">over 45</option>
          </select>
          <br></br>
          <label htmlFor="level">level</label>
          <select
            className="event-input"
            id="level"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
          >
            <option value="Select">Select</option>
            <option value="Beginner">beginner</option>
            <option value="Intermediate">intermediate</option>
            <option value="Advanced">expert</option>
          </select>
          <br></br>
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            className="event-input"
            id="time"
            name="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <br></br>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            className="event-input"
            id="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <br></br>
          {/*           
        <label htmlFor="time">time</label>
        <input
          type="time"
          id="time"
          autoComplete="on"
          value="" */}
          {/* // onChange={(e) => setOrganizer(e.target.value)} */}
          {/* /> */}

          <label htmlFor="location">location</label>
          <input
            className="event-input"
            type="text"
            id="location"
            autoComplete="off"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <br></br>
          <label htmlFor="price_per_player">price</label>
          <input
            className="event-input"
            type="text"
            id="price_per_player"
            autoComplete="off"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <label htmlFor="spots_available">spots available</label>
          <input
            id="spots_available"
            value={spots}
            onChange={(e) => setSpots(e.target.value)}
            className="event-input"
            type="number"
            name="number_field"
            min="1"
            max="100"
            step="1"
          />
          <br></br>
          {/* <input
          type="number"
          id="spots_available"
          autoComplete="off"
          value="" */}
          {/* // onChange={(e) => setOrganizer(e.target.value)} */}
          {/* /> */}
          <label htmlFor="comment">additional comments</label>
          <input
            className="event-input"
            type="text"
            id="comment"
            autoComplete="off"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />
          <br></br>

          <button className="btn-basic" type="submit">
            {isLoading ? "Loading..." : "Create Event"}
          </button>
          <p>{errors}</p>
        </form>
      </div>
    </div>
  );
}
