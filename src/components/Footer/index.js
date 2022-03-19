import './footer.css';
import Logo from '../logo'

import './footer.css';

function Footer() {
    let year = new Date().getFullYear();
    return (
        <div className="layout-footer">
            <Logo />
            2021-{year}@ My work
        </div>
    )
}

export default Footer;