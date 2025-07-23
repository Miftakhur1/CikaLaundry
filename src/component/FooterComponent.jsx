import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp, FaInstagram, FaTiktok, FaGoogle, FaVoicemail } from "react-icons/fa";
import LogoImage from "../assets/img/LOGO.png";


const FooterComponent = () => {
  const scrollToTopSmooth = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <footer className="text-light pt-5" style={{ backgroundColor: "#121212", position: "relative", overflow: "hidden" }}>
      <Container>
        <Row className="gy-5">
          {/* Brand / Logo */}
          <Col xs={12} md={3}>
            <div className="bg-dark p-4 rounded shadow-sm text-center ">
              <h4 className="fw-bold text-info">Cika Laundry</h4>
              <img
                src={LogoImage}
                alt="Logo Cika Laundry"
                className="mb-3 img-fluid"
                style={{ maxWidth: "220px", height: "auto" }}
              />
              <p className="mt-3 mb-2">
                Profesional Laundry: Wet, Dry & Kiloan. Solusi bersih, wangi & cepat!
              </p>
              <hr className="border-secondary" />
              <p style={{ fontStyle: "italic", fontSize: "0.9rem" }}>
                “Kepuasan Anda, Prioritas Kami”
              </p>
            </div>
          </Col>

          {/* Navigasi dan Layanan */}
          <Col xs={12} md={4}>
            <div className="d-flex flex-column flex-md-row justify-content-between">
              {/* Navigasi */}
              <div className="mb-4 mb-md-0">
                <h5 className="fw-semibold mb-3">Navigasi</h5>
                <ul className="list-unstyled">
  <li>
    <NavLink to="/" className="footer-link d-block mb-2" onClick={scrollToTopSmooth}>
      › Beranda
    </NavLink>
  </li>
  <li>
    <NavLink to="/profil" className="footer-link d-block mb-2" onClick={scrollToTopSmooth}>
      › Tentang Kami
    </NavLink>
  </li>
  <li>
    <NavLink to="/layanan" className="footer-link d-block mb-2" onClick={scrollToTopSmooth}>
      › Layanan
    </NavLink>
  </li>
  <li>
    <NavLink to="/promo" className="footer-link d-block mb-2" onClick={scrollToTopSmooth}>
      › Promo
    </NavLink>
  </li>
  <li>
    <NavLink to="/contact" className="footer-link d-block" onClick={scrollToTopSmooth}>
      › Kontak Kami
    </NavLink>
  </li>
</ul>
              </div>

              {/* Layanan */}
              <div>
                <h5 className="fw-semibold mb-3">Layanan Kami</h5>
                <ul className="list-unstyled">
                  <li><NavLink to="/reguler" className="footer-link d-block mb-2">› Paket Reguler</NavLink></li>
                  <li><NavLink to="/express" className="footer-link d-block mb-2">› Paket Express</NavLink></li>
                  <li><NavLink to="/dryclean" className="footer-link d-block mb-2">› Paket DryClean</NavLink></li>
                  <li><NavLink to="/helm" className="footer-link d-block mb-2">› Helm</NavLink></li>
                  <li><NavLink to="/tas" className="footer-link d-block mb-2">› Tas</NavLink></li>
                  <li><NavLink to="/sepatu" className="footer-link d-block mb-2">› Sepatu</NavLink></li>
                  <li><NavLink to="/karpet" className="footer-link d-block mb-2">› Karpet</NavLink></li>
                  <li><NavLink to="/bedcover" className="footer-link d-block">› BedCover</NavLink></li>
                </ul>
              </div>
            </div>
          </Col>

          {/* Kontak */}
          <Col xs={12} md={5}>
            <div className=" px-5 text-center ">
              <h5 className="fw-semibold mb-3">Hubungi Kami</h5>
              <ul className="list-unstyled text-start text-center d-inline-block">
              <li className="mb-2">
                <FaMapMarkerAlt className="me-2 " />
                Jl. Hasanudin No.G11, Semarang Utara
              </li>
              <li className="mb-2">
                <FaMapMarkerAlt className="me-2 text-gray" />
                Jl. Anjasmoro Raya No.5, Semarang Barat
              </li>
              <li className="mb-2">
                <FaMapMarkerAlt className="me-2 text-gray" />
                Jl. Kedungmundu No.28B, Tembalang
              </li>
              <li className="mb-2">
                <FaMapMarkerAlt className="me-2 text-gray" />
                Jl. Soekarno Hatta No.61, Palebon
              </li>
              <li>
                <FaMapMarkerAlt className="me-2 text-gray" />
                Jl. Prof. Dr. Hamka, Ngaliyan
              </li>
            </ul>
              <div className="py-2 justify-content-center gap-4 mt-3">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=cikalaudrysemarang@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon text-light fs-4"><FaGoogle /></a>
                <a href="https://www.instagram.com/cikalaundryhq/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon text-light fs-4"><FaInstagram /></a>
                
                <a href="https://www.tiktok.com/@cikalaundry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon text-light fs-4"><FaTiktok /></a>
              </div>
            </div>
          </Col>
        </Row>

        <hr className="my-4 border-secondary" />
        <div className="text-center pb-3 text-muted small">
          &copy; {new Date().getFullYear()} Cika Laundry • Clean Living, Better Life. All Rights Reserved. <br />
          Designed & Developed by Mft
        </div>
      </Container>

      {/* Background Bubble */}
      <div
        style={{
          position: "absolute",
          bottom: "-40px",
          left: "-50px",
          width: "200px",
          height: "200px",
          background: "radial-gradient(circle at center, #00d9ff33, transparent 70%)",
          zIndex: 0,
        }}
      ></div>
    </footer>
  );
};

export default FooterComponent;
