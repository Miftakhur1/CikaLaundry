import { Container, Row, Col, Button } from "react-bootstrap";
import { FaWhatsapp, FaClock, FaStar } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import SetrikaImg from "../assets/img/pf2.jpg"; // Pastikan path dan nama file benar

const SetrikaPage = () => {
  useEffect(() => {
    AOS.init({ once: true });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="paket-reguler-page py-5 mt-5">
      <Container>
        <Row className="align-items-center mb-5">
          <Col md={6} data-aos="fade-right">
            <img
              src={SetrikaImg}
              alt="Layanan Setrika"
              className="img-fluid rounded shadow"
            />
          </Col>
          <Col md={6} data-aos="fade-left">
            <h2 className="fw-bold text-primary mb-3">Layanan Setrika</h2>
            <p className="text-secondary fs-5 mb-4">
              Pakaian Anda akan <strong>disetrika rapi dan wangi</strong> oleh staf profesional. Cocok untuk seragam kerja, pakaian formal, dan kebutuhan harian yang ingin selalu tampil rapi.
            </p>
            <ul className="list-unstyled text-dark mb-4">
              <li><FaClock className="text-warning me-2" />Durasi: ± 1 Hari</li>
              <li><FaStar className="text-info me-2" />Hasil: Licin, wangi, dan siap pakai</li>
              <li>📦 Tanpa proses cuci (hanya setrika)</li>
              <li>🧺 Harga mulai Rp4.000 per potong / Rp6.000 per kg</li>
            </ul>
            <Button
              href="https://wa.me/6281234567890?text=Halo%20Cika%20Laundry,%20saya%20ingin%20memesan%20layanan%20setrika%20saja"
              className="rounded-pill px-4 py-2 d-flex align-items-center gap-2"
              style={{ backgroundColor: "#25D366", border: "none" }}
              target="_blank"
            >
              <FaWhatsapp /> Pesan Sekarang via WhatsApp
            </Button>
          </Col>
        </Row>

        {/* Alasan memilih layanan */}
        <Row data-aos="fade-up">
          <Col>
            <h4 className="text-primary fw-bold mb-3">Kenapa Pilih Layanan Setrika?</h4>
            <ul className="text-dark fs-6">
              <li>✅ Rapi dan wangi</li>
              <li>✅ Cocok untuk pakaian kantor/formal</li>
              <li>✅ Hemat waktu dan tenaga</li>
              <li>✅ Bisa antar-jemput (opsional)</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SetrikaPage;
