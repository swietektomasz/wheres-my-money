import { createContext, Dispatch, ReactNode, useContext, useReducer } from "react";

const BudgetContext = createContext<Partial<BudgetContextType>>({});

type BudgetContextType = {
  state: BudgetState;
  dispatch: Dispatch<Action>;
};

type BudgetState = {
  budget: number;
};

type Action = { type: "increase-budget"; amount: number } | { type: "decrease-budget"; amount: number };

interface BudgetProviderProps {
  children: ReactNode;
}

function BudgetReducer(state: BudgetState, action: Action) {
  switch (action.type) {
    case "increase-budget": {
      return { ...state, budget: state.budget + action.amount };
    }
    case "decrease-budget": {
      return { ...state, budget: state.budget - action.amount };
    }
  }
}

function BudgetProvider({ children }: BudgetProviderProps) {
  const [state, dispatch] = useReducer(BudgetReducer, { budget: 0 });

  return <BudgetContext.Provider value={{ state, dispatch }}>{children}</BudgetContext.Provider>;
}

function useBudget() {
  const context = useContext(BudgetContext);
  if (!context) throw new Error("BudgetContext must be used within a Provider");
  return context;
}

export { BudgetProvider, useBudget };
