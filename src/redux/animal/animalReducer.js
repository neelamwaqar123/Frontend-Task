import {
    FETCH_ANIMAL_FAILURE,
    FETCH_ANIMAL_REQUEST,
    FETCH_ANIMAL_SUCCESS
} from "./animalTypes"

const initialState={
    loading:false,
    animals:[],
    error:''
}

const reducer=(state=initialState ,action)=>{
    switch(action.type){

        case FETCH_ANIMAL_REQUEST:
            return{
                ...state,
                loading:true
            }
        case FETCH_ANIMAL_SUCCESS:
            return{
               
                loading:false,
                animals:[...action.payload],
                error:''
            }
        case FETCH_ANIMAL_FAILURE:
        return{
          
            loading:false,
            animals:[],
            error:action.payload
        }
        default:
            return{

                ...state
            } 
    }
}

export default reducer;