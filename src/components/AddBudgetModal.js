import React, { useRef } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useBudgets } from "../context/BudgetContext";

const AddBudgetModal = (props) => {
  const nameRef = useRef();
  const valueRef = useRef();
  const { addBudget } = useBudgets();
  function handleFormSubmit(e) {
    e.preventDefault();
    addBudget({
      name: nameRef.current.value,
      max: parseFloat(valueRef.current.value),
    });
    props.hideModal();
  }
  return (
    <>
      <Modal show={props.showModal} onHide={props.hideModal}>
        <Form onSubmit={handleFormSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>New Budget</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" ref={nameRef} required></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="maxValue">
              <Form.Label>Maximum Amount</Form.Label>
              <Form.Control
                type="number"
                required
                min={0}
                step={0.01}
                ref={valueRef}
              ></Form.Control>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit">
              Add Budget{" "}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default AddBudgetModal;
