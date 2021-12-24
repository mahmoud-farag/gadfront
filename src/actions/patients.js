import axios from "axios";
import { GET_PATIENTS_FAIL,
         GET_PATIENTS_REQUEST, 
         GET_PATIENTS_SUCCESS, 
         GET_PATIENT_FAIL, 
         GET_PATIENT_REQUEST, 
         DELETE_PATIENT_REQUEST,
         DELETE_PATIENT_SUCCESS,
         DELETE_PATIENT_FAIL,
         GET_PATIENT_SUCCESS} from "../constants/patients"


export const getPatientsAction =  (clinik)=> async(dispatch)=>{
 
    dispatch({type:GET_PATIENTS_REQUEST});
    try {
         const {data} = await axios.get('https://gadapi.herokuapp.com/api/v1/patient',{params:{clinik:`${clinik}`}});
         dispatch({type:GET_PATIENTS_SUCCESS , payload:{patients:data.allPatients, totalUnpaied:data.totalUnpaied}})
    } catch (error) {
        console.log(error.message)
        dispatch({type:GET_PATIENTS_FAIL, payload:{...error}});
    }
}

export const getPatientAction =  (id)=> async(dispatch)=>{
 
    dispatch({type:GET_PATIENT_REQUEST});
    try {
        console.log(id)
        const {data} = await axios.get(`https://gadapi.herokuapp.com/api/v1/patient/${id}`);
           console.log(data)
        dispatch({type:GET_PATIENT_SUCCESS , payload:data.patient})
    } catch (error) {
        console.log(error.message)
        dispatch({type:GET_PATIENT_FAIL, payload:{...error}});
    }
}


export const deteletPatientAction = (patientId)=> async(dispatch)=>{
        console.log('inside delete action')
       dispatch({type:DELETE_PATIENT_REQUEST})
    try {
        const {data} = await axios.delete(`https://gadapi.herokuapp.com/api/v1/patient/${patientId}`);
        dispatch({type:DELETE_PATIENT_SUCCESS, payload:data});

    } catch (error) {
        dispatch({type:DELETE_PATIENT_FAIL, payload:error.message});

    }
}


















