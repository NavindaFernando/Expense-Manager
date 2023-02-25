import React, {useState} from "react"

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DAMMY_DATA = [
  {id: 'i001', title: "Car Insuarance", amount: "985", date: new Date(2022, 7, 14) },
    {id: 'i002', title: "Type", amount: "435", date: new Date(2022, 6, 3) },
    {id: 'i003', title: "vahicle", amount: "4554", date: new Date(2022, 7, 5) }
]

const App = () => {
  
  const [expenses, setExpenses] = useState(DAMMY_DATA)

  const addExpenseHandler = (expense) => {
//    setExpenses([expense, ...expenses])
  
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
}

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
      </div>
  );
}

export default App;
