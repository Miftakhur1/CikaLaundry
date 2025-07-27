import { useEffect ,useState} from "react";
import { Container,Modal, Row, Col, Button } from "react-bootstrap";
import { FaWhatsapp, FaBagShopping } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";    
import AOS from "aos";
import "aos/dist/aos.css";
import tas from "../assets/img/tas.jpeg";
import "../assets/css/tas.css";

const TasPage = () => {
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
    <div className="py-5 mt-5 bg-white tas-page">
      <Container>
        <Row className="align-items-center">
          <Col md={4} data-aos="fade-right">
            <img
              src={tas}
              alt="Layanan Cuci Tas"
              className="img-fluid rounded shadow"
              style={{ maxHeight: "500px", objectFit: "cover", width: "100%" }}
            />
          </Col>
          <Col md={8} data-aos="fade-left" className="text-center text-md-start">
            <h2 className="fw-bold mb-3 text-primary">
              <FaBagShopping className="me-2" />
              Layanan Cuci Tas
            </h2>
            <p className="mb-4 text-secondary fs-5">
              Tas Anda kotor, kusam, atau berjamur? Serahkan pada kami!
              Cika Laundry menghadirkan layanan <strong>Cuci Tas Profesional</strong> yang
              aman untuk bahan kulit, kanvas, suede, dan lainnya.
              Kami jamin tas Anda kembali bersih, segar, dan terawat.
            </p>
            <ul className="list-unstyled mb-4 text-dark">
              <li><FaCheckCircle className="text-success me-2" />Pembersihan menyeluruh hingga sela-sela</li>
              <li><FaCheckCircle className="text-success me-2" />Aman untuk bahan kulit, suede & kanvas</li>
              <li><FaCheckCircle className="text-success me-2" />Menggunakan cairan antibakteri & antijamur</li>
              <li><FaCheckCircle className="text-success me-2" />Dijemur alami tanpa mesin</li>
            </ul>
            <Button
              
              variant="outline-light"
              onClick={() => setShowModal(true)}
              className="rounded-pill px-4 py-2 d-inline-flex align-items-center justify-content-center gap-2"
              style={{ backgroundColor: "#25D366", border: "none" }}
            >
              <FaWhatsapp /> Pesan via WhatsApp
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

export default TasPage;
