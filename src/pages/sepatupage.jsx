import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaShoePrints, FaWhatsapp } from "react-icons/fa6";
import sepatu from "../assets/img/sepatu.jpg";

const SepatuPage = () => (
  <div className="py-5 bg-white">
    <Container>
      <Row className="align-items-center">
        <Col md={6}><img src={sepatu} alt="Cuci Sepatu" className="img-fluid rounded shadow" /></Col>
        <Col md={6}>
          <h2 className="fw-bold text-primary"><FaShoePrints className="me-2" />Layanan Cuci Sepatu</h2>
          <p className="text-muted">Cuci sepatu sneakers, canvas, kulit, dan suede tanpa merusak warna atau bahan.</p>
          <ul>
            <li>✅ Deep Cleaning</li>
            <li>✅ Pengeringan manual</li>
            <li>✅ Aman untuk semua jenis sepatu</li>
          </ul>
          <Button variant="success" href="https://wa.me/6281234567890" target="_blank" className="rounded-pill">
            <FaWhatsapp className="me-2" /> Order via WhatsApp
          </Button>
        </Col>
      </Row>
    </Container>
  </div>
);

export default SepatuPage;
