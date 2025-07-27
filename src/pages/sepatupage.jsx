import  { useEffect ,useState} from "react";
import { Container,Modal, Row, Col, Button } from "react-bootstrap";
import { FaShoePrints, FaWhatsapp } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";    
import AOS from "aos";
import "aos/dist/aos.css";

import sepatu from "../assets/img/sepatu.jpg";

const SepatuPage = () => {
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
    <div className="py-5 mt-5 bg-white sepatu-page">
      <Container>
        <Row className="align-items-center mb-5">
          <Col md={4} data-aos="fade-right">
            <img src={sepatu} alt="Cuci Sepatu" className="img-fluid rounded shadow" />
          </Col>
          <Col md={8} data-aos="fade-left" className="text-center text-md-start">
            <h2 className="fw-bold text-primary mb-3">
              <FaShoePrints className="me-2" />Layanan Cuci Sepatu Profesional
            </h2>
            <p className="text-secondary fs-5 mb-4">
              Percayakan sepatu Anda kepada tim profesional kami! Kami membersihkan dengan teknik khusus untuk berbagai jenis bahan tanpa merusak warna, bentuk, atau tekstur.
            </p>
            <ul className="list-unstyled text-dark mb-4">
              <li><FaCheckCircle className="text-success me-2" />Deep Clean & Treatment</li>
              <li><FaCheckCircle className="text-success me-2" />Aman untuk bahan canvas, kulit, suede, mesh, dll</li>
              <li><FaCheckCircle className="text-success me-2" />Pengeringan alami, tidak merusak lem</li>
              {/* <li><FaCheckCircle className="text-success me-2" />Harga mulai Rp50.000-Rp80.000 per pasang (tergantung sepatu)</li> */}
            </ul>
            <Button
               variant="outline-light"
              onClick={() => setShowModal(true)}
              className="rounded-pill px-4 py-2 d-inline-flex align-items-center justify-content-center gap-2"
              style={{ backgroundColor: "#25D366", border: "none" }}
            >
              <FaWhatsapp /> Order via WhatsApp
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

export default SepatuPage;
