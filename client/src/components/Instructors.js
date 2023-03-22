import React from "react";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import InstructorsCard from "./InstructorsCard";

export default function Instructors({ user }) {
  const [instructors, setInstructors] = useState([]);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [instruct, setInstruct] = useState("");
  const [hourlyRate, setHourlyRate] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [class_name, setClassName] = useState("");
  const [name, setName] = useState(user.username);
  const [comments, setComment] = useState([]);

  useEffect(() => {
    fetch("/instructors")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);

  // function addComment(id) {
  //   fetch(`instructors/${id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       instruct: instruct,
  //       hourly_rate: hourlyRate,
  //       description: description,
  //       class_name: class_name,
  //       name: name,
  //       image: image,
  //       comments: comments,
  //     }),
  //   });
  //   const updatedComments = instructors.map((instructor) => {
  //     if (instructor.id === id) {
  //       return { ...instructor, comments: [...instructor.comments, comment] };
  //     } else return instructor;
  //   });
  //   setInstructors(updatedComments);
  // }

  function addInstructor(newInstructor) {
    setInstructors([...instructors, newInstructor]);
  }

  function updatedArray(deletedInstructor) {
    const updatedInstructors = instructors.filter((instructor) => {
      return instructor.id !== deletedInstructor.id;
    });
    setInstructors(updatedInstructors);
  }

  const NewInstructor = instructors.map((instructor) => {
    return (
      <div className="instructor-card">
        <InstructorsCard
          key={instructor.id}
          user={user}
          instructor={instructor}
          updatedArray={updatedArray}
        />
      </div>
    );
  });

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/instructors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        instruct: instruct,
        hourly_rate: hourlyRate,
        description: description,
        class_name: class_name,
        name: name,
        image: image,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((instructor) => addInstructor(instructor));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div>
      <div className="instructor-form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="instruct">Sport</label>
          <input
            type="text"
            id="instruct"
            autoComplete="off"
            value={instruct}
            onChange={(e) => setInstruct(e.target.value)}
          />
          <input
            onChange={(e) => setImage(e.target.value)}
            className="form-input"
            placeholder="Image URL"
          ></input>
          <label htmlFor="class">type</label>
          <select
            id="class"
            value={class_name}
            onChange={(e) => setClassName(e.target.value)}
          >
            <option value="select">Select</option>
            <option value="1 on 1">1 on 1</option>
            <option value="Class">class</option>
            <option value="Pair">pair</option>
            <option value="Groups">groups</option>
          </select>

          <label htmlFor="hourly_rate">hourly rate</label>
          <input
            type="number"
            id="hourly_rate"
            autoComplete="off"
            value={hourlyRate}
            onChange={(e) => setHourlyRate(e.target.value)}
          />

          <label htmlFor="description">description</label>
          <input
            type="text"
            id="description"
            autoComplete="off"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <Button variant="fill" color="primary" type="submit">
            {isLoading ? "Loading..." : "Register"}
          </Button>
          <p>{errors}</p>
        </form>
      </div>
      <div className="instructor">
        <h1>Have the Skills? Become a Instructor!</h1>
      </div>
      <div className="new-instructor">
        <div>{NewInstructor}</div>
      </div>
    </div>
  );
}
