import { applyMiddleware, createStore } from "redux";
import { transactionreducer } from "./Reducer/transactionreducer";
import { logger } from 'redux-logger'

const store = createStore(transactionreducer,applyMiddleware(logger))

export default store