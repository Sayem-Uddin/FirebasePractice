import { NavLink ,Link} from "react-router-dom";

   const links = 
 <>
  <NavLink to= '/'><li className="  text-lg">Home</li></NavLink>
  <NavLink to='product'><li className="  text-lg">Product</li></NavLink>
  <NavLink to='about'><li className=" text-lg">About</li></NavLink>
  <NavLink to='contact'><li className=" text-lg">Contact</li></NavLink>
  <NavLink to='blog'><li className=" text-lg">Blog</li></NavLink>
  </>
    
   

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {
          links
        }
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 grid grid-cols-5 gap-8">
     {links}
    </ul>
  </div>
  <div className="navbar-end">
  <Link to='/login'>  <a className="btn text-lg">Log In</a></Link>
  </div>
</div>
        </div>
    );
};

export default Navbar;