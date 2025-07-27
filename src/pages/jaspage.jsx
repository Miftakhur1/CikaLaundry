import React, { useEffect ,useState} from "react";
import { Container, Row, Modal,Col, Button } from "react-bootstrap";
import { FaWhatsapp, FaUserTie, FaCheckCircle } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

import jas from "../assets/img/jas.png"; // Gambar jas

const JasPage = () => {
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
    <div className="py-5 mt-5 bg-white jas-page">
      <Container>
        <Row className="align-items-center mb-5">
          <Col md={4} data-aos="fade-right">
            <img src={jas} alt="Cuci Jas" className="img-fluid rounded shadow" />
          </Col>
          <Col md={8} data-aos="fade-left" className="text-center text-md-start">
            <h2 className="fw-bold text-primary mb-3">
              <FaUserTie className="me-2" />Layanan Cuci Jas Profesional
            </h2>
            <p className="text-secondary fs-5 mb-4">
              Jas Anda dicuci dengan metode <strong>non mesin (bukan laundry biasa)</strong> untuk menjaga bentuk, warna, dan detail bahan. Sangat cocok untuk jas kantor, jas pesta, atau seragam formal lainnya.
            </p>
            <ul className="list-unstyled text-dark mb-4">
              <li><FaCheckCircle className="text-success me-2" />Pengerjaan manual & hati-hati</li>
              <li><FaCheckCircle className="text-success me-2" />Disetrika uap & digantung</li>
              <li><FaCheckCircle className="text-success me-2" />Siap dalam ±3 Hari Kerja</li>
              <li><FaCheckCircle className="text-success me-2" />Dapatkan diskon 10%</li>
              {/* <li><FaCheckCircle className="text-success me-2" />Harga Rp50.000 per jas</li> */}
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

export default JasPage;
