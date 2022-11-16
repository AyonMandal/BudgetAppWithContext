// 1. We wwrite a function named useBudgets which will be exported and contains the Context Export.
// 2. Then we create the Provider which will act as the wrapper.
// 3. Then we create a context for the app
// 4. Then we wrap the provider with the proper context along with the default values.
// 5. Budget Struct : {id, name, max}
// 6. Expense Struct : {id, budgetId, amount, description}
// -----------------------------------------------------------------------------------

import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { useLocalStorageHook } from "../customHooks/localStorageHook";
const BudgetsContext = React.createContext();

export const useBudgets = () => {
  return useContext(BudgetsContext);
};

export const BudgetsProvider = ({ children }) => {
  const [budgets, setBudgets] = useLocalStorageHook("budgets", []);
  const [expenses, setExpenses] = useLocalStorageHook("expenses", []);

  const getBudgetExpenses = (budgetId) => {
    return expenses.filter((expense) => expense.budgetId === budgetId);
  };

  const addExpense = ({ budgetId, amount, description }) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, { id: uuidv4(), budgetId, amount, description }];
    });
  };

  const addBudget = ({ name, max }) => {
    setBudgets((prevBudgets) => {
      if (prevBudgets.find((budget) => budget.name === name)) {
        return prevBudgets;
      }
      return [...prevBudgets, { id: uuidv4(), name, max }];
    });
  };

  const deleteBudget = (id) => {
    setBudgets((prevBudgets) => {
      return prevBudgets.filter((budget) => budget.id !== id);
    });
  };

  const deleteExpense = (id) => {
    setExpenses((prevExpenses) => {
      return prevExpenses.filter((expense) => expense.id !== id);
    });
  };

  const deleteAllExpenses = (id) => {
    setExpenses((prevExpenses) => {
      return prevExpenses.filter((expense) => expense.budgetId !== id);
    });
  };

  return (
    <BudgetsContext.Provider
      value={{
        budgets,
        expenses,
        getBudgetExpenses,
        addExpense,
        addBudget,
        deleteBudget,
        deleteExpense,
        deleteAllExpenses,
      }}
    >
      {children}
    </BudgetsContext.Provider>
  );
};
