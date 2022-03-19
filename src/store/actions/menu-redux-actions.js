
export const LOAD_MENU_ITEMS = 'LOAD_MENU_ITEMS';
export const ADD_MENU_ITEM = 'ADD_MENU_ITEM';
export const DELETE_MENU_ITEM = 'DELETE_MENU_ITEM';

export const loadMenu = () => {
    return (dispatch) => {
        fetch('/menu.json').then(async (menu) => {
            dispatch({
                type: LOAD_MENU_ITEMS,
                payload: await menu.json()
            });
        });
    };
}

export const deleteItem = (item) => {
    return {
        type: DELETE_MENU_ITEM,
        payload: item
    }
} 