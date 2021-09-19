import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletetransaction } from '../Redux'
import './History.css'

function History() {
    const [transaction,setTransaction] = useState([])
    const data = useSelector(state=>state.transaction)
    const dispatch = useDispatch()
    useEffect(()=>{
        setTransaction(data)
    },[data])
    console.log(transaction)

    return (
        <div>
            <div className="history_container">
                <div className="history_subcontainer">
                    <h3>History</h3>
                </div>

                {
                    transaction.map((data)=>{
                        return(                          
                                <div className={data.amount<0?'data_container_minus':'data_container_plus'}>
                                    <div>
                                        <button className="history_button" onClick={()=>dispatch(deletetransaction(data.id))}>x</button>
                                    </div>
                                    
                                    <div className="data_container_1">
                                        {data.text}                
                                    </div>

                                    <div className="data_container_2">
                                        {
                                            data.amount>0?(`+₹${Math.abs(data.amount)}`):(`-₹${Math.abs(data.amount)}`)
                                        }
                                    </div>
                                </div>
                        )
                    })
                }    
                
            </div>
        </div>
    )
}

export default History
