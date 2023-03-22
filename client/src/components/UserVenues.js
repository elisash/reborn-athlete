import React from "react";
import VenueCard from "./VenueCard";

export default function UserVenues({ user, venues }) {
  return (
    <div>
      <div className="user-venue">
        <div>
          <h3>Current Venues:</h3>
        </div>
        {venues.map((venue) =>
          venue.organizer === user.username ? (
            <VenueCard key={venue.id} venue={venue} user={user} />
          ) : null
        )}
      </div>
    </div>
  );
}
