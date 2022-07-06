import ExpenseItem from "../../components/ExpenseItem";
import { expenses } from "./data";

function index() {
  return (
    <div className="App">
      <h2>Let's get started!</h2>
      {expenses.map((expense, i) => (
        <ExpenseItem key={`expense-crad-${i}`} {...expense} />
      ))}
    </div>
  );
}

export default index;
