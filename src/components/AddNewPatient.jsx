import axios from 'axios';
import React, { useState } from 'react'
import { useLocation } from 'react-router';
import {useNavigate } from 'react-router-dom';

export default function AddNewPatient(props) {

    let navigate = useNavigate();
    const { search } = useLocation();


    const [name, setName] = useState('')
    const [clinik, setClinik] = useState(search.split('=')[1] === 'menof'? 'منوف':'الزاوية')
 
    const [totalSessions, setTotalSessions] = useState(0)
    const [paiedSessions, setPaiedSessions] = useState(0)
    const [unPaiedSessions, setUnPaiedSessions] = useState(0)
    const [sessionPrice, setSessionPrice] = useState(0)

    // console.log(search.split('=')[1])

    const onSubmmitFormHandler =async (event)=>{
        event.preventDefault();
         let newPatient =  {name, clinik,totalSessions, paiedSessions,unPaiedSessions,sessionPrice}
            try {
                // console.log(newPatient)
                     await axios.post(`/api/v1/patient`, newPatient); 
                    // console.log(data)
            } catch (error) {
                console.log(error.message);
            }
         navigate(`/${search.split('=')[1]}`);
    }
    return (
        <div className=' bg-gray-100 flex justify-center items-center '>
          <form className='form mt-9 shadow-lg w-80 p-2 mb-4' onSubmit={onSubmmitFormHandler}> 
                <h2 className='ml-4 text-xl font-bold ' >Add new Patient</h2>
                {/* <div>
                  {error && (<MessageBox variant="danger">{error}</MessageBox>)}
                  {loading && ( <LoadingBox></LoadingBox>)}
                </div> */}
                <div>
                    <label className='lock text-gray-700 text-sm font-bold mb-2' htmlFor="name">Name</label>
                    <input 
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                     type='text'
                     id='name'
                    //  value={name}
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
                     value={search.split('=')[1] === 'menof'? 'منوف':'الزاوية'}
                      placeholder='Clinik'
                      required
                      onChange={e=>setClinik(e.target.value)}
                    />
                </div>
                {/* <div>
                    <label className='lock text-gray-700 text-sm font-bold mb-2' htmlFor="month">Month</label>
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
                    // value={totalSessions}
                    placeholder="total Sessions"
                    required
                    onChange={e=>setTotalSessions(e.target.value)}
                    />
                </div>

                <div>
                    <label className='lock text-gray-700 text-sm font-bold mb-2' htmlFor="paiedSessions">Paied Sessions</label>
                    <input 
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    type='number'
                    id='paiedSessions'
                    // value={paiedSessions}
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
                    // value={unPaiedSessions}
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
                    // value={sessionPrice}
                    placeholder="session Price"
                    required
                    onChange={e=>setSessionPrice(e.target.value)}
                    />
                </div>

                <div>
                    <label className='lock text-gray-700 text-sm font-bold mb-2' htmlFor=''></label>
                    <button className="btn-block mt-5 w-full bg-gray-900 rounded-lg p-2 text-white" type="submit">Adding New Patient</button>
                </div>
                
            </form>        
        </div>
    )
}
