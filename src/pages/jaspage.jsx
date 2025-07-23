import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaWhatsapp, FaUserTie } from "react-icons/fa";
import jas from "../assets/img/paket-dryclean.jpg";

const JasPage = () => (
  <div className="py-5 bg-white">
    <Container>
      <Row className="align-items-center">
        <Col md={6}><img src={jas} alt="Cuci Jas" className="img-fluid rounded shadow" /></Col>
        <Col md={6}>
          <h2 className="fw-bold text-primary"><FaUserTie className="me-2" />Layanan Cuci Jas</h2>
          <p className="text-muted">
            Jas Anda kami perlakukan dengan sangat hati-hati. Dry clean premium untuk menjaga tekstur dan bentuk.
          </p>
          <ul>
            <li>✅ Dry clean profesional</li>
            <li>✅ Setrika uap dan gantung</li>
            <li>✅ Cocok untuk jas kerja & pesta</li>
          </ul>
          <Button variant="success" href="https://wa.me/6281234567890" target="_blank" className="rounded-pill">
            <FaWhatsapp className="me-2" /> Pesan Sekarang
          </Button>
        </Col>
      </Row>
    </Container>
  </div>
);

export default JasPage;
