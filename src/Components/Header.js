import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { transactionaction } from '../Redux'
import AddNewTransaction from './AddNewTransaction'
import Balance from './Balance'
import './Header.css'
import History from './History'
import Income_expenses from './Income_expenses'

function Header() {
    return (
        <div>
            <div className="container">
                <h2 style={{fontWeight:"bold",textTransform:"uppercase"}}>Expense Tracer</h2>
            </div>
            <div>
                <Balance/>
                <Income_expenses/>
                <History/>
                <AddNewTransaction/>
            </div>
        </div>
    )
}

export default Header
