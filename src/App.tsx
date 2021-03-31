import { Layout } from "./components/Layout";
import { BudgetProvider } from "./shared";

function App() {
  return (
    <BudgetProvider>
      <Layout />
    </BudgetProvider>
  );
}

export default App;
