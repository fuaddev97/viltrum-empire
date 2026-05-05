import  {useState} from 'react'
import viltrumLogo from './assets/viltrum-logo.jpg' 
import { NavLink } from 'react-router-dom'

export default function Header() {
    const logoStyle = {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    border: '2px solid #E50914',
    padding: '5px',
    backgroundColor: '#0a0a0a',
    boxShadow: '0 0 10px rgba(229, 9, 20, 0.4)'
  };
  const headerStyle = {
    width: '100%',
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    padding: '0 20px',
    justifyContent: 'space-between',
    background: "rgba(10, 10, 10, 0.7)",
    backdropFilter: "blur(6px)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
    position: "fixed",
    top: "0",
    zIndex: "10"
  };
  const headerTitleStyle = {
  display: "flex",
  alignItems: "center",
  gap: "12px"
  }
  const h1Style = {
  fontSize: "18px",
  letterSpacing: "1px",
  color: "#ffffff"
  }
  const headerContentStyle = {
    width: "60%",
    height: "100px",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    fontSize: "20px",
  }
    return (
        <div className="header" style={headerStyle}>
        <div className="header-title" style={headerTitleStyle}>
          <img src={viltrumLogo} alt="Viltrum Logo" style={logoStyle}/>
          <div className="title-text">
            <span className="empire-label">THE EMPIRE OF</span>
            <span className="main-title">VILTRUM</span>
          </div>
        </div>
        <div className="header-content" style={headerContentStyle}>
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