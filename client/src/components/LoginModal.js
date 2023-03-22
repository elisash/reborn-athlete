import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import LogIn from "./LogIn";

export default function LoginModal({ setUser }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <button className="modal-login" onClick={handleShow}>
        ⌲ Login
      </button>

      <Modal className="modal" show={show} onHide={handleClose}>
        <Modal.Header id="modal-header" closeButton>
          <Modal.Title>Welcome!</Modal.Title>
        </Modal.Header>

        <Modal.Body id="modal-body" closeButton>
          <LogIn onLogin={setUser} />
        </Modal.Body>

        <Modal.Footer id="modal-footer1">
          <button onClick={handleClose}>Close</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
