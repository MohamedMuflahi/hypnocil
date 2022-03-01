import './App.css';
import Header from './components/Header';
import NewPatientForm from './components/NewPatientForm';
import PatientList from './components/PatientList';
import React,{useState,useEffect} from 'react';

function App() {
  const [patientData, setPatientData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/patients')
    .then(resp => resp.json())
    .then(data=>{
      //console.log(data);
      setPatientData(data);
    })
  }, [])
  function handleDelete(id){
    fetch('http://localhost:3000/patients/' + id, {
  method: 'DELETE',
})
.then(res => res.json()) 
.then(res => {
  let newArray = patientData.filter(e=> e.id !== id);
  setPatientData(newArray);
})
  }
  const itemsToDisplay = patientData.filter(patient=> patient.name.toLowerCase().includes(searchTerm.toLowerCase()));
  return (
    <div className="root">
      <Header setSearchTerm={setSearchTerm}/>
      <div className="content">
        <NewPatientForm patientData={patientData} setPatientData={setPatientData}/>
        <PatientList handleDelete={handleDelete} data={itemsToDisplay}/>
      </div>
    </div>
  );
}

export default App;
