import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaWhatsapp, FaHelmetSafety } from "react-icons/fa6";
import helm from "../assets/img/helm.png";

const HelmPage = () => (
  <div className="py-5 bg-light">
    <Container>
      <Row className="align-items-center">
        <Col md={6}><img src={helm} alt="Cuci Helm" className="img-fluid rounded shadow"  style={{ width: '80%', height:'600px'}}/></Col>
        <Col md={6}>
          <h2 className="fw-bold text-primary"><FaHelmetSafety className="me-2" />Layanan Cuci Helm</h2>
          <p className="text-muted">
            Helm Anda bau, kotor, atau berjamur? Kami hadir dengan cuci helm antibakteri, bebas jamur, dan wangi tahan lama.
          </p>
          <ul>
            <li>✅ Pembersihan luar dan dalam</li>
            <li>✅ Anti bakteri & jamur</li>
            <li>✅ Dijemur alami</li>
          </ul>
          <Button variant="success" href="https://wa.me/6281234567890" target="_blank" className="rounded-pill">
            <FaWhatsapp className="me-2" /> Pesan Sekarang
          </Button>
        </Col>
      </Row>
    </Container>
  </div>
);

export default HelmPage;
