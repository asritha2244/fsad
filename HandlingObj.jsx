import React, {useState} from 'react';

 const HandlingObj = () => {
    const[student,setStudent]= useState({
        name:'monkey',
        college:'xxx'
        
    })
    const changeme=()=>{
        setStudent({name:'donkey',college:'yyy'})
    }
    return (
        <div>
            <h3>{student.name}</h3>
            <h3>{student.college}</h3>
            <button onClick={changeme}>change</button>
        </div>
    );
  
};
export default HandlingObj;
