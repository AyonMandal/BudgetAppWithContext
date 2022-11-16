import React from "react";
import { Modal, Button, Stack, CloseButton } from "react-bootstrap";
import { useBudgets } from "../context/BudgetContext";
import { currencyFormatter } from "../utils/CurrencyFormatter";

const ViewExpensesModal = (props) => {
  const { budgets, getBudgetExpenses, deleteExpense, deleteAllExpenses } =
    useBudgets();
  const expensesList = getBudgetExpenses(props.passBudgetId);
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
      {expensesList.length === 0 ? (
        " "
      ) : (
        <>
          <Modal.Body>
            <Stack direction="vertical" gap={3}>
              {expensesList.map((expense) => (
                <>
                  <Stack direction="horizontal" gap={2} key={expense.id}>
                    <div className="me-auto fs-6">{expense.description}</div>
                    <div className="fs-5">
                      {" "}
                      {currencyFormatter.format(expense.amount)}
                    </div>
                    <Button
                      onClick={() => deleteExpense(expense.id)}
                      size="sm"
                      variant="outline-danger"
                    >
                      &times;
                    </Button>
                  </Stack>
                </>
              ))}
            </Stack>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="danger"
              onClick={() => deleteAllExpenses(props.passBudgetId)}
            >
              Delete all expenses
            </Button>
          </Modal.Footer>
        </>
      )}
    </Modal>
  );
};

export default ViewExpensesModal;
