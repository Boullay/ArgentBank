import { Link } from 'react-router-dom';
import Logo from '../img/argentBankLogo.png';
import IconUser from '../img/IconUser';
import IconSignout from '../img/IconSignout';
import { useDispatch, useSelector } from 'react-redux';
import { removeToken } from '../Store/actions/userAction';



function Header() {
  const dispatch = useDispatch()
  function logout() {
    dispatch(removeToken());
  }
  const token = useSelector(state => state.userState.token)
  const user = useSelector(state => state.userState.user)
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to={'/'}>
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      {!token ?
        <div>
          <Link className="main-nav-item" to={'/login'}>
            <IconUser />
            Sign In
          </Link>
        </div> :
        <div>
          <Link className="main-nav-item" to={'/profile'}>
            <IconUser />
            {user?.firstName}
          </Link>
          <Link className='main-nav-item' to={'/'} onClick={logout} >
            <IconSignout />
            Sign out
          </Link>
        </div>}
    </nav>
  )
}

export default Header;