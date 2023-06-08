import React, { useContext } from 'react';
import logoImg from '../assets/logo/logo3.webp'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Components/Authprovider/AuthProviders';

const NavBar = () => {
  const {user,logOut}=useContext(AuthContext);

  const handleLogOut=()=>{
    logOut()
    .then(() => {}).
    catch((error) => {console.log(error)});

  }


    const itemsOption=<>
      <li className='font-bold text-xl  '><Link to='/'>Home</Link></li>
      <li className='font-bold text-xl '><Link to='/instructors'> Instructors</Link></li>
      <li className='font-bold text-xl '><Link to='/classes'>Classes</Link></li>
      <li className='font-bold text-xl '><Link to='/dashboard'>Dashbord</Link></li>


    </>
    return (
    <div className=" navbar md:fixed z-10 bg-opacity-90 bg-lime-200 md:px-12 sm:px-4 sm:py-1 md:py-1">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {itemsOption}
      </ul>
    </div>
    <img src={logoImg} width={96} className='hidden sm:inline md:static' alt="" />
    <a className="btn btn-ghost normal-case  font-extrabold md:text-3xl">OllO</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {itemsOption}
    </ul>
  </div>
  <div className="navbar-end ">

 {
  user ? 
    <div className="tooltip flex ">
  <img src={user.photoURL} className='w-8 mx-2  rounded-circle' data-tip={user.email}/>
  <button onClick={handleLogOut} className='btn btn-warning'>LogOut</button>
</div>
    :
    <Link to='/login' className="btn btn-info hover:btn-neutral">Login</Link>

 }
  </div>
</div>
    );
};

export default NavBar;