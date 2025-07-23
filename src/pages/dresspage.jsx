import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaWhatsapp } from "react-icons/fa";
import { GiDress } from "react-icons/gi";
import dress from "../assets/img/paket-dryclean.jpg";

const DressPage = () => (
  <div className="py-5 bg-light">
    <Container>
      <Row className="align-items-center">
        <Col md={6}><img src={dress} alt="Cuci Dress" className="img-fluid rounded shadow" /></Col>
        <Col md={6}>
          <h2 className="fw-bold text-primary"><GiDress className="me-2" />Layanan Cuci Dress</h2>
          <p className="text-muted">
            Punya dress mahal? Kami berikan perawatan khusus, cuci tangan, dan pengeringan gantung tanpa merusak warna maupun bentuk.
          </p>
          <ul>
            <li>✅ Aman untuk bahan lembut</li>
            <li>✅ Tanpa mesin pengering</li>
            <li>✅ Setrika uap </li>
            <li>✅ Setrika listrik </li>
          </ul>
          <Button variant="success" href="https://wa.me/6281234567890" target="_blank" className="rounded-pill">
            <FaWhatsapp className="me-2" /> Konsultasi Sekarang
          </Button>
        </Col>
      </Row>
    </Container>
  </div>
);

export default DressPage;
