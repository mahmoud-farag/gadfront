import './App.css';
import { AddNewPatient, Header, MenofClinik, ZawyaClinik} from './components';
import {Routes, Route, Link} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import PatientDetails from './components/PatientDetails';
import * as React from 'react' 

function App() {
  // const [toggle, setToggle] = React.useState(true);

  // const handleToggle = () => {
  //   setToggle(!toggle);
  // };

  const [toggle, setToggle] = React.useState(false);

  const changeState = ()=>{
    setToggle(!toggle);
}
  
  return (
    <div className="App bg-gray-100">
      <header >
      <Header></Header>
      </header>
      <main className=" bg-gray-100">
      <Link className='text-red-800 font-bold ml-4 text-2xl' to='/'> GO HOME</Link>
         <Routes>

           <Route path='/' element={<HomeScreen/>} ></Route>
           <Route path='/menof' element={<MenofClinik changeState={changeState}/>} ></Route>
           <Route path='/zawya' element={<ZawyaClinik changeState={changeState}/>} ></Route>
           <Route path='/newpatient' element={<AddNewPatient/>} ></Route>
           <Route path='/menof/:id' element={<PatientDetails/>} ></Route>
           <Route path='/zawya/:id' element={<PatientDetails/>} ></Route> 
        </Routes>
      
  {/* <Toggler toggle={toggle} onToggle={handleToggle} />  */}
      </main>
                    

    </div>
  );
}

export default App;
