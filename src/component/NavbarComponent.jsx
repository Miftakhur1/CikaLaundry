import { Navbar, Modal, Container, Nav,  Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {  useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';



const NavbarComponent = () => {
  
  const [showModal, setShowModal] = useState(false);
  // Daftar outlet dengan nomor WhatsApp
  const outlets = [
    { name: "Cika Laundry Hasanudin", phone: "628156505562" },
    { name: "Cika Laundry Puri Anjasmoro", phone: "628156505562" },
    { name: "Cika Laundry Arteri", phone: "6285729315058" },
    { name: "Cika Laundry Graha Wahid", phone: "628156602666" },
    { name: "Cika Laundry Ngaliyan", phone: "628156603444" },
    { name: "WhatsApp Karpet, Sofa, Springbed", phone: "62816784455" },
  ];

  return (
    <>
      <Navbar expand="lg" className="navbar" fixed="top">
        <Container>
          <Navbar.Brand
            as={NavLink}
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className="fs-3 fw-bold text-primary"
          >
            Cika Laundry
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="mx-auto text-center">
              <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => window.scrollTo(0, 0)}>Home</NavLink>
              <NavLink to="/profil" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => window.scrollTo(0, 0)}>Tentang Kami</NavLink>
              <NavLink to="/layanan" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}onClick={() => window.scrollTo(0, 0)}>Layanan</NavLink>

             

              <NavLink to="/promo" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}onClick={() => window.scrollTo(0, 0)}>Promo</NavLink>
              <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}onClick={() => window.scrollTo(0, 0)}>Kontak Kami</NavLink>
            </Nav>

            <div className="text-center mt-2 mt-lg-0">
  <Button
    variant="outline-success"
    className="btn-hubungi rounded-pill"
    onClick={() => setShowModal(true)}
  >
    <FaWhatsapp className='me-1'/> Hubungi Kami
  </Button>
</div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Kontak WhatsApp Outlet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul className="list-unstyled">
            {outlets.map((outlet, index) => (
              <li key={index} className="mb-3">
                <a
                  href={`https://wa.me/${outlet.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success w-100 d-flex justify-content-between align-items-center"
                >
                  <span>{outlet.name}</span>
                  <FaWhatsapp />
                </a>
              </li>
            ))}
          </ul>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NavbarComponent;