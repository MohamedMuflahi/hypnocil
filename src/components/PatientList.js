import React from "react";


function Patient({e,handleDelete}) {
  
  return (
    <tr>
      <th></th>
      <th>{e.id}</th>
      <button onClick={()=>handleDelete(e.id)}>X</button>
      <th>{e.name}</th>
      <th>{e.side_effects}</th>
      <th>{e.deceased? 'Dead' : "Alive"}</th>
    </tr>
  );
}

function PatientList({data,handleDelete}) {
  function handleRender(){
    return data.map(e=>{
      return <Patient handleDelete={handleDelete} key={e.id} e={e}></Patient>
    })
  }
  
  return (
    <table>
      <tbody>
        {handleRender()}
      </tbody>
    </table>
  );
}

export default PatientList;
