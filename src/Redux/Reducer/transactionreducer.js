import { ADD_TRANSACTION, DELETE_TRANSACTION } from "../Action/Actiontype"

const initialState = {
    transaction:[
            {id: 1, text: 'Flower', amount: -20},
            {id: 2, text: 'Salary', amount: 500},
            {id: 3, text: 'Book', amount: -10},
            {id: 4, text: 'Camera', amount: -150},   
    ]
}

export const transactionreducer = (state = initialState,action) =>{
    switch(action.type){
        case DELETE_TRANSACTION:return{
            ...state,
            transaction:state.transaction.filter(transaction => transaction.id !== action.payload)
        }

        case ADD_TRANSACTION:return{
            ...state,
            transaction:[action.payload,...state.transaction]
        }

        default:{
            return state
        }
    }
}