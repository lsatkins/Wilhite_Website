import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../css/header.css';
import { FaLocationDot } from "react-icons/fa6";



const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded((prevExpanded) => !prevExpanded); // Toggle the value of expanded
  };

  useEffect(() => {
    const handleResize = () => {
      setExpanded(window.innerWidth >= 450); // Set the expanded state based on the screen width
    };

    handleResize(); // Call the function initially

    window.addEventListener('resize', handleResize); // Listen for window resize events

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up the event listener
    };
  }, []);

  return (
    <>
      <Navbar fixed="top" expand={expanded} className="custom-navbar">
        <Container className="d-flex justify-space-between flex-nowrap">
          <Navbar.Brand className = "d-flex justify-content-center align-items-center" href="/">
            <img
              style={{ height: '50px', backgroundColor: 'rgb(87,220,253)' }}
              src="./images/jobtrackr-website-favicon-white.png"
              alt=""
            ></img>
            <div className = "title">Northriver Internal Medicine</div>
          </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle}>
            
          </Navbar.Toggle> */}
          <div>
          {expanded === false ? (
            <button onClick={handleToggle} aria-controls="basic-navbar-nav" type="button" aria-label="Toggle navigation" className="navbar-toggler collapsed">
                <span className="navbar-toggler-icon"></span>
            </button>
            ) : null}
          <Navbar.Collapse id="basic-navbar-nav" className="navLinks">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="https://www.google.com/maps/dir/33.2324385,-87.5676631/North+River+Internal+Medicine,+100+Rice+Mine+Rd+N+%23150,+Tuscaloosa,+AL+35406/@33.2280788,-87.59583,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x8888a96536544e8b:0xf2d4c21141ad4d1f!2m2!1d-87.5347239!2d33.2284653?entry=ttu"><FaLocationDot /></Nav.Link>
              <Nav.Link href="tel:+12058269714">Call Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;