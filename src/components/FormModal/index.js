import './formmodal.css';

import React, { useEffect, useContext } from 'react';

import useInput from '../../hooks/useInput';
import useApi from '../../hooks/useApi';

import {AuthContext} from '../../AuthContext';

function FormModal() {

    let {setUser} = useContext(AuthContext);

    let {result, error, auth} = useApi();
    let email = useInput();
    let password = useInput();

    const onAuth = (event) => {
        event.preventDefault();
        auth(email.value, password.value);
    }

    useEffect(() => {
        if(result !== null) {
            setUser(result);
        }
    }, [result, setUser])

    return (
        <form className="form">
            <input {...email} className="form__content" type="email" name="email" placeholder="Ваш e-mail"></input>
            <input {...password} className="form__content" type="password" name="password" placeholder="Ваш пароль"></input>
            <div className='form__btn'>
                <button onClick={onAuth}>Войти</button> /&nbsp;
                <button>Зарегистрироваться</button>
            </div>
            {error}
        </form>
    )
}


export default FormModal;