import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";

function VenueCard({ venue, user, updatedArray }) {
  // const timestamp = venue.time;
  // const date = new Date(timestamp);
  // const time = date.toLocaleTimeString();
  const [clock, setClock] = useState([]);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    fetch("/clock").then((r) => {
      r.json().then((clock) => {
        setClock(clock);
      });
    });
  }, []);
  function handleDelete() {
    fetch(`venues/${venue.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => updatedArray(venue));
  }
  const arrayOfTimes = clock.map((time) => {
    return (
      <button className="clock-btn" key={time.id} onClick={handleShow}>
        {time.timeframes}
      </button>
    );
  });

  return (
    <div>
      <div>
        <Card className="venue-card" style={{ width: "30rem" }}>
          <Card.Img className="image-card" variant="top" src={venue.image} />
          <Card.Body>
            <Card.Title>
              <strong>{venue.sport}</strong>
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              <strong>Organized By: </strong> {venue.organizer}
            </Card.Subtitle>
            <Card.Text>
              <p>
                <strong>Location: </strong>
                {venue.location}
              </p>
              {/* <p>time: {time}</p> */}
              {/* <p>date: {venue.date}</p> */}
              <p>
                <strong>Price Per Hour: </strong>
                {venue.cost}
              </p>
              <p>
                <strong>Capacity: </strong>
                {venue.capacity}
              </p>
              <p>
                <strong>Additional Comments: </strong>
                {venue.comment}
              </p>
            </Card.Text>
            <Card.Text>
              <p>{arrayOfTimes}</p>
            </Card.Text>
            {/* {user.username === venue.organizer ? null : (
            <Button variant="primary">Rent</Button>
          )} */}
            {user.username === venue.organizer ? (
              <button onClick={handleDelete}>DELETE</button>
            ) : null}
          </Card.Body>
        </Card>
      </div>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Field Rental</Modal.Title>
        </Modal.Header>
        <Modal.Body>This time slot is open</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Rent
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default VenueCard;
