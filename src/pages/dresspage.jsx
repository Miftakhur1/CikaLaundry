import React, { useEffect,useState } from "react";
import { Container, Modal,Row, Col, Button } from "react-bootstrap";
import { FaWhatsapp, FaCheckCircle } from "react-icons/fa";
import { GiDress } from "react-icons/gi";
import AOS from "aos";
import "aos/dist/aos.css";
import dress from "../assets/img/dress.png";

const DressPage = () => {
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
    <div className="py-5 mt-5 bg-white dress-page">
      <Container>
        <Row className="align-items-center">
          <Col md={4} data-aos="fade-right">
            <img
              src={dress}
              alt="Cuci Dress"
              className="img-fluid rounded shadow"
              style={{ maxHeight: "600px", objectFit: "cover", width: "100%" }}
            />
          </Col>
          <Col md={8} data-aos="fade-left" className="text-center text-md-start">
            <h2 className="fw-bold mb-3 text-primary">
              <GiDress className="me-2" />
              Layanan Cuci Dress
            </h2>
            <p className="mb-4 text-secondary fs-5">
              Dress kesayangan Anda kusam atau berdebu? Cika Laundry memberikan layanan
              <strong> Cuci Dress Premium</strong> dengan metode cuci tangan, pengeringan gantung, dan setrika uap,
              untuk menjaga warna dan bentuk tetap sempurna.
            </p>
            <ul className="list-unstyled mb-4 text-dark">
              <li><FaCheckCircle className="text-success me-2" />Aman untuk bahan sutra, brokat, sifon</li>
              <li><FaCheckCircle className="text-success me-2" />Cuci tangan tanpa mesin kasar</li>
              <li><FaCheckCircle className="text-success me-2" />Setrika uap & listrik sesuai bahan</li>
              <li><FaCheckCircle className="text-success me-2" />Digantung alami tanpa pelipatan</li>
              <li><FaCheckCircle className="text-success me-2" />dapatkan diskon 10%</li>
              {/* <li><FaCheckCircle className="text-success me-2" />Harga mulai Rp25.000-Rp60.000 per pasang (tergantung sepatu)</li> */}

            </ul>
            <Button
             variant="outline-light"
              onClick={() => setShowModal(true)}
              className="rounded-pill px-4 py-2 d-inline-flex align-items-center justify-content-center gap-2"
              style={{ backgroundColor: "#25D366", border: "none" }}
            >
              <FaWhatsapp /> Konsultasi via WhatsApp
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

export default DressPage;
