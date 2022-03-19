import React, { useContext, useEffect, useState } from 'react';
import Modal from '../Modal';
import FormModal from '../FormModal';
import { AuthContext } from '../../AuthContext';

function LoginLogout() {

    const {user, setUser} = useContext(AuthContext);
    const [isLogin, setIsLogin] = useState(false);

    function login(event) {
        setIsLogin(true);
    }

    function logout(event) {
        setUser(null);
    }

    const closeModal = () => {
        setIsLogin(false);
    }

    useEffect(() => {
        if(user) {
            setIsLogin(false);
        }
    }, [user])

    return (
        <div>
            {user ? (
                <button onClick={logout}>Выйти</button>
            ) : (
                <button onClick={login}>Войти</button>
            )}
            <Modal 
                show={isLogin}
                onModalClose={closeModal}
            >
                <FormModal />
            </Modal>
        </div>
    );
}

export default LoginLogout;
