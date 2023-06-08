import React, { useState } from "react";
import { Modal, Button, Col, Form, Row } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";

const Add = ({ show, handleClose, addMovie }) => {
  const [newMovie, setNewMovie] = useState({
    title: "",
    main_img: "",
    rate: 1,
    date: "",
    description: "",
    genre: "",
    duration: "",
  });
  const [rating, setRating] = useState(1);
  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };
  const onStarClick = (nextValue, prevValue, name) => {
    setRating(nextValue);
    setNewMovie({ ...newMovie, rate: nextValue });
  };
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Title"
                  onChange={handleChange}
                  name="title"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Image url"
                  onChange={handleChange}
                  name="main_img"
                />
              </Form.Group>
            </Row>
            <StarRatingComponent
              name="rate"
              starCount={5}
              value={rating}
              onStarClick={onStarClick}
              onChange={handleChange}
            />

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={handleChange}
                name="description"
              />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Duration</Form.Label>
                <Form.Control onChange={handleChange} name="duration" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Date</Form.Label>
                <Form.Control onChange={handleChange} name="date" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Genre</Form.Label>
                <Form.Control
                  as="select"
                  defaultValue="Choose Genre"
                  onChange={handleChange}
                  name="genre"
                >
                  <option>Action</option>
                  <option>Thriller</option>
                  <option>Romance</option>
                </Form.Control>
              </Form.Group>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              addMovie(newMovie);
              handleClose();
            }}
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Add;
