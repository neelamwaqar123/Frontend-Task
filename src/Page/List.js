import React, { useState, useEffect } from "react";
import {connect} from 'react-redux'
import {getAnimals} from "../redux"
import { Spin, Alert } from 'antd';
const List =({error,loading,animalData,getAnimals })=>{
  const[animalName,setanimalName]=useState()
  const[animalarr,setanimalarr]=useState(animalData);
  const handleChange=(e)=>{
    setanimalName(e.target.value)
    let filteredAnimalArr = animalData.filter((aminal) =>  JSON.stringify(aminal).toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1);
    setanimalarr(filteredAnimalArr)
    } 
    useEffect( () => {
      setanimalarr(animalData) 
     }, [animalData]);
  useEffect( () => {
   getAnimals();
  }, []);
return (
      loading?(
        <Spin tip="Loading...">
      </Spin>
      ):error?(
        <Alert
        message="There is some error while fetching animal names"
        description="It may take a while"
        type="info"
      />
      ):(
        <div className="animal_container">
          <label htmlFor="search">Search Animal</label>
          <input 
              type="text"
              placeholder="Type to filter..."
               value={animalName}  
              onChange={handleChange}
      /> 
      <ul className="list_items">
              {animalarr &&
              animalarr.map((anml) => (
                 <li>{anml}</li>))
              }
            </ul>
       </div>
      )
  );
};
const mapStateToProps=(state)=>{
    return{
       loading:state.animal.loading,
       animalData:state.animal.animals,
       error:state.animal.error
    }
}
const mapDispatchToProps=dispatch=>{
    return{
      getAnimals:()=>dispatch(getAnimals())
       
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(List);