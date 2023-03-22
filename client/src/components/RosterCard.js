import React from "react";

export default function RosterCard({ user, roster }) {
  return (
    <div className="roster-card">
      <h1>{roster.player}</h1>
    </div>
  );
}
