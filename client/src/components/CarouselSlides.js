import Carousel from "react-bootstrap/Carousel";

function CarouselSlides() {
  return (
    <div className="carousel1">
      <Carousel className="whole-carousel">
        <Carousel.Item className="carousel">
          <img
            className="d-block"
            src="https://i2-prod.dailypost.co.uk/incoming/article9041403.ece/ALTERNATES/s615b/JS61177008.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="carousel-text">Join a Zorbin Tournament</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel">
          <img
            className="d-block"
            src="https://i2-prod.walesonline.co.uk/incoming/article11118489.ece/ALTERNATES/s615b/unicycle.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="carousel-text">Join a Unicycle League</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel">
          <img
            className="d-block"
            src="https://www.catholicherald.com/wp-content/uploads/2022/01/Catholic-Sports_1_CR.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="carousel-text">Join a Volley League</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel">
          <img
            className="d-block"
            src="https://www.zogsports.com/wp-content/uploads/2022/04/Football-Hero-2000x1000-1.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3 className="carousel-text">Interested in Flag Football</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel">
          <img
            className="d-block"
            src="https://www.thefactsite.com/wp-content/uploads/2021/04/running-facts.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="carousel-text">Join a Sunrise Running Group</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel">
          <img
            className="d-block"
            src="https://resources.ecb.co.uk/photo-resources/2019/07/12/9fe75a47-f8b1-47e6-b909-a335ab0062fe/Womens_Softball_Tournament_149-updated.jpg?width=1440"
            alt="fourth-slide"
          />

          <Carousel.Caption>
            <h3 className="carousel-text">Join a Cricket Pick up</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselSlides;
