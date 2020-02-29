import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input
} from "reactstrap";

const ModalExemple = props => {
  const onChangeTitle = event => {
    props.setTitle(event.target.value);
  };
  const onChangeYear = event => {
    props.setYear(event.target.value);
  };
  const onChangeDescription = event => {
    props.setDescription(event.target.value);
  };
  const onChangeImage = event => {
    props.setImage(event.target.value);
  };
  const onChangeRating = event => {
    props.setRating(event.target.value);
  };

  return (
    <div>
      <Modal isOpen={props.modal} toggle={props.toggle}>
        <ModalHeader toggle={props.toggle}>Add Movie</ModalHeader>
        <ModalBody className="modal-body">
          <Input
            type="text"
            placeholder="Title"
            name="title"
            onChange={onChangeTitle}
          />
          <Input
            type="text"
            placeholder="Year"
            name="year"
            onChange={onChangeYear}
          />
          <Input
            type="text"
            placeholder="Description"
            image="description"
            onChange={onChangeDescription}
          />
          <Input
            type="text"
            placeholder="image"
            name="image"
            onChange={onChangeImage}
          />
          <Input
            type="number"
            placeholder="rating max 5"
            name="rating"
            onChange={onChangeRating}
          />
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              props.onAddMovie();
              props.toggle();
            }}
          >
            Save
          </Button>{" "}
          <Button color="secondary" onClick={props.toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalExemple;
