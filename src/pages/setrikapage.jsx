import { Container, Modal,Row, Col, Button } from "react-bootstrap";
import { FaWhatsapp, FaClock, FaStar } from "react-icons/fa";
import { useEffect,useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import SetrikaImg from "../assets/img/str.png"; // Pastikan path dan nama file benar

const SetrikaPage = () => {
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
    <div className="paket-reguler-page py-5 mt-5">
      <Container>
        <Row className="align-items-center mb-5">
          <Col md={4} data-aos="fade-right">
            <img
              src={SetrikaImg}
              alt="Layanan Setrika"
              className="img-fluid rounded shadow"
            />
          </Col>
          <Col md={8} data-aos="fade-left" className="text-center text-md-start">
            <h2 className="fw-bold text-primary mb-3">Layanan Setrika</h2>
            <p className="text-secondary fs-5 mb-4">
              Pakaian Anda akan <strong>disetrika rapi dan wangi</strong> oleh staf profesional. Cocok untuk seragam kerja, pakaian formal, dan kebutuhan harian yang ingin selalu tampil rapi.
            </p>
            <ul className="list-unstyled text-dark mb-4">
              <li><FaClock className="text-warning me-2" />Durasi: ± 1 Hari</li>
              <li><FaStar className="text-info me-2" />Hasil: Licin, wangi, dan siap pakai</li>
              <li>📦 Tanpa proses cuci (hanya setrika)</li>
              <li>📦 Minimal 3kg per pemesanan</li>
              <li>🧺 Harga mulai  Rp8.000 per kg</li>
            </ul>
            <Button
              className="rounded-pill px-4 py-2 d-inline-flex align-items-center justify-content-center gap-2"
              style={{ backgroundColor: "#25D366", border: "none" }}
              variant="outline-light"
              onClick={() => setShowModal(true)}
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

export default SetrikaPage;
