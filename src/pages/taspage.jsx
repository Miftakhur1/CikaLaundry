import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaWhatsapp, FaBagShopping } from "react-icons/fa6";
import tas from "../assets/img/tas.jpeg";
import "../dist/css/tas.css";

const TasPage = () => {
  return (
    <div className="tas-page py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6} data-aos="fade-right">
            <img
              src={tas}
              alt="Layanan Cuci Tas"
              className="img-fluid rounded shadow"
            />
          </Col>
          <Col md={6} data-aos="fade-left" className="mt-4 mt-md-0">
            <h2 className="fw-bold mb-3 text-primary">
              <FaBagShopping className="me-2" />
              Layanan Cuci Tas
            </h2>
            <p className="mb-4 text-muted">
              Tas Anda kotor, kusam, atau berjamur? Serahkan pada kami!
              Cika Laundry menghadirkan layanan **Cuci Tas Profesional** yang
              aman untuk bahan kulit, kanvas, suede, dan lainnya.
              Kami menjamin tas Anda kembali bersih, segar, dan terawat.
            </p>
            <ul className="mb-4">
              <li> Pembersihan mendalam hingga ke sela-sela</li>
              <li> Perawatan bahan kulit dan kanvas</li>
              <li> Antibakteri dan antijamur</li>
              <li> Pengeringan alami (tanpa mesin)</li>
            </ul>
            <Button
              variant="success"
              href="https://wa.me/6281234567890"
              target="_blank"
              className="rounded-pill px-4 py-2"
            >
              <FaWhatsapp className="me-2" />
              Pesan via WhatsApp
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TasPage;
