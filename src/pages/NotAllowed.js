
import { Link } from 'react-router-dom';

function NotAllowed () {
    return (
        <>
            <h1>Нет доступа!</h1>
            <p>Доступ к данному разделу возможен только после входа по логину и паролю...</p>
            <Link to="/">Вернуться на главную</Link>
        </>
    )
}

export default NotAllowed;
