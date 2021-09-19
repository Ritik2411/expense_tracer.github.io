import React from 'react'
import { useSelector } from 'react-redux'
import './income_expenses.css'

function Income_expenses() {
    const data = useSelector(state=>state.transaction)
    const amount = data.map(data=>data.amount)
    const income = amount.filter(item=>item>0).reduce((acc,item)=>(acc = acc + item),0).toFixed(2)
    const expense = (amount.filter(item=>item<0).reduce((acc,item)=>(acc = acc + item),0)*-1).toFixed(2)
    
    return (
        <div className="incomeexp">
            <div className="income_container">
                <div className="incomeexp_container_1">
                    <h4>Income</h4>
                    <p>₹{income}</p>
                </div>

                <div className="incomeexp_container_2">
                    <h4>Expense</h4>
                    <p>₹{expense}</p>
                </div>
            </div>
        </div>
    )
}

export default Income_expenses
