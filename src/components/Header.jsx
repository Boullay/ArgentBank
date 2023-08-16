import {Link} from 'react-router-dom';
import Logo from '../img/argentBankLogo.png';
import IconUser from '../img/IconUser';

function Header() {
    return(
        <nav className="main-nav">
            <Link className="main-nav-logo" to={'/'}>
            <img
            className="main-nav-logo-image"
            src={Logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
            </Link>
        <div>
            <Link className="main-nav-item" to={'/login'}>
            <IconUser />
            Sign In
            </Link>
        </div>
      </nav>
    )
}

export default Header;