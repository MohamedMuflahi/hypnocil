import React, {useState} from "react"

function NewPatientForm({patientData, setPatientData}) {
    const [inputValues, setInputValues] = useState({
        name: "",
        deceased: "",
        side_effects: [
            "dizziness",
        ]
    
      })
      function handleChange(e){
          let x = e.target.value;
        if(e.target.name === 'side-effects'){
          setInputValues({
            ...inputValues,
            ['side_effects']: [
              x,
            ],
          })
        }else{
          setInputValues({
            ...inputValues,
            [e.target.name]: x,
          })
        }
        
      }
      function handleSubmit(e){
        e.preventDefault();
        fetch("http://localhost:3000/patients", {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inputValues),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Success:", data);
            setPatientData([...patientData,data])
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }
    return(
        <>
            <form id="new-patient-form" onSubmit={handleSubmit}
       onChange={handleChange}>
                <input id="patient-name" name='name' type="text" placeholder="Patient Name" />
                <select name="side-effects" id="side-effects" form="new-patient-form" >
                    <option value="dizziness" selected="selected">Dizziness</option>
                    <option value="nausea">Nausea</option>
                    <option value="somnambulism">Somnambulism</option>
                    <option value="memory">Memory</option>
                    <option value="allergy">Severe Allergic Reaction</option>
                    <option value="headache">Headache</option>
                </select>
                <input type="submit" value="Add Patient" />
            </form>
        </>
    )
}

export default NewPatientForm;