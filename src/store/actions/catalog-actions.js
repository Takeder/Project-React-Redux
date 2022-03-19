
export const ADD_CAR = 'ADD_CAR';
export const DELETE_CAR = 'DELETE_CAR';
export const UPDATE_CAR = 'UPDATE_CAR';
export const LOAD_CARS = 'LOAD_CARS';

export const loadCars = () => {
    return (dispatch) => {
        fetch('/cars.json').then(async (cars) => {
            dispatch({
                type: LOAD_CARS,
                payload: await cars.json()
            })
        });
    }
} 

export const addCar = (car) => {
    return {
        type: ADD_CAR,
        payload: car
    }
}

export const deleteCar = (car) => {
    return {
        type: DELETE_CAR,
        payload: car
    }
}
