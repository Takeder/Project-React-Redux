import {ADD_MENU_ITEM, DELETE_MENU_ITEM, LOAD_MENU_ITEMS} from '../actions/menu-redux-actions';

// let menu = [{
//     id: 1,
//     name: 'Главная',
//     url: '/'
// }, {
//     id: 2,
//     name: 'О компании',
//     url: '/about'
// }]

export const menuReduxReducer = (state = [], action) => {

    switch(action.type) {
        case LOAD_MENU_ITEMS:
            return [...action.payload];
        case ADD_MENU_ITEM: {
            let item = action.payload;
            item.id = new Date().valueOf();
            return [...state, item];
        }
        case DELETE_MENU_ITEM: {
            let item = action.payload;
            return state.filter(s => s.id !== item.id);
        }
        default:
            return state;
    }
}