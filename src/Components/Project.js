import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Project(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.cover} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Project;
