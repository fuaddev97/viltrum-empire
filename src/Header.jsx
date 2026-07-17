import { useState, useEffect } from 'react'
import viltrumLogo from './assets/viltrum-logo.jpg'
import { NavLink, useLocation } from 'react-router-dom'
import "./Header.css"

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    // Close the mobile menu whenever the route changes
    useEffect(() => {
        setMenuOpen(false);
    }, [location]);

    // Prevent background scroll while the mobile menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    return (
        <div className="header">
        <div className="header-title">
          <img src={viltrumLogo} alt="Viltrum Logo" className='viltrum-logo'/>
          <div className="title-text">
            <span className="empire-label">THE EMPIRE OF</span>
            <span className="main-title">VILTRUM</span>
          </div>
        </div>

        <button
          className={`hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="header-nav"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div id="header-nav" className={`header-content${menuOpen ? " open" : ""}`}>
          <NavLink to="/" end className="home" style={{textDecoration: "none"}}>Home</NavLink>
          <NavLink to="/members" className="members" style={{textDecoration: "none"}}>Members</NavLink>
          <NavLink to="/empire" className="empire" style={{textDecoration: "none"}}>Empire</NavLink>
          <NavLink to="/conquests" className="conquests" style={{textDecoration: "none"}}>Conquests</NavLink>
          <NavLink to="/battles" className="battles" style={{textDecoration: "none"}}>Battles</NavLink>
          <NavLink to="/genetics" className="genetics" style={{textDecoration: "none"}}>Genetics</NavLink>
        </div>

        {menuOpen && <div className="header-backdrop" onClick={() => setMenuOpen(false)}></div>}
      </div>
    );
}
