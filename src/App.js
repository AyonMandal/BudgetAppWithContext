import React from "react";
import { Container, Stack } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import AddBudgetModal from "./components/AddBudgetModal";
import BudgetCard from "./components/BudgetCard";
import { useState } from "react";

const App = () => {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false);
  function hideAddBudgetModal() {
    setShowAddBudgetModal(false);
  }
  return (
    <>
      <Container className="my-2">
        <Stack direction="horizontal" gap={2} className="mb-4">
          <h1 className="me-auto">Budgets</h1>
          <Button variant="primary" onClick={() => setShowAddBudgetModal(true)}>
            Add Budget
          </Button>
          <Button variant="outline-primary">Add Expense</Button>
        </Stack>
        <BudgetCard
          name="Entertainment"
          amount={1750}
          maxAmount={2400}
          bgGray={true}
        />
      </Container>
      <AddBudgetModal
        showModal={showAddBudgetModal}
        hideModal={hideAddBudgetModal}
      />
    </>
  );
};

export default App;
