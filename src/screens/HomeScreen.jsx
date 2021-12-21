import React from 'react'
import { Link } from 'react-router-dom';
// import { ZawyaClinik, MenofClinik } from '../components';

export default function HomeScreen() {
    return (
        <div className='bg-gray-100	'>
            <div className="cliniks__container   w-auto  pb-4  flex flex-col  justify-evenly items-center sm:flex-row ms:justify-between ">

            <div className='MenofClinik card rounded-3xl   overflow-hidden h-85  w-60  m-2 shadow-md  hover:shadow-lg  flex flex-col justify-between flex-wrap '>
                 <div className='overflow-hidden'>
                    <img className='w-60 h-60' src='./imgs/pic1.jpg' alt='pcs1'></img>
                    <p className='mt-1 pr-2 mb-2 text-right'>عيادة منوف وما يخص الجلسات ماديا, الغير مدفوعه والمدفوعة</p>
                 </div>
               
                <div className='btn__container cursor-pointer w-full flex justify-center items-center bg-gray-900'>
                   <Link  className='p-1 mb-2' to='/menof'>see your  menof patients</Link>
                </div>
                           
            </div>
            <div className='ZawyaClinik card  h-85  w-60 rounded-3xl  overflow-hidden  shadow-xl hover:shadow-lg  flex flex-col  justify-between flex-wrap'>
                 <div className='overflow-hidden'>
                    <img className='w-60 h-60' src='./imgs/pic2.jpg' alt='pcs2'></img>
                    <p className='mt-1  pr-2  mb-2 text-right'>عيادة الزاوية وما يخص الجلسات ماديا, الغير مدفوعه والمدفوعه</p>
                 </div>
                <div className="btn__container cursor-pointer w-full flex justify-center items-center bg-gray-900">
                     <Link  className='p-1 mb-2' to='/zawya'>see your elzawya patients</Link>
                </div>
                            
             </div> 
              
            </div>
        </div>
    )
}

