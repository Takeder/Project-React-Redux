import {useDispatch} from 'react-redux';
import {useInput, mapInputValue} from '../hooks/useInput';

import {ADD_MENU_ITEM} from '../store/actions/menu-redux-actions';

function AddMenuItemRedux () {

    let dispatch = useDispatch();

    let name = useInput('');
    let url = useInput('');

    const addItem = (event) => {
        event.preventDefault();
        dispatch({
            type: ADD_MENU_ITEM,
            payload: mapInputValue({
                name,
                url
            })
        });
    }

    return (
        <form>
            <div>
                <label>
                    Заголовок<br />
                    <input {...name} />
                </label>
            </div>
            <div>
                <label>
                    URL<br />
                    <input {...url} />
                </label>
            </div>
            <button onClick={addItem}>Сохранить</button>
        </form>
    )
}

export default AddMenuItemRedux;