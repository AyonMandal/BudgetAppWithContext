import React from "react";
import { Container, Stack } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import AddBudgetModal from "./components/AddBudgetModal";
import BudgetCard from "./components/BudgetCard";
import { useState } from "react";
import { useBudgets } from "./context/BudgetContext";
import AddExpenseModal from "./components/AddExpenseModal";

const App = () => {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false);
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);
  const { budgets, getBudgetExpenses } = useBudgets();

  function hideAddBudgetModal() {
    setShowAddBudgetModal(false);
  }

  function hideAddExpenseModal() {
    setShowAddExpenseModal(false);
  }
  return (
    <>
      <Container className="my-2">
        <Stack direction="horizontal" gap={2} className="mb-4">
          <h1 className="me-auto">Budgets</h1>
          <Button variant="primary" onClick={() => setShowAddBudgetModal(true)}>
            Add Budget
          </Button>
          <Button
            variant="outline-primary"
            onClick={() => setShowAddExpenseModal(true)}
          >
            Add Expense
          </Button>
        </Stack>
        {budgets.map((budget) => {
          const amount = getBudgetExpenses(budget.id).reduce(
            (total, expense) => total + expense.amount,
            0
          );
          return (
            <BudgetCard
              key={budget.id}
              name={budget.name}
              amount={amount}
              maxAmount={budget.max}
              bgGray={true}
            />
          );
        })}
      </Container>
      <AddBudgetModal
        showModal={showAddBudgetModal}
        hideModal={hideAddBudgetModal}
      />
      <AddExpenseModal
        showModal={showAddExpenseModal}
        hideModal={hideAddExpenseModal}
      />
    </>
  );
};

export default App;
