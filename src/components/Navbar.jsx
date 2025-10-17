import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div id="header-image">
        <img src="/header.png" alt="Header" width="100%" height="150" />
      </div>
      
      <div id="logo">
        <img src="/logoo.png" alt="Website Logo" width="100px" />
      </div>
      
      <div id="header-title">
        <h1>Movie Stream</h1>
        <hr />
      </div>
      
      <div id="links">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/registration">Registration</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;