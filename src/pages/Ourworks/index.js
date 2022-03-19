import { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';

import Timer from '../../components/timer';
import Counter from '../../components/counter';

import {AuthContext} from '../../AuthContext';

import './ourworks.css';

function OurworksPage () {

    const {user} = useContext(AuthContext);

    if(!user) {
        return (
            <>
                <h1>Нет доступа!</h1>
                <p>Доступ к данному разделу возможен только после входа по логину и паролю...</p>
                <Link to="/">Вернуться на главную</Link>
            </>
        )
    } else {
        return (
            <div className='page-ourworks'>
                <aside>
                    <ul className='page-ourworks-menu'>
                        <li><NavLink to='/ourworks/counter'>Counter</NavLink></li>
                        <li><NavLink to='/ourworks/timer'>Timer</NavLink></li>
                        <li><NavLink to='/ourworks/modal'>Модальное окно</NavLink></li>
                        <li><NavLink to='/ourworks/forms'>Формы</NavLink></li>
                        <li><NavLink to='/ourworks/catalog'>Компонент каталога</NavLink></li>
                        <li><NavLink to='/ourworks/menu-editor'>Редактор Меню на Redux</NavLink></li>
                    </ul>
                </aside>
                <section>
                    <h1>Наши работы</h1>
                    <h2>Каунтер</h2>
                    <Counter />
                    <h2>Таймер</h2>
                    <Timer />
                </section>
            </div>
        )
    }
}

export default OurworksPage;
