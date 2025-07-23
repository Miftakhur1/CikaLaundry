import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaWhatsapp, FaClock, FaTruck, FaCheckCircle } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import BedcoverImg from "../assets/img/bedcover.png"; // Ganti path sesuai struktur kamu

const BedcoverPage = () => {
  useEffect(() => {
    AOS.init({ once: true });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="paket-bedcover-page py-5 mt-5">
      <Container>
        <Row className="align-items-center mb-5">
          <Col md={6} data-aos="fade-right">
            <img
              src={BedcoverImg}
              alt="Cuci Bedcover"
              className="img-fluid rounded shadow"
            />
          </Col>
          <Col md={6} data-aos="fade-left">
            <h2 className="fw-bold text-primary mb-3">Cuci Bedcover</h2>
            <p className="text-secondary fs-5 mb-4">
              Layanan profesional untuk mencuci <strong>bedcover, selimut, dan sprei tebal</strong>.
              Menggunakan mesin khusus dan deterjen antibakteri agar hasil bersih, harum, dan higienis.
            </p>
            <ul className="list-unstyled text-dark mb-4">
              <li><FaClock className="text-warning me-2" />Durasi: ± 3 Hari</li>
              <li><FaTruck className="text-success me-2" />Gratis Antar-Jemput</li>
              <li>🛏️ Harga mulai Rp20.000–40.000 per bedcover</li>
              <li>🧼 Termasuk pengeringan dan pelapisan anti tungau (opsional)</li>
            </ul>
            <Button
              href="https://wa.me/6281234567890?text=Halo%20Cika%20Laundry,%20saya%20ingin%20memesan%20layanan%20Cuci%20Bedcover"
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
            <h4 className="text-primary fw-bold mb-3">Keunggulan Cuci Bedcover Kami</h4>
            <ul className="text-dark fs-6">
              <li><FaCheckCircle className="text-success me-2" />Mesin khusus untuk cucian besar</li>
              <li><FaCheckCircle className="text-success me-2" />Anti jamur dan anti tungau</li>
              <li><FaCheckCircle className="text-success me-2" />Pewangi lembut dan tahan lama</li>
              <li><FaCheckCircle className="text-success me-2" />Bisa antar-jemput gratis</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BedcoverPage;
