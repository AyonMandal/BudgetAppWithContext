import React, { useRef } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useBudgets } from "../context/BudgetContext";

const AddExpenseModal = (props) => {
  const descriptionRef = useRef();
  const amountRef = useRef();
  const budgetIdRef = useRef();

  const { addExpense, budgets } = useBudgets();

  function handleFormSubmit(e) {
    e.preventDefault();
    addExpense({
      budgetId: budgetIdRef.current.value,
      description: descriptionRef.current.value,
      amount: parseFloat(amountRef.current.value),
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
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                ref={descriptionRef}
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="amountValue">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="number"
                required
                min={0}
                step={0.01}
                ref={amountRef}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="budgetID">
              <Form.Label>Budget Category</Form.Label>
              <Form.Select
                ref={budgetIdRef}
                defaultValue={props.defaultBudgetId}
              >
                <option
                  id="UNCATEGORIZED_EXPENSE"
                  value="UNCATEGORIZED_EXPENSE"
                >
                  Uncategorized
                </option>
                {budgets.map((budget) => (
                  <option value={budget.id} key={budget.id}>
                    {budget.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit">
              Add Expense{" "}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default AddExpenseModal;
