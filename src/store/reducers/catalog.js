
import {ADD_CAR, DELETE_CAR, UPDATE_CAR, LOAD_CARS} from '../actions/catalog-actions';

// {
//     type: "ADD_CAR",
//     payload: {}
// }

export const catalogReducer = (state = [], action) => {
    switch(action.type) {
        case ADD_CAR: {
            let car = action.payload;
            return [...state, car];
        }
        case DELETE_CAR:
            let car = action.payload;
            return state.filter((item) => item.id !== car.id);
        case UPDATE_CAR:
            return state;
        case LOAD_CARS: {
            return [...action.payload];
        }
        default:
            return state;
    }
}