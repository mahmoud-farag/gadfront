import { GET_PATIENTS_FAIL, 
    GET_PATIENTS_REQUEST,
    GET_PATIENT_REQUEST,
    GET_PATIENT_FAIL,
    GET_PATIENT_SUCCESS,
    DELETE_PATIENT_REQUEST,
    DELETE_PATIENT_SUCCESS,
    DELETE_PATIENT_FAIL,
     GET_PATIENTS_SUCCESS } from "../constants/patients"


export const getPatients = (state={loading:true, patients:[]}, action)=>{
    switch(action.type){

        case GET_PATIENTS_REQUEST :
             return {loading: true, patients:[]}
        case GET_PATIENTS_SUCCESS :
             return {loading: false, patients: action.payload.patients, totalUnpaied:action.payload.totalUnpaied}
        case GET_PATIENTS_FAIL :
             return {loading: false, error: action.payload}

        default: return state
    }
}


export const getPatient = (state={loading:true, patient:{}}, action)=>{

//     console.log(action.payload )
        switch(action.type){
    
            case GET_PATIENT_REQUEST:
                 return {loading: true}
            case GET_PATIENT_SUCCESS :
                 return {loading: false, patient: action.payload}
            case GET_PATIENT_FAIL :
                 return {loading: false, error: action.payload}
    
            default: return state
        }
    }

export const deteletPatient = (state={toggler:false}, action)=>{
     //    let changeState = !state.toggler
     switch(action.type){
          case  DELETE_PATIENT_REQUEST:
               return {toggler:false}
          case  DELETE_PATIENT_SUCCESS :
               return {toggler:!state.toggler, deletedPatient: action.payload}
          case  DELETE_PATIENT_FAIL :
               return {toggler: false, error: action.payload}
          default :
               return state
     }
}













