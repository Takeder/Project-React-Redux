import Logo from '../logo';
import MenuHooks from '../MenuHooks';
import LoginLogout from '../LoginLogout';

import './header.css';

function Header() {
    return (
        <div className="layout-header">
           <Logo />
           <MenuHooks />
           <LoginLogout />
        </div>
    )
}

export default Header;