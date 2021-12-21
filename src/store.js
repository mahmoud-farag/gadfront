import {applyMiddleware, compose, createStore, combineReducers} from 'redux';
import thunk  from 'redux-thunk';

import {deletePatientReducer} from './reducers/deletePatientReducer.js';
import {getPatients, getPatient,deteletPatient} from './reducers/patients.js';




const reducers= combineReducers ({
    getPatients,
    getPatient,
    deteletPatient,
    deletePatientReducer})


const initialState = {
    getPatients,
}





const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const  store = createStore(
    reducers, 
    initialState,
    composeEnhancer(applyMiddleware(thunk)) );

export { store};


























