import "./Navbar.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleImageUploadClick = () => {
    navigate('/upload');
  }

  const handleHomeClick = () => {
    navigate('/');
  }

  const handleAddNewUser = () => {
    navigate('/add')
  }

  return (
    <>
      <div className="nav-wrapper">
        <div onClick={handleHomeClick} className="logoContainer logo">
          <h2>Hotel</h2>
        </div>
        <div className={`links ${menuOpen ? "show" : ""}`}>
          <p>
            <a onClick={handleHomeClick} className="navbarUrl">Home</a>
          </p>
          <p>
            <a className="navbarUrl" href="#about" onClick= {handleImageUploadClick}>Upload Menu</a>
          </p>
          <p>
            <a onClick={handleAddNewUser} className="navbarUrl">Add New User</a>
          </p>
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </div>
      </div>

    </>
  );
};

export default Navbar;
