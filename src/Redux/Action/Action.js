import { ADD_TRANSACTION, DELETE_TRANSACTION } from "./Actiontype"

export const deletetransaction = (id) => {
    return{
        type:DELETE_TRANSACTION,
        payload:id
    }
}

export const AddTransaction = (transaction) => {
    return{
        type:ADD_TRANSACTION,
        payload:transaction
    }
}