import { useEffect, useState ,useRef } from "react";
import { Container, Row, Col, Card, Button, Accordion, Modal  } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaHandsWash,
  FaTag,
  FaInstagram,
  FaTiktok,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp
} from "react-icons/fa";
import { NavLink,useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


// Images
import Hero1 from "../assets/img/pf2.jpg";
import Hero2 from "../assets/img/pf1.jpg";
import LogoImage from "../assets/img/LOGO.png";
import PaketRegulerImg from "../assets/img/paket-reguler.jpg";
import PaketExpress from "../assets/img/paket-express.jpg";
import PaketDrylean from "../assets/img/paket-dryclean.jpg";
import Karpet from "../assets/img/cuci-karpet.jpg";
import helm from "../assets/img/helm.png";
import sepatu from "../assets/img/sepatu.jpg";
import tas from "../assets/img/tas.jpeg";
import bc from "../assets/img/bedcover.png";

const Homepage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
const testimonials = [
  { name: "Dewi Lestari", time: "1 minggu lalu", text: "Pelayanan ramah, hasil cucian rapi dan wangi. Antar jemput cepat banget!", rating: 5 },
  { name: "Rian Pratama", time: "3 minggu lalu", text: "Cocok buat laundry harian, bersih dan tepat waktu.", rating: 4 },
  { name: "Nina Rahma", time: "2 minggu lalu", text: "Langganan terus. Puas banget!", rating: 5 },
  { name: "Andre Yudha", time: "4 hari lalu", text: "Order via WA, langsung diambil. Hasilnya mantap.", rating: 4 },
  { name: "Ayu Meilani", time: "5 hari lalu", text: "Wangi banget dan cepat! Recommended.", rating: 5 },
];
const navigate = useNavigate();
const outlets = [
  { name: "Cika Laundry Hasanudin", link: "https://www.google.com/maps/place/Cika+Laundry+Hasanudin/@-6.9694931,110.412275,17z/data=!4m8!3m7!1s0x2e70f4b1965893cb:0x80691b3a260f010!8m2!3d-6.9694931!4d110.412275!9m1!1b1!16s%2Fg%2F11ddzhfwgk?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D" },
  { name: "Cika Laundry Puri Anjasmoro", link: "https://www.google.com/maps/place/Cika+Laundry/@-6.9812906,110.3867651,17z/data=!4m8!3m7!1s0x2e708b321b92b399:0xce97f11af2fe9624!8m2!3d-6.9812906!4d110.3915287!9m1!1b1!16s%2Fg%2F11dynt65m9?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D" },
  { name: "Cika Laundry Arteri", link: "https://www.google.com/maps/place/Cika+Laundry/@-7.0057252,110.4677705,17z/data=!4m8!3m7!1s0x2e708cfcfb3cc257:0x8fe9a1c70a24f7ed!8m2!3d-7.0057305!4d110.4703454!9m1!1b1!16s%2Fg%2F1hm6ggf_l?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D" },
  { name: "Cika Laundry Graha wahid", link: "https://www.google.com/maps/place/Cika+Laundry+Graha+Wahid/@-7.0247046,110.4614354,17z/data=!4m8!3m7!1s0x2e708dfcd89e13b3:0x1f5d0d963ad082e7!8m2!3d-7.0247046!4d110.4614354!9m1!1b1!16s%2Fg%2F11kpj3clg0?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D" },
  { name: "Cika Laundry Ngaliyan", link: "https://www.google.com/maps/place/Cika+Laundry+%26+Drycleaning/@-6.9985577,110.3409471,17z/data=!4m8!3m7!1s0x2e708abd5249617d:0xef3c564fb14d6fc9!8m2!3d-6.998563!4d110.343522!9m1!1b1!16s%2Fg%2F1hm2032j0?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D" },
];
  const pfImages = [Hero1, Hero2, Karpet, helm, PaketDrylean, PaketExpress];
  const [currentHero, setCurrentHero] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [activeMap, setActiveMap] = useState("");
   const mapRef = useRef(null);

   const promoData = [
  {
    image: PaketRegulerImg,
    title: "Bonus 1Kg untuk Laundry 6Kg",
    description: "Dapatkan 1Kg gratis setiap transaksi laundry minimal 6Kg. Lebih hemat dan praktis!",
    date: "1 Mei 2025",
  },
  {
    image: Karpet,
    title: "Diskon 20% Cuci Karpet",
    description: "Bersihkan karpet rumah Anda dengan harga lebih hemat. Promo terbatas!",
    date: "5 Mei 2025",
  },
  {
    image: PaketDrylean,
    title: "Diskon 10% Cuci DryClean",
    description: " Punya jas, dress, atau gaun mahal? Saatnya dry clean dengan harga lebih hemat. Diskon hanya untuk pelanggan setia di bulan ini!",
    date: "10 Mei 2025",
  },
];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % pfImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  // Set default map once outlets are available
useEffect(() => {
  if (outlets && outlets.length > 0 && !activeMap) {
    setActiveMap(outlets[0].mapsEmbed);
  }
}, [outlets, activeMap]);

useEffect(() => {
  const hash = window.location.hash;
  if (hash) {
    const target = document.querySelector(hash);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }
}, []);
  
const handleShow = () => setShowModal(true);
const handleClose = () => setShowModal(false);
  return (
    <div className="homepage ">

     {/* === HERO SECTION === */}

  <header className="py-5 hero-section text-center">
  <Container>
    <div className="header-box mx-auto" style={{ maxWidth: '900px' }}>
      <img src={LogoImage} className="logo-header" style={{ animation: 'float 3s ease-in-out infinite' }} />

      <h1
        className="fw-bold mb-4"
        data-aos="fade-left"
        data-aos-delay="100"
      >
        Cika Laundry, <br /> Bukan Sekadar Cuci Biasa!
      </h1>
      <p className="lead mb-4" data-aos="fade-right" data-aos-delay="200">
        Nikmati layanan Express, Antar-Jemput Gratis, serta <br />
        Jaminan Kepuasan Tanpa kerumitan. <br />
        Kami hadir dengan garansi 100% kepuasan atau uang kembali.
      </p>
      <div
        className="d-flex gap-3 justify-content-center flex-wrap"
        data-aos="zoom-in"
        data-aos-delay="400"
      >
        <a
          href="#layanan"
          className="btn px-3 py-2 rounded-pill text-white d-flex justify-content-center align-items-center gap-2 text-center"
          style={{ backgroundColor: "#2196f3" }}
        >
          <FaHandsWash /> Lihat Layanan
        </a>

        <a
          href="/promo"
          className="btn px-4 py-2 rounded-pill text-dark d-flex justify-content-center align-items-center gap-2 text-center"
          style={{ backgroundColor: "#ffca28" }}
        >
          <FaTag /> Lihat Promo
        </a>
      </div>
    </div>
  </Container>
</header>



<div
  className="jam-section"
  data-aos="fade-up"
  data-aos-delay="200"
>
  <span className="bi bi-watch fw-bold fs-4 text-black text-center mt-5 mb-4">
    Jam Operasional : <span className="text-warning">07.00 - 22.00</span>
  </span>

</div>



{/* profill */}
<h2 className="fw-bold elegant-title text-center text-dark"
>
  Profil Cika Laundry
</h2>
 

<p className="mt-3 text-dark text-center fs-6">
  Cika Laundry berkomitmen memberikan pelayanan terbaik bagi setiap pelanggan. Kami hadir dengan <span className="fw-bold text-primary">jaminan 100% uang kembali</span>.
</p>

<p className="text-dark text-center fs-6">
  Apabila terjadi kehilangan, kerusakan, atau keterlambatan dari estimasi layanan yang telah disepakati.
</p>

<p className="text-dark text-center fs-6">
  Kepercayaan Anda adalah prioritas kami. Setiap pakaian yang Anda titipkan akan kami tangani secara profesional dan penuh tanggung jawab, <br></br>karena bagi kami, kepuasan pelanggan adalah bagian dari kualitas layanan.
</p>


<section className="profil-section py-4 bg-white">
  <Container> 
    <Row className="align-items-center">
      <Col md={6} data-aos="fade-right">
      
      <div className="img-profil-wrapper shadow-sm ">
        <img
          src={pfImages[currentHero]} // ganti jika ingin pakai gambar khusus profil
          alt="Cika Laundry"
          className="img-fluid w-100"
        />
        </div>
      </Col>
      <Col md={5} data-aos="fade-left" className="mt-4  d-inline-block justify">
        
        <h4 className="fw-semibold mb-3 text-primary">Professional Cleaning Service</h4>
        <p className="text-black ">
          Cika Laundry adalah perusahaan jasa laundry profesional yang berdiri sejak tahun 2007. Dengan pengalaman lebih dari 15 tahun, kami berkomitmen untuk memberikan <strong>pelayanan terbaik </strong>dengan harga yang kompetitif dan kualitas yang tak sekadar “sekadar mencuci”.
Kami menawarkan berbagai layanan lengkap mulai dari laundry pakaian harian hingga <strong>cuci karpet, sofa, dan spring bed </strong>semua dikerjakan dengan sistem modern, tenaga ahli, dan standar kebersihan tinggi yang berfokus pada kepuasan pelanggan.
<br></br>
Tak hanya itu, Cika Laundry juga menyediakan layanan Antar-Jemput Gratis untuk wilayah Kota Semarang dan sekitarnya. Layanan ini kami hadirkan khusus untuk Anda yang memiliki kesibukan tinggi, agar tetap bisa menikmati pakaian bersih dan wangi tanpa harus repot keluar rumah.</p>
        <div className="d-flex justify-content-center flex-wrap gap-3 ">
  <a
    href="https://wa.me/62816784455"
    target="_blank"
    rel="noopener noreferrer"
    className="btn-wa btn-success d-flex align-items-center gap-2 rounded-pill px-3 py-2"
    title="Chat via WhatsApp"
  >
    <i className="bi bi-whatsapp"></i> WhatsApp Karpet
  </a>
  <a
    href="#hubungi-kami"
    className="btn-wa btn-success d-flex align-items-center gap-2 rounded-pill px-3 py-2"
    title="Chat via WhatsApp"
  >
    <i className="bi bi-whatsapp"></i> WhatsApp Laundry
  </a>
</div>
      </Col>
    </Row>
  </Container>
</section>
{/* ------------------layanan---------------------- */}
<section id="layanan" className="layanan-section py-5 bg-light">
  <Container>
    <div className="text-center mb-4">
      <h2 className="fw-bold elegant-title" data-aos="fade-up">Layanan Kami</h2>
    </div>

    {/* === KATEGORI KILOAN === */}
    <h5 className="fw-bold text-primary text-center mt-5 mb-3">Layanan Kiloan</h5>
    <p className="text-center  mb-4 px-3">
      Solusi hemat dan praktis untuk cucian harian Anda. Kami pastikan setiap pakaian bersih dari debu, tanah, hingga daki, 
      dengan proses pencucian yang higienis dan teliti agar tetap nyaman dipakai seharian.
    </p>
    <Swiper spaceBetween={15} slidesPerView={'auto'} grabCursor={true} freeMode={true}>
      {[ { src: PaketRegulerImg, title: 'Paket Reguler', slug: '/reguler' },
  { src: PaketExpress, title: 'Paket Express', slug: '/express' },
  { src: PaketDrylean, title: 'Cuci Kering', slug: '/cuker' },
  { src: bc, title: 'Setrika', slug: '/setrika' },
      ].map((item, idx) => (
        <SwiperSlide key={idx} style={{ display: 'flex', justifyContent: 'center', width: '230px' }}>
          <Card className="shadow-sm border-0 rounded-4 overflow-hidden text-center">
            <Card.Img variant="top" src={item.src} className="img-layanan" />
            <Card.Body>
  <Card.Title className="fw-semibold text-black">
    {item.title}
  </Card.Title>

  {item.slug ? (
    <button
      className="btn btn-primary rounded-pill px-4 mt-2"
      onClick={() => navigate(item.slug)}
    >
      Detail
    </button>
  ) : (
    <div className="text-muted mt-2 small">Hubungi admin</div>
  )}
</Card.Body>

          </Card>
        </SwiperSlide>
      ))}
    </Swiper>

    {/* === KATEGORI SATUAN === */}
    <h5 className="fw-bold text-primary text-center mt-5 mb-3">Layanan Satuan</h5>
    <p className="text-center  mb-4 px-3">
      Untuk pakaian atau barang spesial seperti jas, gaun, boneka, sepatu, hingga bedcover kami gunakan bahan pilihan 
      dan teknik pencucian khusus agar tetap wangi, bersih maksimal, dan awet seperti baru.
    </p>
    <Swiper spaceBetween={15} slidesPerView={'auto'} grabCursor={true} freeMode={true}>
      {[
        { src: bc, title: 'Cuci BedCover',slug: "/bc" },
        { src: sepatu, title: 'Cuci Sepatu',slug:"/sepatu" },
        { src: PaketDrylean, title: 'Dress',slug:"/dress"},
        { src: tas, title: 'Cuci Tas',slug:"/tas" },
        
        { src: PaketDrylean, title: 'Jas',slug:"/jas" },
        { src: helm, title: 'Cuci Helm',slug:"/helm" },
      ].map((item, idx) => (
        <SwiperSlide key={idx} style={{ display: 'flex', justifyContent: 'center', width: '230px' }}>
          <Card className="layanan-card text-center">
            <Card.Img variant="top" src={item.src} className="img-layanan" />
            <Card.Body>
  <Card.Title className="fw-semibold text-black">
    {item.title}
  </Card.Title>

  {item.slug ? (
    <button
      className="btn btn-primary rounded-pill px-4 mt-2"
      onClick={() => navigate(item.slug)}
    >
      Detail
    </button>
  ) : (
    <div className="text-muted mt-2 small">Hubungi admin</div>
  )}
</Card.Body>

          </Card>
        </SwiperSlide>
      ))}
    </Swiper>

    {/* === KATEGORI LAINNYA === */}
    <h5 className="fw-bold text-primary text-center mt-5 mb-3">Layanan Lainnya</h5>
    <p className="text-center mb-4 px-3">
      Layanan khusus untuk item besar seperti karpet, sofa, hingga springbed. Semua proses ditangani oleh tenaga profesional 
      yang berpengalaman, menggunakan alat dan teknik terbaik untuk hasil bersih menyeluruh.
    </p>
    <Swiper spaceBetween={12} slidesPerView={'auto'} grabCursor={true} freeMode={true}>
      {[
        { src: Karpet, title: 'Cuci Karpet',slug: '/karpet' },
        { src: PaketDrylean, title: 'Cuci Sofa' },
        { src: PaketDrylean, title: 'Springbed' },
      ].map((item, idx) => (
        <SwiperSlide key={idx} style={{ display: 'flex', justifyContent: 'center', width: '230px' }}>
          <Card className="layanan-card text-center">
            <Card.Img variant="top" src={item.src} className="img-layanan" />
            <Card.Body>
  <Card.Title className="fw-semibold text-black">
    {item.title}
  </Card.Title>

  {item.slug ? (
    <button
      className="btn btn-primary rounded-pill px-4 mt-2"
      onClick={() => navigate(item.slug)}
    >
      Detail
    </button>
  ) : (
    <div className="text-muted mt-2 small">Hubungi admin</div>
  )}
</Card.Body>

          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  </Container>
</section>


      
    {/* testimoni */}
<section className="outlet-testimonial py-5 bg-light" data-aos="fade-up">
      <Container>
        <div className="text-center mb-4">
          <h3 className="fw-bold elegant-title">Testimoni</h3>
          <p className="text-black">
            Yuk, simak pengalaman pelanggan yang puas dengan layanan Cika Laundry. Bukti nyata kualitas dan pelayanan terbaik kami!
          </p>
        </div>
        <Row className="align-items-center position-relative">
          <Col lg={3} className="text-center mb-4 mb-lg-0">
            <img src={LogoImage} alt="Logo" width="100" />
            <div className="text-warning fs-5 mt-2">★★★★★</div>
            <h5 className="fw-bold mt-2">500++ reviews</h5>
            <Button variant="primary" className="mt-3 rounded-pill px-4" onClick={handleShow}>
              <i className="bi bi-star-fill me-2"></i> Review Us
            </Button>
          </Col>

          <Col lg={8}>
            <div className="d-flex overflow-auto testimonial-scroll gap-3 pb-3 px-1">
              {testimonials.filter((rev) => rev.rating >= 4).map((rev, i) => (
                <div
                  key={i}
                  className="bg-white rounded shadow-sm p-3 testimonial-card"
                  data-aos="zoom-in"
                  data-aos-delay={i * 100}
                  style={{ minWidth: "250px", maxWidth: "300px" }}
                >
                  <div className="d-flex align-items-center mb-2">
                    <img
                      src={`https://i.pravatar.cc/150?img=${i + 10}`}
                      alt={rev.name}
                      className="rounded-circle me-2"
                      style={{ width: 40, height: 40, objectFit: "cover" }}
                    />
                    <div>
                      <h6 className="mb-0">{rev.name}</h6>
                      <small className="text-muted">{rev.time}</small>
                    </div>
                  </div>
                  <div className="text-warning mb-1">★★★★★</div>
                  <p className="mb-0 small">{rev.text}</p>
                </div>
              ))}
            </div>
          </Col>
        </Row>

        {/* Modal Outlet Review */}
        <Modal show={showModal} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Pilih Outlet untuk Memberi Ulasan</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {outlets.map((outlet, idx) => (
              <Button
                key={idx}
                href={outlet.link}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline-primary"
                className="d-block w-100 mb-2"
                onClick={handleClose}
              >
                {outlet.name}
              </Button>
            ))}
          </Modal.Body>
        </Modal>
      </Container>
    </section>

{/* Promo */}
<section
  className="promo-section py-4"
  style={{
    background: "linear-gradient(135deg, #e3f2fd, #bbdefb)",
    color: "#222",
  }}
  data-aos="fade-up"
>
  <Container>
    <div className="text-center mb-4">
      <h3 className="fw-bold elegant-title text-center mb-3">Promo Spesial</h3>
      <p className="text-black">
        Nikmati promo hemat dari Cika Laundry – praktis, berkualitas, dan penuh keuntungan
      </p>
    </div>

    <div className="promo-container-horizontal">
      {promoData.map((item, index) => (
        <div key={index} className="promo-item-horizontal">
          <img src={item.image} alt={item.title} />
          <div className="promo-content">
            <h5 className="fw-semibold">{item.title}</h5>
            <p>{item.description}</p>
            <small className="text-muted">Launching sejak: {item.date}</small>
            <br />
            <button className="btn btn-light mt-2">Lihat Detail</button>
          </div>
        </div>
      ))}
    </div>
  </Container>
</section>



                {/* contact */}

    <section id="hubungi-kami" className="contact-section py-3 text-light" data-aos="fade-up" style={{ backgroundColor: "#56c8f98d" }}>
  <Container>
    <div className="text-center mb-5">
      <h3  className="fw-bold elegant-title mt-5">Hubungi Kami</h3>
      <p className="text-black mt-3">
        Dimanapun Anda berada, Cika Laundry selalu dekat untuk Anda. Cari lokasi terdekat dan nikmati layanan laundry tanpa ribet!
      </p>
    </div>

    <Row className="justify-content-center px-3">
      {/* Col 1: Vertical Cards */}
      <Col md={4} className="mb-4">
        {[
          {
            name: "Hasanudin",
            address: "Jl. Hasanudin No.G11, Semarang Utara",
            whatsapp: "628156505562",
            mapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.043862433234!2d110.41005637598784!3d-6.969491768147202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70f4b1965893cb%3A0x80691b3a260f010!2sCika%20Laundry%20Hasanudin!5e0!3m2!1sid!2sid!4v1721200000000",
            color: "success",
          },
          {
            name: "Puri Anjasmoro",
            address: "Jl. Anjasmoro Raya No.5, Semarang Barat",
            whatsapp: "628156690369",
            mapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.400000000000!2d110.3889538!3d-6.9812906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b321b92b399%3A0xce97f11af2fe9624!2sCika+Laundry!5e0!3m2!1sid!2sid!4v1721300000000",
            color: "success",
          },
          {
            name: "Grahawahid",
            address: "Jl. Kedungmundu No.28B, Tembalang",
            whatsapp: "628156602666",
            mapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.100000000000!2d110.4588605!3d-7.0247046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708dfcd89e13b3%3A0x1f5d0d963ad082e7!2sCika+Laundry+Graha+Wahid!5e0!3m2!1sid!2sid!4v1721300000002",
            color: "success",
          },
          {
            name: "Arteri Soekarno Hatta",
            address: "Jl. Soekarno Hatta No.61, Palebon",
            whatsapp: "6285729315058",
            mapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.001100000000!2d110.4677705!3d-7.0057305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708cfcfb3cc257%3A0x8fe9a1c70a24f7ed!2sCika+Laundry+Arteri!5e0!3m2!1sid!2sid!4v1721300000001",
            color: "success",
          },
          {
            name: "Ngaliyan",
            address: "Jl. Prof. Dr. Hamka Ngaliyan",
            whatsapp: "628156603444",
             mapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.010000000000!2d110.3409471!3d-6.998563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708abd5249617d%3A0xef3c564fb14d6fc9!2sCika+Laundry+%26+Drycleaning+Ngaliyan!5e0!3m2!1sid!2sid!4v1721300000003",
            color: "success",
          },

        ].map((outlet, i) => (
        <Card key={i} className="mb-4 bg-white text-light align-content-center shadow-sm border-0 rounded-4 ">
          <Card.Body>
            <div className="d-flex">
              <i className="bi bi-geo-alt-fill fs-2 text-info me-3"></i>
              <div>
                <h5 className="fw-semibold text-black mb-1">Cika Laundry - {outlet.name}</h5>
                <p className="text-black small mb-1">{outlet.address}</p>
                <div className="d-flex gap-2 flex-wrap">
                  <Button
                    href={`https://wa.me/${outlet.whatsapp}`}
                    target="_blank"
                    variant={outlet.color}
                    className="rounded-pill px-3 py-2"
                  >
                    <i className="bi bi-whatsapp me-2"></i> WhatsApp
                  </Button>
                  <Button
                    variant="outline-primary"
                    className="btnn rounded-pill px-4 py-2"
                    onClick={() => {
                      setActiveMap(outlet.mapsEmbed);
                      mapRef.current?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <i className="bi bi-map me-2"></i> Maps
                  </Button>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      ))}
    </Col>

    {/* Kanan: Google Maps */}
    <Col md={7}>
       <div ref={mapRef} className=" map-wrapper shadow rounded-5 overflow-hidden">
        {activeMap ? (
          <iframe
            title="Cika Laundry Map"
            src={activeMap}
            width="100%"
            height="780"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        ) : (
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ height: "780px", backgroundColor: "#f8f9fa" }}
          >
            <span className="text-muted">Klik Tombol Maps</span>
          </div>
        )}
      </div>
    </Col>
  </Row>

  
  </Container>

</section>

  <section className="faq-section px-3 px-md-5 py-5">
  <h5 className="fw-bold mb-4 text-center">Pertanyaan yang Sering Diajukan (FAQ)</h5>
  <Accordion defaultActiveKey="0" flush>
    <Accordion.Item eventKey="0">
      <Accordion.Header>
        Apa saja layanan yang tersedia di Cika Laundry?
      </Accordion.Header>
      <Accordion.Body>
        Cika Laundry menyediakan berbagai layanan seperti cuci kiloan, laundry satuan,
        laundry express, cuci sepatu, setrika, dan dry cleaning. Semua layanan dilakukan
        dengan standar profesional.
      </Accordion.Body>
    </Accordion.Item>

    <Accordion.Item eventKey="1">
      <Accordion.Header>
        Berapa estimasi waktu pengerjaan laundry?
      </Accordion.Header>
      <Accordion.Body>
        Estimasi waktu tergantung pada layanan yang dipilih. Untuk layanan reguler, estimasi
        1–2 hari kerja. Untuk layanan express, selesai dalam waktu 6 jam.
      </Accordion.Body>
    </Accordion.Item>

    <Accordion.Item eventKey="2">
      <Accordion.Header>Apakah Cika Laundry memberikan garansi?</Accordion.Header>
      <Accordion.Body>
        Ya. Kami memberikan <strong>garansi 100% uang kembali</strong> jika terjadi
        kehilangan, kerusakan, atau keterlambatan dari estimasi waktu yang dijanjikan.
      </Accordion.Body>
    </Accordion.Item>

    <Accordion.Item eventKey="3">
      <Accordion.Header>Apakah tersedia layanan antar jemput?</Accordion.Header>
      <Accordion.Body>
        Beberapa outlet Cika Laundry menyediakan layanan antar-jemput gratis di area tertentu.
        Silakan hubungi outlet terdekat untuk konfirmasi ketersediaan layanan ini.
      </Accordion.Body>
    </Accordion.Item>

    <Accordion.Item eventKey="4">
      <Accordion.Header>
        Bagaimana cara mengetahui lokasi outlet terdekat?
      </Accordion.Header>
      <Accordion.Body>
        Anda dapat melihat daftar dan lokasi outlet kami melalui tombol <strong>Maps</strong>{' '}
        di atas, atau langsung melalui Google Maps dengan mengetik "Cika Laundry" di kolom
        pencarian.
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
</section>

    <div className="text-center icon ">
  <h4 className="fw-bold mb-3 text-black">Ikuti Kami di Sosial Media</h4>
  <div className="d-flex justify-content-center gap-4 fs-3 footer-social-icons">
    <a
      href="https://www.instagram.com/cikalaundryhq/"
      target="_blank"
      rel="noopener noreferrer"
      className="instagram-icon"
    >
      <i className="bi bi-instagram"></i>
    </a>
    <a
      href="https://www.tiktok.com/@cikalaundryhq.official"
      target="_blank"
      rel="noopener noreferrer"
      className="tiktok-icon"
    >
      <i className="bi bi-tiktok"></i>
    </a>
  </div>
</div>

    </div>
  );
};

export default Homepage;
