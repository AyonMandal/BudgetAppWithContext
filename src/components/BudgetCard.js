import Button from "react-bootstrap/Button";
import React from "react";
import { Card, ProgressBar, Stack } from "react-bootstrap";
import { currencyFormatter } from "../utils/CurrencyFormatter";

const BudgetCard = (props) => {
  const classNames = ["mb-3"];
  if (props.amount > props.maxAmount) {
    classNames.push("bg-danger", "bg-opacity-10");
  } else if (props.bgGray) {
    classNames.push("bg-light");
  }
  return (
    <Card className={classNames.join(" ")}>
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
          <div className="me-2">{props.name}</div>
          <div className="d-flex align-items-baseline">
            {currencyFormatter.format(props.amount)}{" "}
            {props.maxAmount && (
              <>
                {"/"}
                <span className="text-muted fs-6">
                  &nbsp;{currencyFormatter.format(props.maxAmount)}
                </span>
              </>
            )}
          </div>
        </Card.Title>
        {props.maxAmount && (
          <ProgressBar
            className="rounded-pill"
            variant={getProgressBarVariant(props.amount, props.maxAmount)}
            min={0}
            max={props.maxAmount}
            now={props.amount}
            label={`${getLabelPercentageValue(props.amount, props.maxAmount)}%`}
          />
        )}
        {!props.hideButtonsFromCard && (
          <Stack direction="horizontal" gap={2} className="mt-4">
            <Button
              variant="outline-primary"
              className="ms-auto"
              onClick={() => props.budgetIdToPass(props.id)}
            >
              Add Expense
            </Button>
            <Button variant="outline-secondary">View Expenses</Button>
          </Stack>
        )}
      </Card.Body>
    </Card>
  );
};

function getProgressBarVariant(amount, maxAmount) {
  const ratio = amount / maxAmount;
  if (ratio <= 0.25) return "success";
  if (ratio <= 0.5) return "info";
  if (ratio <= 0.75) return "warning";
  return "danger";
}

function getLabelPercentageValue(amount, maxAmount) {
  return Math.round((amount / maxAmount) * 100);
}
export default BudgetCard;
