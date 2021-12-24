import axios from 'axios';
import React from 'react'
// import {useNavigate } from 'react-router-dom';
// import { deteletPatientAction } from '../actions/patients';
// import { deteletPatientAction } from '../actions/patients';

export default function DeletePatinet({patientId, clinik, changeState}) {

    // let navigate = useNavigate();
      
    const deletePatient =async()=>{
             
            // deteletPatientAction(patientId)
               await axios.delete(`https://gadapi.herokuapp.com/api/v1/patient/${patientId}`);
            //   navigate(clinik==='الزاوية'? '/zawya': '/menof')
            changeState()
       
    }
    return (
        <div className='bg-yellow-700 p-1 ml-2 rounded-md hover:bg-red-600 '>
             <button  className='text-white hover:text-black text-center' onClick ={deletePatient}>delete</button> 
        </div>
    )
}
