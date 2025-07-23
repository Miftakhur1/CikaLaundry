import { Container, Row, Col, Button } from "react-bootstrap";
import { FaWhatsapp, FaClock, FaCouch } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import KarpetImg from "../assets/img/cuci-karpet.jpg"; // Ganti path jika perlu

const KarpetPage = () => {
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
              src={KarpetImg}
              alt="Layanan Cuci Karpet"
              className="img-fluid rounded shadow"
            />
          </Col>
          <Col md={6} data-aos="fade-left">
            <h2 className="fw-bold text-primary mb-3">Layanan Cuci Karpet</h2>
            <p className="text-secondary fs-5 mb-4">
              Solusi ideal untuk menjaga kebersihan dan kenyamanan rumah Anda. Karpet dicuci dengan teknik khusus agar kembali bersih, harum, dan bebas tungau.
            </p>
            <ul className="list-unstyled text-dark mb-4">
              <li><FaCouch className="text-info me-2" />Durasi: ± 3–5 Hari</li>
              <li><FaClock className="text-warning me-2" />Penanganan Khusus & Jemur Matahari</li>
              <li>📦 Bisa pickup langsung ke rumah</li>
              <li>🧺 Harga mulai Rp15.000/m² (tergantung jenis karpet)</li>
            </ul>
            <Button
              href="https://wa.me/6281234567890?text=Halo%20Cika%20Laundry,%20saya%20ingin%20cuci%20karpet"
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
            <h4 className="text-primary fw-bold mb-3">Kenapa Cuci Karpet di Cika Laundry?</h4>
            <ul className="text-dark fs-6">
              <li>✅ Proses pembersihan menyeluruh</li>
              <li>✅ Teknik khusus untuk menjaga warna dan tekstur</li>
              <li>✅ Dijemur alami, bebas jamur dan bau apek</li>
              <li>✅ Bisa antar-jemput langsung ke rumah Anda</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default KarpetPage;
