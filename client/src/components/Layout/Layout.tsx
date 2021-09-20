import { Expenses } from "../Expenses";

export function Layout() {
  return (
    <div className="h-screen w-screen">
      <div className="flex flex-row">
        <div className="w-4/5">
          <Expenses />
        </div>
        <div className="w-1/5">Sidebar</div>
      </div>
    </div>
  );
}
