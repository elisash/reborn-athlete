import React from "react";
export default function NewRoster() {
  const [roster, setRoster] = useState([]);
  const [organizer, setOrganizer] = useState("");
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch("/roster")
      .then((res) => res.json())
      .then((data) => setRoster(data));
  }, []);

  //   function handleSubmit(e) {
  //     e.preventDefault();
  //     setErrors(null);
  //     setIsLoading(true);
  //     fetch("/roster", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         organizer: organizer,
  //         players: players,
  //       }),
  //     }).then((r) => {
  //       setIsLoading(false);
  //       if (r.ok) {
  //         r.json().then((events) => addEvent(events));
  //       } else {
  //         r.json().then((err) => setErrors(err.errors));
  //       }
  //     });
  //   }

  return (
    <div>
      <h1>New Roster</h1>
    </div>
  );
}
