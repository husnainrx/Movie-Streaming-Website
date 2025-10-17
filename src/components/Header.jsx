import { Link } from 'react-router-dom';

const Header = ({ title }) => {
  return (
    <>
      <div id="header-image">
        <img src="/header.png" alt="Movie Stream Banner" />
      </div>
      
      <div id="logo">
        <img src="/logoo.png" alt="Movie Stream Logo" />
      </div>
      
      <div id="header-title">
        <h1>{title}</h1>
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

export default Header;
