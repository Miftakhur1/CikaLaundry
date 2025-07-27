import { Container, Modal,Row, Col, Button } from "react-bootstrap";
import { FaWhatsapp, FaClock, FaCouch } from "react-icons/fa";
import { useEffect,useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { GiRolledCloth } from "react-icons/gi"; // untuk karpet
import KarpetImg from "../assets/img/cuci-karpet.jpg"; // Ganti path jika perlu

const KarpetPage = () => {
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
              src={KarpetImg}
              alt="Layanan Cuci Karpet"
              className="img-fluid rounded shadow"
            />
          </Col>
          <Col md={8} data-aos="fade-left" className="text-center text-md-start">
           <h2 className="fw-bold text-primary mb-3">
  <GiRolledCloth className="me-2" />
  Layanan Cuci Karpet
</h2>
            <p className="text-secondary fs-5 mb-4">
              Solusi ideal untuk menjaga kebersihan dan kenyamanan rumah Anda. Karpet dicuci dengan teknik khusus agar kembali bersih, harum, dan bebas tungau.
            </p>
            <ul className="list-unstyled text-dark mb-4">
              <li><FaCouch className="text-info me-2" />Durasi: ± 3–5 Hari</li>
              <li><FaClock className="text-warning me-2" />Penanganan Khusus & Jemur Matahari</li>
              <li>📦 Bisa pickup langsung ke rumah</li>
              {/* <li>🧺 Harga mulai Rp15.000/m² (tergantung jenis karpet)</li> */}
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

export default KarpetPage;
