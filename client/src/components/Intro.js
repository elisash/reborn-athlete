import Card from "react-bootstrap/Card";
import React from "react";

function Intro() {
  return (
    <Card>
      <Card.Img
        src="https://jccindy.org/wp-content/uploads/2022/06/adult-tennis-at-jcc.webp"
        alt="Card image"
      />
      <Card.ImgOverlay>
        <Card.Text className="intro-text-title">Unlock</Card.Text>
        <Card.Text className="intro-text">New Skills</Card.Text>
        <Card.Text className="intro-text"> New Possibilities</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default Intro;

{
  /* <Card.ImgOverlay>
<Card.Text className="intro-text-title">Adult Intro Lessons</Card.Text>
<Card.Text className="intro-text">
  It's never too late to learn something new
</Card.Text>
<Card.Text className="intro-text">Start Now!</Card.Text>
</Card.ImgOverlay>
</Card> */
}
