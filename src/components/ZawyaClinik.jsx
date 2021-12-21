import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { DeletePatinet } from '.';
import { getPatientsAction } from '../actions/patients';

export default function ZawyaClinik({changeState}) {
 

        const dispatch = useDispatch();
        // const deteletPatient = useSelector(state => state.deteletPatient)
        //  const {toggler} = deteletPatient;
        const getPatients = useSelector(state => state.getPatients);
        const {loading, patients, error, totalUnpaied} = getPatients;
          
    useEffect(()=>{
        dispatch(getPatientsAction('الزاوية'));
   },[dispatch,changeState]);
 
    return (
        <div className='font-mono zawya_clink clinik_container'>
        {loading ?
        (<h1 className=' font-bold text-2xl text-green-800'>Loading......</h1>)
        : error? 
          ( <>  
              <h2 className='mb-6 font-bold text-mono text-2xl text-yellow-600'>عيادة الزاوية</h2>
              <h2 className=' font-bold text-2xl text-red-800' >{error.response.data}</h2>
              <Link className=' mt-5 ' to='/newpatient?clinik=zawya'>
                 <span className="new_patient bg-gray-900  w-100 pr-10 pl-10 pt-2 pb-2 rounded-2xl span">
                   adding new patient
                 </span>
              </Link>  
             </>  )
         :(
          <>
             {/* <div className='search'>    
              search by name, clinik, date, month
             </div> */}
             <h2 className='mb-6 font-bold text-mono text-2xl text-yellow-600'>عيادة الزاوية</h2>
             
                 <Link  to='/newpatient?clinik=zawya'>
                 <span className="new_patient bg-gray-900  w-100 pr-10 pl-10 pt-2 pb-2 rounded-2xl span">
                     adding new patient
                 </span>
                 </Link>
             <ul className='mt-4  zawya_patients patients'>
                 {patients &&(patients.map((patient)=>
                 <li className='p-2 rounded-lg shadow-2xl shadow-blue-300 text-gray-200 mb-3  flex flex-col flex-evenly sm:flex-row  sm:justify-between bg-blue-700'
                     key ={patient._id}>
                     <span className=''>{patient.name}</span>
                     <span>Unpaied:{patient.unPaiedSessions}*{patient.sessionPrice}={patient.unPaiedSessions*patient.sessionPrice} L.E  </span>
                     <div className="btns flex justify-between ">
                        <Link  className='bg-pink-800 rounded-md p-1 hover:text-black hover:bg-green-800' to={patient._id}>Details</Link> 
                        <DeletePatinet  patientId={patient._id} clinik={patient.clinik} changeState={changeState}/>
                        </div>
                 </li>)) }

             </ul>
             <div className='text-lg text-mono'>
                 total_Unpaied_sessions:<span className=' font-semibold text-xl  sm:font-semibold sm:text-2xl'>{totalUnpaied}L.E</span>
             </div>
             
         </>
        )} 
    </div>
    )
}
