import Card from "react-bootstrap/Card";
import React from "react";
import Cards from "react-credit-cards";
// import CreditCardForm from "../CreditCardForm";
import { useState } from "react";
import useForm from "./useForm";
import { Button, Form, Row, Col, Modal } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import "bootstrap/dist/css/bootstrap.min.css";

function EventCard({ event, user, updatedArray }) {
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [alert, setAlert] = useState(false);

  const { handleChange, handleFocus, handleSubmit, values, errors } = useForm();

  const timestamp = event.time;
  const date = new Date(timestamp);
  const time = date.toLocaleTimeString();
  // return <div>{time}</div>;

  function handleDelete() {
    fetch(`events/${event.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => updatedArray(event));
  }

  if (alert) {
    return (
      <Alert variant="success" onClose={() => setAlert(false)} dismissible>
        <Alert.Heading>Congrats</Alert.Heading>
        <p>You are Registered!</p>
      </Alert>
    );
  }

  // function handleSubmit(event) {
  //   e.preventDefault();

  //   // fetch(`events/${event.id}`, {
  //   //   method: "PUT",
  //   setUpdatedAttendees((updatedAttendees) => [...updatedAttendees, event.id]);
  // }

  return (
    <div>
      <Card
        style={{
          width: "25rem",
          textAlign: "center",
          backgroundColor: "whitesmoke",
          border: "none",
        }}
      >
        <Card.Body>
          <Card.Title className="mb-title">{event.sport}</Card.Title>
          <Card.Subtitle className="mb-2">
            organized by: {event.organizer}
          </Card.Subtitle>
          <Card.Text>
            <p>
              <strong>{event.sort}</strong>
            </p>
            <p>
              <strong>{event.category}</strong>
            </p>
            <p>
              <strong>LEVEL:</strong> {event.level}
            </p>
            <p>
              <strong>SPOTS AVAILABLE: </strong> {event.spots_available}
            </p>
            <p>
              <strong>TIME: </strong> {time}
            </p>
            <p>
              <strong>DATE: </strong>
              {event.date}
            </p>
            <p>
              <strong>LOCATION: </strong> {event.location}
            </p>
            <p>
              <strong>${event.price_per_player}</strong>
            </p>
            <p>
              <strong>ADDITIONAL COMMENTS </strong>
              {event.comments}
            </p>
            <ol>
              <strong>ATTENDEES</strong>
              <br></br>
              {event.roster.length > 0
                ? event.roster.map((attendee) => (
                    <li key={attendee.id}>{attendee.username}</li>
                  ))
                : "no attendees"}
            </ol>
          </Card.Text>
          {user.username === event.organizer ? null : (
            <Card.Link className="register" onClick={handleShow} href="#">
              Register
            </Card.Link>
          )}

          {user.username === event.organizer ? (
            <>
              <button onClick={handleDelete}>DELETE</button>
            </>
          ) : null}

          {/* <Card.Link href="#"></Card.Link> */}
        </Card.Body>
      </Card>

      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Enter your payment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="container">
              <div className="box justify-content-center align-items-center">
                <div className="formDiv">
                  <div className="creditCard">
                    <Cards
                      cvc={values.cardSecurityCode}
                      expiry={values.cardExpiration}
                      focused={values.focus}
                      name={values.cardName}
                      number={values.cardNumber}
                    />
                  </div>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group>
                      <Form.Control
                        type="text"
                        id="cardName"
                        data-testid="cardName"
                        name="cardName"
                        placeholder="Cardholder Name"
                        value={values.cardName}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        isValid={errors.cname}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Control
                        type="number"
                        id="cardNumber"
                        data-testid="cardNumber"
                        name="cardNumber"
                        placeholder="Card Number"
                        value={values.cardNumber}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        isValid={errors.cnumber}
                      />
                    </Form.Group>
                    <Row>
                      <Col>
                        <Form.Group>
                          <Form.Control
                            type="text"
                            name="cardType"
                            id="cardType"
                            data-testid="cardType"
                            placeholder="Card Type"
                            value={values.cardType}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            isValid={errors.ctype}
                          />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group>
                          <Form.Control
                            type="text"
                            id="cardExpiration"
                            data-testid="cardExpiration"
                            name="cardExpiration"
                            placeholder="Expiration Date"
                            value={values.cardExpiration}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            isValid={errors.cexp}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Group>
                          <Form.Control
                            type="number"
                            id="cardSecurityCode"
                            data-testid="cardSecurityCode"
                            name="cardSecurityCode"
                            placeholder="Security Code"
                            value={values.cardSecurityCode}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            isValid={errors.ccvv}
                          />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group>
                          <Form.Control
                            type="text"
                            id="cardPostalCode"
                            data-testid="cardPostalCode"
                            name="cardPostalCode"
                            placeholder="Postal Code"
                            value={values.cardPostalCode}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            isValid={errors.cpostal}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Button
                      // size={"block"}
                      // id="validateButton"
                      // // type="submit"
                      onClick={() => setAlert(true)}
                    >
                      Register
                    </Button>
                  </Form>
                </div>
                {/* <Alert
                  id="alertMessage"
                  data-testid="alertMessage"
                  variant={errors.variant}
                  show={errors.show}
                >
                  {errors.message}
                </Alert>{" "} */}
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default EventCard;

// import React from "react";
// export default function EventCard({ event }) {
//   return (

//     <div className="eventcard">
//       <h1>{event.organizer}</h1>
//       <p>{event.sport}</h2>
//       <h2>{event.sort}</h2>
//       <h2>{event.category}</h2>
//       <h2>{event.sort}</h2>
//       <h3>{event.level}</h3>
//       <h2>{event.spots_available}</h2>
//       <h2>{event.time}</h2>
//       <h2>{event.date}</h2>
//       <h2>{event.location}</h2>
//       <h2>{event.price_per_player}</h2>
//       <h2>{event.comments}</h2>
//     </div>
//   );
// }
