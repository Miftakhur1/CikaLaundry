import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaTiktok,
  FaGoogle,
} from "react-icons/fa";
import LogoImage from "../assets/img/LOGO.png";
import "../assets/css/footer.css";
const FooterComponent = () => {
  const scrollToTopSmooth = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer>
  <Container>
    <Row className="text-start ">
      <Col md={3} className="footer-column mt-4">
        <div className="footer-logo ">
          <img src={LogoImage} alt="Cika Laundry" />
        </div>
        <p >
          Profesional Laundry: Wet, Dry & Kiloan. Solusi bersih, wangi & cepat!
        </p>
        <div >
        <em className=" text-secondary ">“Kepuasan Anda, Prioritas Kami!”</em>
</div>     
      </Col>

      <Col md={2} className="footer-column d-flex flex-column mt-4 text-sm-start">
        <h5>Navigasi</h5>
        <NavLink to="/" className="footer-link" onClick={scrollToTopSmooth}>› Beranda</NavLink>
        <NavLink to="/profil" className="footer-link" onClick={scrollToTopSmooth}>› Tentang Kami</NavLink>
        <NavLink to="/layanan" className="footer-link" onClick={scrollToTopSmooth}>› Layanan</NavLink>
        <NavLink to="/promo" className="footer-link" onClick={scrollToTopSmooth}>› Promo</NavLink>
        <NavLink to="/contact" className="footer-link" onClick={scrollToTopSmooth}>› Kontak Kami</NavLink>
      </Col>

      <Col md={3} className="footer-column d-flex mt-4 flex-column">
  <h5>Layanan Kami</h5>
  {[
    { name: "Paket Reguler", slug: "/reguler" },
    { name: "Paket Express", slug: "/express" },
    { name: "Cuci Kering", slug: "/cuker" },
    { name: "Setrika", slug: "/setrika" },
    { name: "Jas", slug: "/jas" },
    { name: "Dress", slug: "/Dress" },
    { name: "Helm", slug: "/helm" },
    { name: "Tas", slug: "/tas" },
    { name: "Sepatu", slug: "/sepatu" },
    { name: "Karpet", slug: "/karpet" },
    { name: "BedCover", slug: "/bc" },
  ].map((item, i) => (
    <Link
  to={item.slug}
  key={i}
  onClick={scrollToTopSmooth}
  className="footer-link text-decoration-none mb-1"
>
  › {item.name}
</Link>

  ))}
</Col>

      <Col md={4} className="footer-column mt-4 ">
        <h5>Hubungi Kami</h5>
        <p><i className="bi bi-geo-alt-fill me-2"></i>Jl. Hasanudin No.G11, Semarang Utara</p>
        <p><i className="bi bi-geo-alt-fill me-2"></i>Jl. Anjasmoro Raya No.5, Semarang Barat</p>
        <p><i className="bi bi-geo-alt-fill me-2"></i>Jl. Kedungmundu No.28B, Tembalang</p>
        <p><i className="bi bi-geo-alt-fill me-2"></i>Jl. Soekarno Hatta No.61, Palebon</p>
        <p><i className="bi bi-geo-alt-fill me-2"></i>Jl. Prof. Dr. Hamka, Ngaliyan</p>

       {/* Sosial Media */}
              <div className="py-3 footer-link d-flex gap-4 mt-3 fs-4">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=cikalaudrysemarang@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <FaGoogle />
                </a>
                <a
                  href="https://www.instagram.com/cikalaundryhq/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.tiktok.com/@cikalaundry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light"
                >
                  <FaTiktok />
                </a>
              </div>
            
          </Col>
        
    </Row>

     {/* Copyright */}
        <hr className="my-4 border-secondary" />
        <div className="text-center pb-3 text-muted ">
          &copy; {new Date().getFullYear()} Cika Laundry • Clean Living, Better Life.
          <br />
          All Rights Reserved. Designed & Developed by Mfth
        </div>
     

      {/* Bubble Background */}
       <div
    className="bubble-footer"
    style={{
      position: "absolute",
      bottom: "-40px", // tidak perlu -1500px
      left: "-20px",
      width: "200px",
      height: "200px",
      background: "radial-gradient(circle at center, #00d9ff33, transparent 70%)",
      zIndex: 1,
      pointerEvents: "none", // agar tidak mengganggu klik
    }}
    
  ></div>
  

  
  </Container>
</footer>

  );
};

export default FooterComponent;
