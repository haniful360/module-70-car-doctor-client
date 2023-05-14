import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg'
import './Header.css'
import { AuthContext } from '../../../Providers/AuthProviders';


const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogout = () => {
        logOut()
            .then(result => {

            })
            .catch(err => { })
    }
    const navItem = <>
        <li><Link>Home</Link></li>
        <li><Link>About</Link></li>
        <li><Link>Services</Link></li>
        {user?.email ? <><li><Link to='/bookings'>My Bookings</Link></li>
        <li><button onClick={handleLogout}>log out</button></li>  </> :
            <li><Link to='/login'>login</Link></li>}
    </>
    return (
        <div className="navbar bg-base-100 h-24">
            <div className="navbar-start">
                <div className="dropdown">
                    <label className="btn btn-circle btn-ghost lg:hidden swap swap-rotate">

                        {/* <!-- this hidden checkbox controls the state --> */}
                        <input type="checkbox" />

                        {/* <!-- hamburger icon --> */}
                        <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

                        {/* <!-- close icon --> */}
                        <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItem}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItem}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-outline btn-secondary capitalize">appointment</button>
            </div>
        </div>
    );
};

export default Header;