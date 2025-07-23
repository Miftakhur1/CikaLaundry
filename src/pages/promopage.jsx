import { Container, Row, Col, Button } from "react-bootstrap";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Karpet from "../assets/img/cuci-karpet.jpg";
import PaketDrylean from "../assets/img/paket-dryclean.jpg";

const promos = [
  {
    title: "Laundry Kiloan - Bonus 1Kg setiap 6Kg",
    desc:
      "Dapatkan 1Kg gratis setiap transaksi laundry kiloan minimal 6Kg. Hemat lebih banyak sambil menjaga kebersihan dari tanah, daki, dan debu yang menempel di pakaian Anda. Cocok untuk kebutuhan harian keluarga.",
    img: PaketDrylean,
    shareText:
      "Bonus 1Kg setiap Laundry 6Kg! Cika Laundry bikin hemat dan pakaian bersih total dari debu dan daki!",
   isNew: true,
    },
  {
    title: "Diskon 20% untuk Layanan Cuci Karpet",
    desc:
  "Karpet Anda terlihat kusam atau mulai berbau tidak sedap? Saatnya percayakan pada layanan cuci karpet profesional dari Cika Laundry! Kami menggunakan alat khusus berteknologi modern untuk mengangkat debu, kotoran, dan tungau hingga ke serat terdalam. Proses pencucian dilakukan langsung oleh tenaga ahli berpengalaman yang paham karakter bahan dan metode perawatannya. Hasilnya? Karpet Anda kembali bersih maksimal, harum, dan higienis. Dapatkan diskon 20% untuk layanan ini, hanya hingga akhir bulan!",
    img: Karpet,
    shareText:
      "Cuci Karpet Bersih Maksimal – Diskon 20% dari Cika Laundry! Dikerjakan dengan alat khusus & tenaga ahli. Promo terbatas!",
  isNew: true,
    },
  {
    title: "Diskon 10% Layanan Dry Clean Premium",
    desc:
  "Pakaian spesial seperti jas, gaun pesta, batik premium, hingga kebaya memerlukan perawatan khusus. Cika Laundry menghadirkan layanan dry clean eksklusif dengan chemical pilihan yang aman untuk bahan halus, menjaga warna, dan mempertahankan tekstur asli pakaian. Setiap item dicuci secara manual oleh staf terlatih, bukan dengan mesin biasa, sehingga noda membandel dapat dibersihkan secara menyeluruh. Tampil lebih percaya diri dengan pakaian bersih, wangi, dan terawat. Dapatkan diskon 10% hanya bulan ini!",
    img: PaketDrylean,
    shareText:
      "Dry Clean Profesional Diskon 10%! Cika Laundry pakai chemical pilihan & proses manual oleh tenaga ahli. Hasil bersih tanpa noda!",
   isNew: true,
    },
  
];

const PromoPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const pfImage = "/gh.jpg"; // Gambar latar hero promo

  const handleShare = (text) => {
    const link = "https://cikalaundry.id/promo";
    const fullText = `Promo Cika Laundry: ${text}\nLihat detail: ${link}`;

    if (navigator.share) {
      navigator.share({
        title: "Promo Cika Laundry",
        text: fullText,
        url: link,
      });
    } else {
      const waLink = `https://wa.me/?text=${encodeURIComponent(fullText)}`;
      window.open(waLink, "_blank");
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div
        className="profil-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${pfImage})`,
        }}
      >
        <h1 className="text-white mb-4 mt-5">Promo</h1>
      </div>

      {/* Promo Section */}
      <div className="promo-detail-page">
        <Container className="py-5">


        {promos.map((promo, idx) => (
  <Row
    key={idx}
    className="align-items-center text-center mb-5 p-4 rounded-2 shadow-sm"
    style={{ borderRadius:'30px',backgroundColor: "#e6f2ff" }}
    data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
  >
    <Col md={6} className={idx % 2 !== 0 ? "order-md-2" : ""}>
      <img
        src={promo.img}
        alt={promo.title}
        className="img-fluid rounded-4 shadow"
        style={{
          objectFit: "cover",
          width: "100%",
          height: "auto",
          justifyContent:"center"
        }}
      />
    </Col>

    <Col md={6} className="mt-4 mt-md-0">
      <h4 className="fw-bold text-dark mb-3">
  {promo.title}
  {promo.isNew && (
    <span className="badge bg-danger text-white ms-3" style={{ fontSize: "0.75rem" }}>
      NEW
    </span>
  )}
</h4>
      <p className="text-dark">{promo.desc}</p>

      <div className="d-flex flex-wrap gap-2 justify-content-center ">
        <Button
          variant="dark"
          className="rounded-pill"
          onClick={() => handleShare(promo.shareText)}
        >
          <i className="bi bi-share-fill me-2"></i>Bagikan Promo
        </Button>
        <Button
          variant="outline-success"
          className="rounded-pill"
          href="https://wa.me/6281234567890"
          target="_blank"
        >
          <i className="bi bi-whatsapp me-2"></i>Klaim Sekarang
        </Button>
      </div>
    </Col>
  </Row>
))}

        </Container>
      </div>
    </>
  );
};

export default PromoPage;
