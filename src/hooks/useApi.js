import { useState } from "react";

let users = [{
    id: 1,
    login: 'admin',
    password: '123'
}, {
    id: 2,
    login: 'user',
    password: '321'
}]

function useApi (options = {}) {

    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    return {
        result,
        error,
        auth: (login, pass) => {
            let user = users.find(u => u.login === login);
            if(user && user.password === pass) {
                setResult(user);
                setError(null);
            } else {
                setError('Ошибка логина!');
            }
        }
    };

}

export default useApi;