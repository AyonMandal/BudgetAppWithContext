import React from "react";
import { Container, Stack } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import BudgetCard from "./components/BudgetCard";

const App = () => {
  return (
    <Container className="my-2">
      <Stack direction="horizontal" gap={2} className="mb-4">
        <h1 className="me-auto">Budgets</h1>
        <Button variant="primary">Add Budget</Button>
        <Button variant="outline-primary">Add Expense</Button>
      </Stack>
      <BudgetCard
        name="Entertainment"
        amount={1750}
        maxAmount={2400}
        bgGray={true}
      />
    </Container>
  );
};

export default App;
