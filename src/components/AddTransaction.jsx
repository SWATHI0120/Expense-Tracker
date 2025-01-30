import { useState } from "react"

const AddTransaction=(props)=>{
    const{onAdd}=props;

    const[title,setTitle]=useState("");
    const[amount,setamount]=useState("");
    const onTitlechange=(event)=>{
        setTitle(event.target.value);
    };

    //const[amount,setamount]=useState("");
    const onamountchange=(event)=>{
        setamount(event.target.value);
    };

    const onsubmit=(event)=>{
        event.preventDefault();
        console.log({title,amount:+amount});
        onAdd({title,amount:+amount});
    }

    return (
        <form onSubmit={onsubmit}>
            <h3>Add New</h3>
        <div className="formcontrol">
            <label htmlFor="title"> Title</label>
            <input type="text" name="title"id="title" value={title} onChange={onTitlechange}
             placeholder="Enter Title...."
            ></input>
            </div>
            <div className="formcontrol">
            <label htmlFor="amount">Amount</label>
            <input type="text" name="amount" id="amount" placeholder="Enter Amount..." value={amount} onChange={onamountchange} ></input>
            </div>
            <div className="formcontrol">
            <button type="submit" className="btn">Add Transaction</button>
            </div>
        </form>

  
    )
}

export default AddTransaction;