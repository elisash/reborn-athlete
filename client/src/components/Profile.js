import React from "react";
import Roster from "./Roster";
import UserVenues from "./UserVenues";
import UserEvents from "./UserEvents";

export default function Profile({ user, events, venues }) {
  return (
    <div>
      <div>
        <div className="profile">
          <div>
            <img
              className="profile-pic"
              src="https://brandyourself.com/blog/wp-content/uploads/linkedin-profile-picture-too-close.png"
              alt={user.name}
            />
          </div>
          <div className="profile-intro">
            <h5>Profile</h5>
            {/* <h2>{user.profile_pic}</h2> */}
            <h3>
              <strong>Username: </strong>
              {user.username}
            </h3>
            <h3>
              <strong>Email: </strong>
              {user.email}
            </h3>
          </div>
        </div>
        {/* <img className="profile-pic" src={user.avatar} alt="user-profile" /> */}
      </div>
      <div className="roster-uservenues">
        <div>
          <UserEvents user={user} events={events} />
        </div>
        <div>
          <UserVenues user={user} venues={venues} />
        </div>
      </div>
    </div>
  );
}
