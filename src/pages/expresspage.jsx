import { Container, Row, Col, Button } from "react-bootstrap";
import { FaWhatsapp, FaClock, FaBolt } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import ExpressImg from "../assets/img/paket-express.jpg"; // Pastikan path-nya sesuai

const ExpressPage = () => {
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
              src={ExpressImg}
              alt="Paket Express"
              className="img-fluid rounded shadow"
            />
          </Col>
          <Col md={6} data-aos="fade-left">
            <h2 className="fw-bold text-primary mb-3">Paket Express</h2>
            <p className="text-secondary fs-5 mb-4">
              Layanan cuci kilat dengan proses <strong>selesai di hari yang sama</strong>. Cocok untuk Anda yang butuh pakaian bersih dalam waktu cepat tanpa mengorbankan kualitas.
            </p>
            <ul className="list-unstyled text-dark mb-4">
              <li><FaBolt className="text-danger me-2" />Durasi: 6–8 Jam (Hari yang Sama)</li>
              <li><FaClock className="text-warning me-2" />Antrian Khusus - Prioritas</li>
              <li>📦 Minimal 3kg per pemesanan</li>
              <li>🧺 Harga mulai Rp10.000/kg (tergantung outlet)</li>
            </ul>
            <Button
              href="https://wa.me/6281234567890?text=Halo%20Cika%20Laundry,%20saya%20ingin%20memesan%20Paket%20Express"
              className="rounded-pill px-4 py-2 d-flex align-items-center gap-2"
              style={{ backgroundColor: "#25D366", border: "none" }}
              target="_blank"
            >
              <FaWhatsapp /> Pesan Sekarang via WhatsApp
            </Button>
          </Col>
        </Row>

        <Row data-aos="fade-up">
          <Col>
            <h4 className="text-primary fw-bold mb-3">Kenapa Pilih Paket Express?</h4>
            <ul className="text-dark fs-6">
              <li>✅ Selesai dalam satu hari</li>
              <li>✅ Prioritas pengerjaan</li>
              <li>✅ Kualitas tetap terjaga</li>
              <li>✅ Ideal untuk kebutuhan mendesak</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ExpressPage;
