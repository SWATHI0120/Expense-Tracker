



    import React from 'react';

const Transaction = (props) => {
   const  { transactions = [] , onDelete } = props;
    return (
        <div className="transaction-list">
            <h3>History</h3>
            <ul id="list" className="list">
                {transactions.map((eachTransaction) => {
                    return (
                        <li
                            key={eachTransaction.id}
                            className={eachTransaction.amount < 0 ? "minus" : "plus"}
                            
                        >
                            <span>{eachTransaction.title}</span>
                            <span>₹{eachTransaction.amount}</span>
                            <button
                            className="delete-btn"
                            onClick= { () => onDelete(eachTransaction.id)}>X</button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Transaction;
    