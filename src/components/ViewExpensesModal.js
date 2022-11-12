import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useBudgets } from "../context/BudgetContext";

const ViewExpensesModal = (props) => {
  const { budgets, expenses } = useBudgets();
  const getBudgetDetails = budgets.filter(
    (budget) => props.passBudgetId === budget.id
  )[0];

  return (
    <Modal show={props.showExpenseModal} onHide={props.hideExpenseModal}>
      <Modal.Header closeButton>
        <Modal.Title>
          {getBudgetDetails ? getBudgetDetails.name : "Uncategorized"} Expenses
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={() => console.log(getBudgetDetails)}>
          Delete all expenses
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ViewExpensesModal;
