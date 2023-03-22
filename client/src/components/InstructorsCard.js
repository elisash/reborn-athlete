import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import { useEffect, useState } from "react";

function InstructorsCard({ instructor, updatedArray, user }) {
  const [show, setShow] = useState(false);
  const [isHide, setIsHide] = useState(true);
  const [isComment, setIsComment] = useState(true);
  const [comment, setComment] = useState("");

  function handleDelete() {
    fetch(`instructors/${instructor.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => updatedArray(instructor));
  }

  // function handleSubmit() {
  //   const id = pet.id;
  //   const newData = {
  //     comments: [...instructor.comments, comment],
  //   };
  //   addComment(id, newData, comment);
  // }

  // const comments = instructor.comments.map((comment) => {
  //   return (
  //     <p
  //       id="single-comments"
  //       className={isComment ? "comments-hide" : "comments-show"}
  //     >
  //       {comment}
  //     </p>
  //   );
  // });

  return (
    <div className="instructor">
      <Card style={{ width: "20rem" }}>
        <Card.Img
          className="instructor-img"
          variant="top"
          src={instructor.image}
        />

        <Card.Body>
          <Card.Title>
            <strong>{instructor.instruct}</strong>
          </Card.Title>
          <Card.Subtitle className="mb-2">
            <strong>Instructor:</strong> {instructor.name}
          </Card.Subtitle>
          <Card.Text>
            <p>
              <strong>{instructor.class_name}</strong>
            </p>
            <p>
              <strong>hourly rate:</strong> {instructor.hourly_rate}
            </p>
            <p>{instructor.description}</p>
          </Card.Text>
          {user.username === instructor.name ? null : (
            <Button variant="primary">Contact Me</Button>
          )}
          {/* 
          <button
            onClick={() => setIsComment(!isComment)}
            className="comment-btn"
          >
            💬{instructor.comments.lenght}{" "}
          </button> */}
          {/* 
          <input
            id="comment-id"
            onChange={(e) => setComment(e.target.value)}
            className={isComment ? "comments-hide" : "comments-show"}
            type="text"
            placeholder="Leave me a comment!"
          />
          <button
            id="submit-id"
            onClick={handleSubmit}
            className={isComment ? "comments-hide" : "comments-show"}
          >
            <strong>Submit</strong>
          </button> */}

          {user.username === instructor.name ? (
            <button onClick={handleDelete}>DELETE</button>
          ) : null}
        </Card.Body>
      </Card>
    </div>
  );
}

// {currentUser.name === post.author ? (
//   <button onClick={handleDelete}>DELETE</button>
// ) : null}

export default InstructorsCard;
