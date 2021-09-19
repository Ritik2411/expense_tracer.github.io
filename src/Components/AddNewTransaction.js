import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddTransaction } from '../Redux'
import './AddNewTransaction.css'

function AddNewTransaction() {
    const [item,setItem] = useState('')
    const [amount,setamount] = useState(0)
    const dispatch = useDispatch()

    const transaction_amount = () => {

        if(item === '' || amount === ''){
            alert("Item or Amount cannot be empty")
        }

        else{
            console.log("Item Name:",item,"Transaction Amount:",amount)
            const newTransaction = {
                id: Math.floor(Math.random()*1000),
                text:item,
                amount:parseInt(amount)
            }
            dispatch(AddTransaction(newTransaction))
        }
    }
    return (
        <div>
            <div className="transaction_container">
                <div className="transaction_text">
                    <h3>Add New Transaction</h3>
                    <hr/>
                    <p>Item Name</p>
                    <input type="text" placeholder="Enter Item Name" onChange={e=>setItem(e.target.value)}/>
                </div>

                <div className="amount_container">
                    <p>Amount<br/>(negative-expense,positive-income)</p>
                    <input type='number' value={amount} onChange={e=>setamount(e.target.value)}/>
                </div>

                <div className="transaction_button">
                    <button className="button" onClick={transaction_amount}>Add Transaction</button>
                </div>
            </div>
        </div>
    )
}

export default AddNewTransaction
