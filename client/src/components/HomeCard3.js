import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import LogIn from "./LogIn";

function HomeCard3() {
  function handleClick(e) {
    <LogIn />;
  }
  return (
    <div className="w-card">
      <div className="card-image">
        <img
          className="card-image1"
          src="https://lh6.googleusercontent.com/AOw66ELgq0yn6KrbFg8krtBHxdgxpZKOWXb6C8Zt23ujZQrtIxDHFyJNygSXOh8kJfDcFvQko9DcfNz0F-EmUi6SeuHWjjFP744VthsfyKm6rom6Ie4BFosIoV4rVoYtnDF5XjVD"
        />
      </div>
      <div className="card-tex">
        <h1>
          <strong>Join a Field-Hockey League</strong>
        </h1>
        <p>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <button className="card-btn">Sign Up</button>
      </div>
    </div>
  );
}

export default HomeCard3;
// <Card className="whole-card" style={{ width: "21rem" }}>
//   <Card.Img
//     className="card-img"
//     variant="top"
//     src="https://lh6.googleusercontent.com/AOw66ELgq0yn6KrbFg8krtBHxdgxpZKOWXb6C8Zt23ujZQrtIxDHFyJNygSXOh8kJfDcFvQko9DcfNz0F-EmUi6SeuHWjjFP744VthsfyKm6rom6Ie4BFosIoV4rVoYtnDF5XjVD"
//   />
//   <Card.Body>
//     <Card.Title>
//       <strong>Join Field Hockey League</strong>
//     </Card.Title>
//     <Card.Text>
//       Some quick example text to build on the card title and make up the
//       bulk of the card's content.
//     </Card.Text>
//     <button onClick={handleClick} className="card-btn">
//       Sign Up
//     </button>
//   </Card.Body>
// </Card>
