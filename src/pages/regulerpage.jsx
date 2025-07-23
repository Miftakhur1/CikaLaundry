import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaWhatsapp, FaClock, FaTruck } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import PaketRegulerImg from "../assets/img/paket-reguler.jpg"; // ganti path sesuai struktur kamu

const RegulerPage = () => {
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
              src={PaketRegulerImg}
              alt="Paket Reguler"
              className="img-fluid rounded shadow"
            />
          </Col>
          <Col md={6} data-aos="fade-left">
            <h2 className="fw-bold text-primary mb-3">Paket Reguler</h2>
            <p className="text-secondary fs-5 mb-4">
              Layanan cuci lengkap dengan proses <strong>1-2 hari kerja</strong>.
              Termasuk cuci, kering, lipat atau setrika sesuai permintaan.
              Ideal untuk pakaian harian dengan hasil bersih dan wangi.
            </p>
            <ul className="list-unstyled text-dark mb-4">
              <li><FaClock className="text-warning me-2" />Durasi: ± 2 Hari</li>
              <li><FaTruck className="text-success me-2" />Gratis Antar-Jemput</li>
              <li>📦 Minimal 3kg per pemesanan</li>
              <li>🧺 Harga mulai Rp7.000/kg (bisa disesuaikan per outlet)</li>
            </ul>
            <Button
              href="https://wa.me/6281234567890?text=Halo%20Cika%20Laundry,%20saya%20ingin%20memesan%20Paket%20Reguler"
              className="rounded-pill px-4 py-2 d-flex align-items-center gap-2"
              style={{ backgroundColor: "#25D366", border: "none" }}
              target="_blank"
            >
              <FaWhatsapp /> Pesan Sekarang via WhatsApp
            </Button>
          </Col>
        </Row>

        {/* Bisa tambahkan testimoni atau FAQ */}
        <Row data-aos="fade-up">
          <Col>
            <h4 className="text-primary fw-bold mb-3">Kenapa Pilih Paket Reguler?</h4>
            <ul className="text-dark fs-6">
              <li>✅ Proses cepat dan higienis</li>
              <li>✅ Dikerjakan oleh tim profesional</li>
              <li>✅ Bisa setrika atau lipat</li>
              <li>✅ Garansi puas atau uang kembali</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RegulerPage;
