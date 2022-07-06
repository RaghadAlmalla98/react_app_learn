import "./ExpenseItem.css";
function ExpenseItem({title , amount , date}) {
    const expenseDate = new Date(2022, 2,28);
    const expenseTitle ='Car Insurance';
    const expenseAmount =294.67;


    return (
    <div className="expense-item">
      <div>{date.toISOString()}</div>
      <h2>{title}</h2>
      <div className="expense-item__description">
        <div className="expense-item__price">
            ${amount}
        </div>
      </div>
    </div>
  );
}
export default ExpenseItem;
