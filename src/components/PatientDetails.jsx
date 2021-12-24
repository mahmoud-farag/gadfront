import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams ,useNavigate} from 'react-router-dom';
// import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getPatientAction} from '../actions/patients';

export default function PatientDetails(props) {
    let { id } = useParams();
    // const { search } = useLocation();
    let navigate = useNavigate();
    const dispatch= useDispatch();

       const getPatient = useSelector(state => state.getPatient)
       const {loading, patient, error} = getPatient;
    //    let loading=false, error={};
    // const [patient, setPatient] = useState({});
    const [name, setName] = useState('patient Name ')
    const [clinik, setClinik] = useState('clinik')
    const [totalSessions, setTotalSessions] = useState(0)
    const [paiedSessions, setPaiedSessions] = useState(0)
    const [unPaiedSessions, setUnPaiedSessions] = useState(0)
    const [sessionPrice, setSessionPrice] = useState(0)
       
// const fetchData = async ()=>{
//     // const  {data} = await axios.get(`/api/v1/patient/${id}`,{params:{clinik:"منوف"}})
//     //     setPatient(data.patient)
//     //     console.log(data);
//         console.log(id)
//    dispatch(getPatientAction(id));
// }
    useEffect(()=>{
     
        dispatch(getPatientAction(id));
   },[dispatch, id])

   useEffect(()=>{
     
    if(patient){
        setName(patient.name)
        setClinik(patient.clinik)
    
        setTotalSessions(patient.totalSessions)
        setPaiedSessions(patient.paiedSessions)
        setUnPaiedSessions(patient.unPaiedSessions)
        setSessionPrice(patient.sessionPrice)
    }         

},[patient])

   const onSubmmitFormHandler =async (event)=>{
       event.preventDefault();
      const updatedPatient = { name,clinik,totalSessions,paiedSessions,unPaiedSessions,sessionPrice  }

      try {
         await axios.patch(`https://gadapi.herokuapp.com/api/v1/patient/${patient._id}`, updatedPatient);
        // console.log(patient) 
        navigate(`/${patient.clinik ==='منوف'? 'menof': 'zawya'}`);
      } catch (error) {
          console.log(error.message);
      }
  }
   
    return (
        <div className='patient_details_container bg-gray-100 flex justify-center items-center '>
           {loading?(<h1 className=' font-bold text-2xl text-green-800'>Loading......</h1>)
            :

             error? (<h2>{error.response.data}</h2>) :
              patient&& (
                <form className='form p-2 mt-9 shadow-lg w-80 mb-5 '  method ='patch' onSubmit={onSubmmitFormHandler}> 
                    <h2 className=' text-xl font-bold ' >update current Patient  record</h2>
                    <div>
                        <label className='lock text-gray-700 text-sm font-bold mb-2' htmlFor="name">Name</label>
                        <input
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            type='text'
                            id='name'
                            value={name}
                            placeholder='Patient name'
                            required
                            onChange={e=>setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className='lock text-gray-700 text-sm font-bold mb-2' htmlFor="clinik">Clinik</label>
                        <input
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            type='text'
                            id='clinik'
                            value={clinik}
                            placeholder='Clinik'
                            required
                            onChange={e=>setClinik(e.target.value)}
                        />
                    </div>
                    {/* <div>
                        <label className='lock text-gray-700 text-sm font-bold mb-2'  htmlFor="month">Month</label>
                        <input
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                            type='number'
                            id='month'
                            value={month}
                            placeholder="month"
                            required
                            onChange={e=>setMonth(e.target.value)}
                        />
                    </div> */}
                    {/* <div>
                        <label className='lock text-gray-700 text-sm font-bold mb-2' htmlFor="year">Year</label>
                        <input 
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            type='number'
                            id='year'
                            value={year}
                            placeholder="Year"
                            required
                            onChange={e=>setYear(e.target.value)}
                        />
                    </div> */}
                    <div>
                        <label className='lock text-gray-700 text-sm font-bold mb-2' htmlFor="totalSessions">total Sessions</label>
                        <input 
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                            type='number'
                            id='totalSessions'
                            value={totalSessions}
                            placeholder="total Sessions"
                            required
                            onChange={e=>setTotalSessions(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className='lock text-gray-700 text-sm font-bold mb-2'  htmlFor="paiedSessions">Paied Sessions</label>
                        <input
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                            type='number'
                            id='paiedSessions'
                            value={paiedSessions}
                            placeholder="paied Sessions"
                            required
                            onChange={e=>setPaiedSessions(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className='lock text-gray-700 text-sm font-bold mb-2' htmlFor="unPaiedSessions">UnPaied Sessions</label>
                        <input
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                            type='number'
                            id='unPaiedSessions'
                            value={unPaiedSessions}
                            placeholder="UnPaied Sessions"
                            required
                            onChange={e=>setUnPaiedSessions(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className='lock text-gray-700 text-sm font-bold mb-2' htmlFor="sessionPrice">session Price</label>
                        <input
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                            type='number'
                            id='sessionPrice'
                            value={sessionPrice}
                            placeholder="session Price"
                            required
                            onChange={e=>setSessionPrice(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className='lock text-gray-700 text-sm font-bold mb-2' htmlFor=''></label>
                        <button className="btn-block mt-5 w-full bg-gray-900 rounded-lg p-2 text-white" type="submit" >Update this patient record</button>
                    </div>
                    
            </form>
           )}
        </div>
    )
}
