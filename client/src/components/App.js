import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import NavBar from "./NavBar";
import { Switch, Route } from "react-router";
import { useEffect } from "react";
import Home from "./Home";
import HomePage from "./HomePage";
import Profile from "./Profile";
import CreateEvent from "./CreateEvent";
import Instructors from "./Instructors";
import Venue from "./Venue";

function App() {
  const [user, setUser] = useState(null);
  const [events, setEvents] = useState([]);
  const [venues, setVenues] = useState([]);
  const [rosters, setRosters] = useState([]);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/events")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  useEffect(() => {
    fetch("/venues")
      .then((res) => res.json())
      .then((data) => setVenues(data));
  }, []);

  if (!user)
    return (
      <div>
        <Switch>
          <Route exact path="/homepage">
            <HomePage setUser={setUser} />
          </Route>
        </Switch>
      </div>
    );

  return (
    <div>
      <NavBar user={user} setUser={setUser} />
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/profile">
          <Profile
            user={user}
            events={events}
            venues={venues}
            setVenues={setVenues}
          />
        </Route>
        <Route exact path="/events">
          <CreateEvent
            user={user}
            events={events}
            setEvents={setEvents}
            rosters={rosters}
            setRosters={setRosters}
          />
        </Route>
        <Route exact path="/instructors">
          <Instructors user={user} />
        </Route>
        <Route exact path="/venue">
          <Venue user={user} venues={venues} setVenues={setVenues} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
