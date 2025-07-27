import React from "react";
import { Container,Modal, Row, Col, Button } from "react-bootstrap";
import { FaClock, FaStar, FaThumbsUp, FaWhatsapp } from "react-icons/fa";

import premiumImg from "../assets/img/pr.png"; // Ganti dengan gambar premium Anda
import { useEffect,useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const LaundryPremium = () => {
    // Inisialisasi AOS untuk animasi
      useEffect(() => {
        AOS.init({ once: true });
        window.scrollTo(0, 0);
      }, []);
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
    <div className="premium-section py-5" style={{ background: "#fefefe" }}>
      <Container>
        <Row className="align-items-center mb-5">
  <Col md={4} data-aos="fade-right">
    <img
      src={premiumImg}
      alt="Paket Premium"
      className="img-fluid rounded shadow"
    />
  </Col>
  <Col md={8} data-aos="fade-left" className="text-center text-md-start">
   <h2 className="fw-bold text-primary mb-3">
  <FaStar className="me-2" />
  Paket Premium
</h2>
    <h5 className="fw-semibold mb-3">Laundry Premium Wangi & Detail</h5>
    <p className="text-secondary mb-3">
      Rasakan sensasi kebersihan maksimal dan wangi mewah dari paket premium kami.
      Proses pencucian dilakukan secara hati-hati dengan deterjen & parfum kualitas terbaik.
      Ideal untuk pakaian kesayangan dan pelanggan yang mengutamakan kualitas.
    </p>
    <ul className="list-unstyled text-dark mb-4">
      <li><FaClock className="text-warning me-2" />Durasi: 1 Hari</li>
      <li><FaStar className="text-warning me-2" />Deterjen & Parfum Premium</li>
      <li><FaThumbsUp className="text-success me-2" />Pengerjaan Sangat Detail</li>
      <li>📦 Minimal 3kg per pemesanan</li>
      {/* <li>🧺 Harga mulai <strong>Rp12.000/kg</strong></li> */}
    </ul>

    <Button
      variant="outline-light"
              onClick={() => setShowModal(true)}
      className="rounded-pill px-4 py-2 d-inline-flex align-items-center justify-content-center gap-2"
      style={{ backgroundColor: "#25D366", border: "none" }}
     
    >
      <FaWhatsapp /> Pesan Sekarang via WhatsApp
    </Button>
  </Col>
</Row>

      </Container>
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
    </div>
  );
};

export default LaundryPremium;
