import {useState } from 'react';

const Addtransaction  = (props) => {
    const { onAdd } = props;

    const [title, setTitle] = useState("");
    const [amount , setAmount] = useState("");

    const onTitleChange = (event) => {
        setTitle(event.target.value);
    };
    
    const onAmountChange = (event) => {
            setAmount(event.target.value);
        
    };
    const onSubmit = (event) => {
        event.preventDefault();
        console.log({title, amount: +amount} );
        onAdd( {title, amount: +amount});

        setTitle("");
        setAmount("");
    }

    return (
       <div className="add-transaction">
        <h3> Add New</h3>
        <form onSubmit={onSubmit}>
        <div className="add-tansaction">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" placeholder="Enter title..." value={title}  onChange={onTitleChange}></input>
        </div>
        <div className="add-tansaction">
        <label htmlFor="amount">Amount</label>
        <input type="number" name="amount" id="amount" placeholder="Enter amount..." value={amount} onChange={onAmountChange}></input>
        </div>
        <div>
            <button className="btn" type="submit">Add Transaction</button>
        </div>
        </form>
       </div>

    );
}



export default Addtransaction;