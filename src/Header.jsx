import viltrumLogo from './assets/viltrum-logo.jpg' 
import { NavLink } from 'react-router-dom'
import "./Header.css"

export default function Header() {
    return (
        <div className="header">
        <div className="header-title">
          <img src={viltrumLogo} alt="Viltrum Logo" className='viltrum-logo'/>
          <div className="title-text">
            <span className="empire-label">THE EMPIRE OF</span>
            <span className="main-title">VILTRUM</span>
          </div>
        </div>
        <div className="header-content">
          <NavLink to="/" end className="home" style={{textDecoration: "none"}}>Home</NavLink>
          <NavLink to="/members" className="members" style={{textDecoration: "none"}}>Members</NavLink>
          <NavLink to="/empire" className="empire" style={{textDecoration: "none"}}>Empire</NavLink>
          <NavLink to="/conquests" className="conquests" style={{textDecoration: "none"}}>Conquests</NavLink>
          <NavLink to="/battles" className="battles" style={{textDecoration: "none"}}>Battles</NavLink>
          <NavLink to="/genetics" className="genetics" style={{textDecoration: "none"}}>Genetics</NavLink>
        </div>
      </div>
    );
}  