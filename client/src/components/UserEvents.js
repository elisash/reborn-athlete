import React from "react";
import EventCard from "./EventCard";

export default function UserEvents({ user, events }) {
  const organizedEvents = events.filter(
    (event) => event.organizer === user.username
  );
  return (
    <div>
      <div className="user-venue">
        <div>
          <h3>Games You Created: </h3>
        </div>
        {organizedEvents.length > 0
          ? organizedEvents.map((event) => {
              return <EventCard key={event.id} event={event} user={user} />;
            })
          : null}{" "}
      </div>
    </div>
  );
}
