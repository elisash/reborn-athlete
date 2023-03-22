import React, { useState } from "react";

function FileUpload() {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    // make a post request to your Rails server with the form data
    fetch("http://your-rails-server.com/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleChange} accept="image/png" />
      <button type="submit">Upload</button>
    </form>
  );
}

export default FileUpload;
