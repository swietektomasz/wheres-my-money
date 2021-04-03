import { createContext, Dispatch, ReactNode, useContext, useReducer } from "react";

const BudgetContext = createContext<Partial<BudgetContextType>>({});

type BudgetContextType = {
  state: BudgetState;
  dispatch: Dispatch<Action>;
};

type BudgetState = {
  revenue: RevenueItem[];
};

type Action = { type: "add-to-revenue"; item: RevenueItem } | { type: "decrease-budget"; amount: number };

type RevenueItem = {
  amount: number;
  title: string;
  gain: boolean;
};

interface BudgetProviderProps {
  children: ReactNode;
}

function BudgetReducer(state: BudgetState, action: Action) {
  switch (action.type) {
    case "add-to-revenue": {
      return { ...state, revenue: [...state.revenue, action.item] };
    }
    default:
      throw new Error();
  }
}

const initialState: BudgetState = {
  revenue: [],
};

function BudgetProvider({ children }: BudgetProviderProps) {
  const [state, dispatch] = useReducer(BudgetReducer, initialState);

  return <BudgetContext.Provider value={{ state, dispatch }}>{children}</BudgetContext.Provider>;
}

function useBudget() {
  const context = useContext(BudgetContext);
  if (!context) throw new Error("BudgetContext must be used within a Provider");
  return context;
}

export { BudgetProvider, useBudget };
