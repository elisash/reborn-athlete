import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function HomeCard2() {
  return (
    <div className="w-card">
      <div className="card-tex">
        <h1>
          <strong>Join a Soccer League</strong>
        </h1>
        <p>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <button className="card-btn">Sign Up</button>
      </div>
      <div className="card-image">
        <img
          className="card-image1"
          src="https://i0.wp.com/performanceindoortraining.com/wp-content/uploads/2022/09/21_Adult-Open-Play-C.jpg?fit=530%2C300&ssl=1"
        />
      </div>
    </div>

    // <Card className="whole-card" style={{ width: "21rem" }}>
    //   <Card.Img
    //     className="card-img"
    //     variant="top"
    //     src="https://i0.wp.com/performanceindoortraining.com/wp-content/uploads/2022/09/21_Adult-Open-Play-C.jpg?fit=530%2C300&ssl=1"
    //   />
    //   <Card.Body>
    //     <Card.Title>
    //       <strong>Join a Soccer League</strong>
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

export default HomeCard2;
