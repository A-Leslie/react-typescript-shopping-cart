
import { Container, Row, Col } from 'react-bootstrap';


export const About = () => {
  return (
    <Container className="my-5">
      <h1>About Us</h1>
      <Row className="my-5">
        <Col md={6}>
          <img src={"https://i.pinimg.com/474x/96/06/47/960647166bc53dff3204a863271571ab.jpg"} alt="About Us" className="img-fluid mb-3" style={{"width":"400px",}} />
        </Col>
        <Col md={6}>
          <p className="lead">
          Welcome to our watch shop, where we offer a wide range of high-quality watches at affordable prices. Our mission is to provide our customers with exceptional service and products that meet their unique needs and preferences.

          </p>
          <p className="lead">
            
          Our team of experienced professionals is dedicated to ensuring that every customer has an enjoyable and successful shopping experience. We take pride in offering a diverse selection of watches from some of the top brands in the industry.

          </p>
        </Col>
      </Row>
      <Row className="my-5">
        <Col md={6}>
          
          <p className="lead">
          Whether you are looking for a classic timepiece or a trendy watch that reflects your personal style, we have something for everyone. We are committed to providing our customers with the best possible value and quality, and we look forward to helping you find the perfect watch for you.

          </p>
        </Col>
        <Col md={6}>
          <img src={"https://i.pinimg.com/474x/d8/c4/e1/d8c4e1dbb468aa25e30f95536c8d4052.jpg"} alt="About Us" className="img-fluid mb-3" />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
