import {combineReducers} from "redux"
import animalReducer from "./animal/animalReducer"

const rootReducer=combineReducers({
    animal:animalReducer,
})
export default rootReducer