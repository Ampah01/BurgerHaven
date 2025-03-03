import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
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
      className="shadow-sm sticky-top"
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
              href="/"
              className="nav-link-custom"
              onMouseEnter={handleNavLinkEnter}
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
                  href="/menu/lunch"
                  className="nav-link-custom"
                >
                  LUNCH (PDF)
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/menu/all_day_menu"
                  className="nav-link-custom"
                >
                  ALL DAY MENU (PDF)
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/menu/burger"
                  className="nav-link-custom"
                >
                  BURGER (PDF)
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/menu/beer/no_beer"
                  className="nav-link-custom"
                >
                  BEER / NO BEER (PDF)
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/menu/specials"
                  className="nav-link-custom"
                >
                  SPECIALS (PDF)
                </NavDropdown.Item>
              </div>
            </NavDropdown>

            <Nav.Link
              href="/order"
              className="nav-link-custom"
              onMouseEnter={handleNavLinkEnter}
            >
              ORDER
            </Nav.Link>
            <Nav.Link
              href="/press"
              className="nav-link-custom"
              onMouseEnter={handleNavLinkEnter}
            >
              ABOUT
            </Nav.Link>
            <Nav.Link
              href="/about"
              className="nav-link-custom"
              onMouseEnter={handleNavLinkEnter}
            >
              CONTACT
            </Nav.Link>
            <Nav.Link
              href="/contact"
              className="nav-link-custom"
              onMouseEnter={handleNavLinkEnter}
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
