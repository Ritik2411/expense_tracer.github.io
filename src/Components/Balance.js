import React from 'react'
import { useSelector } from 'react-redux'
import './Balance.css'
 
function Balance() {  
    const data = useSelector(state => state.transaction)
    const amount = data.map(item=>item.amount);
    const total = amount.reduce((acc,item)=>(acc+=item),0).toFixed(2);
    
    return (
        <div className="container_bal">
            <div className="balance_container">
                <h3>Your Balance</h3>
                <h2>₹{total}</h2>
            </div>
        </div>
    )
}
 
export default Balance
