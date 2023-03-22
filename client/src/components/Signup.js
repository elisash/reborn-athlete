import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";

function Signup({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [email, setEmail] = useState("");
  // const [avatar, setAvatar] = useState("");
  const [errors, setErrors] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setUsername("");
    setPassword("");
    setPasswordConfirmation("");
    setEmail("");
    // setAvatar("");
    setErrors(null);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        email,
        // avatar,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }
  // const handleChange = (e) => {
  //   setAvatar(e.target.files[0]);
  // };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username" className="login-text">
        Username
      </label>
      <br></br>
      <input
        type="text"
        id="username"
        autoComplete="off"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br></br>

      <label htmlFor="password" className="login-text">
        Password
      </label>
      <br></br>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoComplete="current-password"
      />
      <br></br>
      <label htmlFor="password" className="login-text">
        Password Confirmation
      </label>
      <br></br>
      <input
        type="password"
        id="password_confirmation"
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
        autoComplete="current-password"
      />
      <br></br>
      <label htmlFor="email" className="login-text">
        Email
      </label>
      <br></br>
      <input
        type="text"
        id="email"
        autoComplete="off"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br></br>
      {/* <label htmlFor="avatar">avatar</label>
      <input
        type="text"
        id="profile_pic"
        autoComplete="off"
        value={profile_pic}
        onChange={(e) => setAvatar(e.target.value)}
      /> */}

      {/*
    <label htmlFor="icon">Icon</label>
    <select id="icon" value={icon} onChange={handleIconChange}>
    <option value={icon}>Select an icon</option>
    <option value={icon}>🐧</option>
    <option value={icon}>🐳</option>
    <option value={icon}>🦩</option>
    <option value={icon}>🦄</option>
    <option value={icon}>🦥</option>
    </select>
     */}
      {/* <input type="file" accept="image/png" /> */}
      {/* onChange={handleChange} */}
      <button className="btn-basic" type="submit">
        {isLoading ? "Loading..." : "Sign Up"}
      </button>
      <p>{errors}</p>
    </form>
  );
}
export default Signup;

// import React, { useState, useEffect } from "react";
// import { Button } from "react-bootstrap";

// function Signup({ onLogin }) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [passwordConfirmation, setPasswordConfirmation] = useState("");
//   const [email, setEmail] = useState("");
// const [avatar, setAvatar] = useState(null);
//   const [errors, setErrors] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   const formData = new FormData();
//   formData.append("username", username);
//   formData.append("password", password);
//   formData.append("email", email);
//   formData.append("password_confirmation", passwordConfirmation);
//   formData.append("avatar", avatar);

//   async function createUser(formData) {
//     setIsLoading(true);
//     setErrors(null);
//     try {
//       const response = await fetch("/signup", {
//         method: "POST",
//         body: formData,
//       });
//       if (response.ok) {
//         const user = await response.json();
//         console.log(user);
//         onLogin(user);
//       } else {
//         const errors = await response.json();
//         setErrors(errors.errors);
//       }
//       setIsLoading(false);
//     } catch (error) {
//       setErrors(error);
//       setIsLoading(false);
//     }
//   }

//   const handleChange = (e) => {
//     setAvatar(e.target.files[0]);
//     formData.append("avatar", e.target.files[0]);
//     formData.append("avatar_file_name", e.target.files[0].name);
//     formData.append("avatar_content_type", e.target.files[0].type);
//     // const file = e.target.files[0];
//     // const reader = new FileReader();
//     // reader.onloadend = () => {
//     //   setAvatar(reader.result);
//     // };
//     // reader.readAsDataURL(file);
//   };

//   function handleSubmit(e) {
//     e.preventDefault();
//     createUser(formData);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="username">Username</label>
//       <input
//         type="text"
//         id="username"
//         autoComplete="off"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <label htmlFor="password">Password</label>
//       <input
//         type="password"
//         id="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         autoComplete="current-password"
//       />
//       <label htmlFor="password">Password Confirmation</label>
//       <input
//         type="password"
//         id="password_confirmation"
//         value={passwordConfirmation}
//         onChange={(e) => setPasswordConfirmation(e.target.value)}
//         autoComplete="current-password"
//       />
//       <label htmlFor="email">Email</label>
//       <input
//         type="text"
//         id="email"
//         autoComplete="off"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input type="file" onChange={handleChange} accept="image/png" />
//       <Button type="submit">{isLoading ? "Loading..." : "Sign Up"}</Button>
//       <p>{errors}</p>
//     </form>
//   );
// }
// export default Signup;
