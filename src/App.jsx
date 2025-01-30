import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTransaction from './components/Addtransaction';
import Transaction from './components/Transaction';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';

function App() {
  const [transactions,setTransaction]=useState([]);
    // {id:1,title:"food",amount:-15000},
    // {id:2,title:"salary",amount:355000},
    // {id:3,title:"snacks",amount:-1000},
    // {id:4,title:"dress",amount:-10000},
    // {id:5,title:"tution",amount:15000},

useEffect(()=>{
fetch("http://localhost:8000/api/expenses")
.then(res=>res.json())
.then(data=>setTransaction(data.data))
},[])



const onAddTransaction=(data)=>{
  const modifyData={...data,id:Math.random() * 10000 };
  setTransaction([...transactions,modifyData]);
};

const onDeleteTransaction=(id)=>{
  const modifiedList=transactions.filter((eachTransaction)=>eachTransaction.id!==id);
 // setTransaction(transactions.filter((transaction) => transaction.id !== id));

setTransaction(modifiedList);
};
  return(
    <>
    <h1>Expense Tracker</h1>
    <div className='container'>
    
 <Balance transactions={transactions}/>
 <IncomeExpense transactions={transactions}/>
  <Transaction transactions={transactions} onDelete={onDeleteTransaction} />
  <AddTransaction onAdd={onAddTransaction}/>
  
   </div>
   </>
  );

}

export default App;


