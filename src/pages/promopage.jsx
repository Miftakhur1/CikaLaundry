import  { useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { FaShareAlt, FaWhatsapp } from "react-icons/fa";
import "../assets/css/promo.css";

import PaketDrylean from "../assets/img/paket-dryclean.jpg";
import Karpet from "../assets/img/cuci-karpet.jpg";

const pfImage = "/gh.jpg";

const promoList = [
  {
    title: "Laundry Kiloan - Bonus 1Kg setiap 6Kg",
    desc:
      "Nikmati promo spesial dari Cika Laundry! Dapatkan bonus 1Kg gratis untuk setiap 6Kg laundry yang Anda lakukan. Cocok untuk keluarga atau laundry besar, kami pastikan pakaian Anda bersih, wangi, dan siap pakai dalam waktu singkat.",
    img: PaketDrylean,
    shareText:
      "Laundry Kiloan Spesial – Dapatkan 1Kg gratis untuk setiap 6Kg! Bersih, wangi, dan cepat. Promo terbatas!",
    isNew: true,
  },
  {
    title: "Diskon 20% untuk Layanan Cuci Karpet",
    desc:
      "Karpet Anda terlihat kusam atau mulai berbau tidak sedap? Saatnya percayakan pada layanan cuci karpet profesional dari Cika Laundry! Kami menggunakan alat khusus berteknologi modern untuk mengangkat debu, kotoran, dan tungau hingga ke serat terdalam. Dapatkan diskon 20% hingga akhir bulan!",
    img: Karpet,
    shareText:
      "Cuci Karpet Bersih Maksimal – Diskon 20% dari Cika Laundry! Dikerjakan dengan alat khusus & tenaga ahli. Promo terbatas!",
    isNew: true,
  },
  {
    title: "Diskon 10% Layanan Dry Clean Premium",
    desc:
      "Pakaian spesial seperti jas, gaun pesta, batik premium, hingga kebaya memerlukan perawatan khusus. Cika Laundry menghadirkan layanan dry clean eksklusif dengan chemical pilihan yang aman. Dapatkan diskon 10% hanya bulan ini!",
    img: PaketDrylean,
    shareText:
      "Dry Clean Profesional Diskon 10%! Cika Laundry pakai chemical pilihan & proses manual oleh tenaga ahli. Hasil bersih tanpa noda!",
  },
];

const outlets = [
  { name: "Cika Laundry Hasanudin", phone: "628156505562" },
  { name: "Cika Laundry Puri Anjasmoro", phone: "628156505562" },
  { name: "Cika Laundry Arteri", phone: "6285729315058" },
  { name: "Cika Laundry Graha Wahid", phone: "628156602666" },
  { name: "Cika Laundry Ngaliyan", phone: "628156603444" },
  { name: "WhatsApp Karpet, Sofa, Springbed", phone: "62816784455" },
];

const handleShare = (text) => {
  const link = "https://cikalaundry.id/promo";
  const fullText = `Promo Cika Laundry: ${text}\nLihat detail: ${link}`;

  if (navigator.share) {
    navigator
      .share({
        title: "Promo Cika Laundry",
        text: fullText,
        url: link,
      })
      .catch((err) => console.log("Share failed:", err));
  } else {
    alert("Fitur berbagi tidak didukung di perangkat ini.");
  }
};

const PromoPage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="promo-section">
      {/* Hero */}
      <div
        className="promo-hero d-flex align-items-center justify-content-center text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${pfImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "300px",
        }}
      >
        <h1 className= "text-white fw-bold mb-4 mt-5">Promo</h1>
      </div>

      {/* Judul dan Deskripsi */}
      <Container className="mt-5">
        
        <h4 className="text-center text-muted mb-5" >
          🎉🎉Dapatkan penawaran spesial mulai dari diskon, bonus kiloan, hingga cuci karpet hemat!
          Yuk manfaatkan promonya sebelum berakhir! 💨
        </h4>

        {/* Promo Cards */}
        <Row>
          {promoList.map((promo, idx) => (
            <Col md={12} key={idx} className="mb-4">
              <div className="promo-card">
                <div className="promo-image-wrapper">
                  {promo.isNew && <span className="promo-badge pulse-badge">Baru</span>}
                  <img src={promo.img} alt={promo.title} className="promo-image" />
                </div>

                <div className="promo-content">
                  <h3 className="fw-semibold">{promo.title}</h3>
                  <p className="text-muted">{promo.desc}</p>
                  <div className="promo-buttons mt-3 d-flex flex-wrap gap-2">
                    <Button variant="primary" onClick={() => handleShare(promo.shareText)}>
                      <FaShareAlt className="me-2" /> Bagikan Promo
                    </Button>
                    <Button variant="success" onClick={() => setShowModal(true)}>
                      <FaWhatsapp className="me-2" /> WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* WhatsApp Modal */}
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
    </section>
  );
};

export default PromoPage;
