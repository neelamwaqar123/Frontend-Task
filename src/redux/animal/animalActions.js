import axios from "axios"

import {
    FETCH_ANIMAL_FAILURE,
    FETCH_ANIMAL_REQUEST,
    FETCH_ANIMAL_SUCCESS
} from "./animalTypes"


export const fetchAnimalRequest=()=>{
    return{
        type:FETCH_ANIMAL_REQUEST
    }

}
export const fetchAnimalSuccess=animals=>{
    return{
        type:FETCH_ANIMAL_SUCCESS,
        payload:animals

    }
}

export const fetchAnimalFailure=error=>{
    return{
        type:FETCH_ANIMAL_FAILURE,
        payload:error
    }
}

export const getAnimals=()=>{
    console.log("hellllllo")
    return(dispatch)=>{
        console.log("hellllllo")
        dispatch(fetchAnimalRequest)
        axios.get("https://gist.githubusercontent.com/borlaym/585e2e09dd6abd9b0d0a/raw/6e46db8f5c27cb18fd1dfa50c7c921a0fbacbad0/animals.json")
        .then((response)=>{
           
         
            console.log(response)
            dispatch(fetchAnimalSuccess(response.data))
        })
       
        .catch(error=>{
            console.log("hellllllo from error")
            const errMessage=error.message
            dispatch(fetchAnimalFailure(errMessage))
        })
    }
}



