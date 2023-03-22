import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function HomeCard1() {
  return (
    <div className="w-card">
      <div className="card-image">
        <img
          className="card-image1"
          src="https://www.austinfitmagazine.com/wp-content/uploads/2019/05/0008.jpg"
        />
      </div>
      <div className="card-tex">
        <h1>
          <strong>Join a Freesbie League</strong>
        </h1>
        <p>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <button className="card-btn">Sign Up</button>
      </div>
    </div>

    // <Card className="whole-card" style={{ width: "21rem" }}>
    //   <Card.Img
    //     className="card-img"
    //     variant="top"
    //     src="https://www.austinfitmagazine.com/wp-content/uploads/2019/05/0008.jpg"
    //   />
    //   <Card.Body>
    //     <Card.Title>
    //       <strong>Join a Freesbie League</strong>
    //     </Card.Title>
    //     <Card.Text>
    //       Some quick example text to build on the card title and make up the
    //       bulk of the card's content.
    //     </Card.Text>
    //     <button className="card-btn">Sign Up</button>
    //   </Card.Body>
    // </Card>
  );
}

export default HomeCard1;
