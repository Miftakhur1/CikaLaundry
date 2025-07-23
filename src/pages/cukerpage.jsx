import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import PaketDrylean from '../assets/img/paket-dryclean.jpg'; // ganti sesuai path gambar dry clean

const cucikeringPage = () => {
  return (
    <div className="cuker py-5">
      <Container>
        <Row className="justify-content-center mb-4">
          <Col md={8} className="text-center">
            <h2 className="fw-bold text-primary">Layanan Cuci Kering (Dry Clean)</h2>
            <p className="text-muted">
              Perawatan khusus untuk pakaian berbahan sensitif yang tidak bisa dicuci dengan metode biasa. Aman dan profesional!
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="shadow-sm border-0 rounded-4 overflow-hidden">
              <Card.Img variant="top" src={PaketDrylean} />
              <Card.Body>
                <Card.Text>
                  Dry Clean cocok untuk bahan seperti sutra, jas, kebaya, atau gaun. Kami menggunakan bahan pembersih khusus untuk menjaga tekstur dan warna pakaian.
                </Card.Text>
                <ul>
                  <li>Proses profesional dan aman</li>
                  <li>Tanpa air – cocok untuk bahan sensitif</li>
                  <li>Perawatan khusus oleh staf berpengalaman</li>
                  <li>Wangi tahan lama dan bebas kusut</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default cucikeringPage;
