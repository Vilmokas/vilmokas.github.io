import Project from "./Components/Project";
import img01 from "./Assets/Images/pic01.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Assets/Styles/App.css";
import ProgressBar from "react-bootstrap/ProgressBar";

function App() {
  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col>
          <h1>Working on a new, straitforward portfolio...</h1>
        </Col>
      </Row>
      <Row>
        <Col></Col>
        <Col xs="8" lg="4">
          <h3>Estimated progress: </h3> <br />
          <ProgressBar now="10" label="10%" />
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default App;
