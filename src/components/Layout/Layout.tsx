import { Expenses } from "../Expenses";

import "./Layout.css";

export function Layout() {
  return (
    <div className="layout">
      <div className="layout-expenses">
        <Expenses />
      </div>
      <div className="layout-sidebar">Sidebar</div>
    </div>
  );
}
