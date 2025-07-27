import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/css/layanan.css";
import { FaStar } from "react-icons/fa";

// Gambar
import pfImage from "/ct.png"; // Ganti sesuai nama hero image
import PaketRegulerImg from "../assets/img/regu.png";
import PaketExpress from "../assets/img/paket-express.jpg";
import PaketDrylean from "../assets/img/paket-dryclean.jpg";
import dress from "../assets/img/dress.png";
import Karpet from "../assets/img/kr.jpg";
import helm from "../assets/img/helm.png";
import bc from "../assets/img/bedcover.png";
import tas from "../assets/img/tas.jpeg";
import sepatu from "../assets/img/sepatu.jpg";
import sofa from "../assets/img/sf.png";
import jas from "../assets/img/jas.png";
import spr from "../assets/img/spr.png";
import str from "../assets/img/str.png";
const layananList = [
  { src: PaketRegulerImg, title: "Paket Premium", slug: "/premium", kategori: "Kiloan",bestSeller: true },
  { src: PaketRegulerImg, title: "Paket Reguler", slug: "/reguler", kategori: "Kiloan",bestSeller: true },
  { src: PaketExpress, title: "Paket Express", slug: "/express", kategori: "Kiloan",bestSeller: true },
  { src: PaketDrylean, title: "Cuci Kering", slug: "/cuker", kategori: "Kiloan",bestSeller: true },
  { src: str, title: "Setrika", slug: "/setrika", kategori: "Kiloan",bestSeller: true },
  { src: bc, title: "Bed Cover",slug: "/bc", kategori: "Satuan" ,bestSeller: true},
  { src: jas, title: "Jas", slug:'/jas', kategori: "Satuan" ,bestSeller: true},
  { src: sepatu, title: "Sepatu",slug: '/sepatu', kategori: "Satuan" ,bestSeller: true},
  { src: helm, title: "Helm",slug: '/helm', kategori: "Satuan" ,bestSeller: true},
  { src: tas, title: "Tas", slug: '/tas',kategori: "Satuan",bestSeller: true },
  { src: Karpet, title: "Cuci Karpet",slug: '/karpet', kategori: "Lainnya",bestSeller: true },
  { src: sofa, title: "Cuci Sofa", kategori: "Lainnya" },
  { src: spr, title: "Springbed", kategori: "Lainnya" },
  { src: dress, title: "Dress",slug: '/dress', kategori: "Satuan",bestSeller: true },
];

const KategoriSection = ({ title, items }) => (
  <section className="my-5">
  <h3 className="fw-bold text-center mb-4">{title}</h3>
  
  <div className="layanan-grid">
    {items.map((item, idx) => (
      <div key={idx} className="layanan-card-wrapper">
        <Card className="h-100 shadow-sm layanan-card position-relative">
          {item.bestSeller && (
            <span className="badge-best-seller position-absolute top-0 start-0 m-2">
              <FaStar className="me-1" />Best Seller
            </span>
          )}
          <Card.Img
            variant="top"
            src={item.src}
            alt={item.title}
            style={{ height: "180px", objectFit: "cover" }}
          />
          <Card.Body className="text-center">
            <Card.Title className="fw-semibold">{item.title}</Card.Title>
            {item.slug ? (
              <Link to={item.slug} className="btn btn-outline-primary btn-xs mt-2">
                Lihat Detail
              </Link>
            ) : (
              <div className="text-muted mt-2 small">Hubungi admin</div>
            )}
          </Card.Body>
        </Card>
      </div>
    ))}
  </div>
</section>

);

const LayananPage = () => {
  const layananKiloan = layananList.filter((l) => l.kategori === "Kiloan");
  const layananSatuan = layananList.filter((l) => l.kategori === "Satuan");
  const layananLainnya = layananList.filter((l) => l.kategori === "Lainnya");

  return (
    <div className="layanan-page">
      
      {/* Hero */}
      <div
        className="profil-hero"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url(${pfImage})` }}
      >
        <h1 className= "text-white mb-4 mt-5">Layanan</h1>
      </div>

      {/* Konten Layanan */}
      <Container className="py-5">
        <KategoriSection title="Layanan Kiloan" items={layananKiloan} />
        <KategoriSection title="Layanan Satuan" items={layananSatuan} />
        <KategoriSection title="Layanan Lainnya" items={layananLainnya} />
      </Container>
    </div>
  );
};

export default LayananPage;
