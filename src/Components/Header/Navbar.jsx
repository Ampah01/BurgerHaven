import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Navbar.css";

const Header = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 991);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownTimeout = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 991);
      if (window.innerWidth > 991) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current);
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 5000);
  };

  const handleDropdownMouseEnter = () => {
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current);
    }
  };

  const handleDropdownMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const handleNavLinkEnter = () => {
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current);
    }
    setIsDropdownOpen(false);
  };

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <Navbar
      expand="md"
      bg="white"
      variant="light"
      className="shadow-sm sticky-top rounded-0"
    >
      <Container className="d-flex justify-content-md-between align-items-center mx-lg-10">
        <Navbar.Brand href="/" className="text-dark navbar-brand-custom">
          ACCRA EAST LEGON
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          aria-label="Toggle navigation"
          className="border-0"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className={`hamburger ${isMenuOpen ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav" in={isMenuOpen}>
          <Nav className="mx-auto text-center">
            <Nav.Link
              as={Link}
              to="/"
              className="nav-link-custom"
              onMouseEnter={handleNavLinkEnter}
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </Nav.Link>

            <NavDropdown
              title={<span className="nav-link-custom">MENUS</span>}
              id="menu-dropdown"
              className="nav-link-custom"
              show={isDesktop ? isDropdownOpen : undefined}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
                className="nav-menu"
              >
                <NavDropdown.Item
                  href="/menu/burger_menu.pdf"
                  target="_blank"
                  className="nav-link-custom"
                >
                  LUNCH (PDF)
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/menu/burger_menu.pdf"
                  target="_blank"
                  className="nav-link-custom"
                >
                  ALL DAY MENU (PDF)
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/menu/burger_menu.pdf"
                  target="_blank"
                  className="nav-link-custom"
                >
                  BURGER (PDF)
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/menu/burger_menu.pdf"
                  target="_blank"
                  className="nav-link-custom"
                >
                  BEER / NO BEER (PDF)
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/menu/burger_menu.pdf"
                  target="_blank"
                  className="nav-link-custom"
                >
                  SPECIALS (PDF)
                </NavDropdown.Item>
              </div>
            </NavDropdown>

            <Nav.Link
              as={Link}
              to="/order"
              className="nav-link-custom"
              onMouseEnter={handleNavLinkEnter}
              onClick={() => setIsMenuOpen(false)}
            >
              ORDER
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              className="nav-link-custom"
              onMouseEnter={handleNavLinkEnter}
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              className="nav-link-custom"
              onMouseEnter={handleNavLinkEnter}
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/press"
              className="nav-link-custom"
              onMouseEnter={handleNavLinkEnter}
              onClick={() => setIsMenuOpen(false)}
            >
              PRESS
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <div className="social-icons d-none d-lg-flex gap-3">
          <a
            href="https://facebook.com"
            target="_blank"
            className="text-dark"
            aria-label="Facebook"
          >
            <FaFacebookF size={15} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            className="text-dark"
            aria-label="Twitter"
          >
            <FaTwitter size={15} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            className="text-dark"
            aria-label="Instagram"
          >
            <FaInstagram size={15} />
          </a>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
