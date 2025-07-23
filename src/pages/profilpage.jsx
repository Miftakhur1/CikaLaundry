import { useEffect,useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "../dist/css/profil.css";
import {
  FaHandsWash,
  FaTag,
  FaInstagram,
  FaTiktok,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

import Hero1 from "../assets/img/pf2.jpg";
import Hero2 from "../assets/img/pf1.jpg";
import LogoImage from "../assets/img/LOGO.png";
import PaketRegulerImg from "../assets/img/paket-reguler.jpg";
import PaketExpress from "../assets/img/paket-express.jpg";
import PaketDrylean from "../assets/img/paket-dryclean.jpg";
import Karpet from "../assets/img/cuci-karpet.jpg";




const ProfilPage = () => {
  const [currentHero, setCurrentHero] = useState(0);
  const pfImages = [Hero1, Hero2, Karpet, PaketDrylean, PaketExpress];
const pfImage = "/gh.jpg"; // gambar profil
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % pfImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [pfImages.length]);

  return (
    <div>
      {/* Hero */}
      <div
        className="profil-hero"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url(${pfImage})` }}
      >
        <h1 className= "text-white mb-4 mt-5">Profil</h1>
      </div>


      {/* Konten */}
<section className="profil-section py-5 bg-white">
  <Container>
    <Row className="align-items-center">
      <Col md={6} data-aos="fade-right">
        <div className="img-profil-wrapper shadow-sm">
          <img
            src={pfImages[currentHero]}
            alt="Cika Laundry"
            className="img-fluid rounded-4"
          />
        </div>
      </Col>

      <Col md={5} data-aos="fade-left" className="mt-4 mt-md-0">
        <h2 className="fw-bold text-dark mb-3">Tentang Cika Laundry</h2>

        <p className="text-dark">
          <strong>1. Berawal dari Gafi Cika,</strong> Cika Laundry berdiri sebagai usaha keluarga yang tumbuh dari semangat untuk memberikan pelayanan laundry yang bersih, terpercaya, dan terjangkau. Dengan pengalaman lebih dari 15 tahun, kami terus berkembang menjadi salah satu penyedia laundry terkemuka di Semarang dan sekitarnya.
        </p>

        <p className="text-dark">
          <strong>2. Mengedepankan 3S (Senyum, Salam, dan Sapa),</strong> setiap staf kami dilatih untuk memberikan pelayanan dengan keramahan, kecepatan tanggap, serta sikap sopan sebagai bentuk rasa hormat terhadap pelanggan. Kualitas cucian bukan hanya dari hasil akhir, tapi juga dari kesan pertama yang baik.
        </p>

        <p className="text-dark">
          <strong>3. Tiga layanan unggulan kami</strong> meliputi Laundry Kiloan, Laundry Satuan (sepatu, helm, tas, dll.), dan layanan khusus seperti cuci karpet hingga springbed. Setiap layanan dirancang dengan standar prosedur dan alat yang modern untuk menjamin hasil maksimal.
        </p>

        <p className="text-dark">
          <strong>4. Kami menyediakan jasa antar-jemput gratis</strong> khusus untuk wilayah Semarang dan sekitarnya, agar pelanggan tetap nyaman tanpa harus keluar rumah. Cukup hubungi kami, tim kami akan menjemput cucian Anda dan mengantarkannya kembali dalam kondisi bersih dan rapi.
        </p>

        <p className="text-dark">
          <strong>5. Kepercayaan Anda adalah prioritas kami.</strong> Cika Laundry memberikan jaminan 100% uang kembali jika terjadi kehilangan atau kerusakan karena kelalaian. Kami yakin bahwa pelayanan jujur, profesional, dan transparan adalah kunci untuk menjaga loyalitas pelanggan.
        </p>
      </Col>
    </Row>
  </Container>
</section>


{/* Kenapa Harus Memilih Cika Laundry */}
<section className="keunggulan-section py-5 " style={{ backgroundColor: "#4397eaff"}}>
  <Container>
    <Row className="justify-content-center mb-4">
  <Col md={11} data-aos="fade-up" className="text-center">
    <h2 className="fw-bold text-white mb-4">Kenapa Harus Memilih Cika Laundry?</h2>
    <p className="text-white small">
      Cika Laundry berkomitmen untuk memberikan layanan terbaik bagi pelanggan melalui kualitas, kepercayaan, dan kenyamanan. Berikut adalah alasan mengapa Cika Laundry merupakan pilihan tepat untuk kebutuhan laundry Anda:
    </p>
  </Col>
</Row>
    <Row className="justify-content-center g-2">
      {/* 1 */}
      <Col md={5} data-aos="fade-right">
        <div className="p-4 bg-white rounded-4 shadow-sm h-100">
          <h5 className="fw-bold text-primary">1. Garansi Uang Kembali</h5>
          <p>
            Kami memberikan jaminan 100% uang kembali apabila terjadi kerusakan atau kehilangan barang. Hal ini merupakan bentuk tanggung jawab dan komitmen kami terhadap kepuasan pelanggan.
          </p>
        </div>
      </Col>

      {/* 2 */}
      <Col md={5} data-aos="fade-left">
        <div className="p-4 bg-white rounded-4 shadow-sm h-100">
          <h5 className="fw-bold text-primary">2. Layanan Antar-Jemput Gratis</h5>
          <p>
            Kami menyediakan layanan antar-jemput tanpa biaya tambahan untuk area Semarang dan sekitarnya, demi kemudahan dan kenyamanan pelanggan.
          </p>
        </div>
      </Col>

      {/* 3 */}
      <Col md={5} data-aos="fade-right">
        <div className="p-4 bg-white rounded-4 shadow-sm h-100">
          <h5 className="fw-bold text-primary">3. Tenaga Profesional dan Berpengalaman</h5>
          <p>
            Dengan pengalaman lebih dari 15 tahun, staf kami telah terlatih dalam menangani berbagai jenis pakaian dan bahan dengan standar tinggi.
          </p>
        </div>
      </Col>

      {/* 4 */}
      <Col md={5} data-aos="fade-left">
        <div className="p-4 bg-white rounded-4 shadow-sm h-100">
          <h5 className="fw-bold text-primary">4. Proses Cepat dan Efisien</h5>
          <p>
            Kami menggunakan sistem operasional yang efisien agar proses pencucian, pengeringan, dan penyetrikaan dilakukan tepat waktu tanpa mengurangi kualitas.
          </p>
        </div>
      </Col>

      {/* 5 */}
      <Col md={5} data-aos="fade-right">
        <div className="p-4 bg-white rounded-4 shadow-sm h-100">
          <h5 className="fw-bold text-primary">5. Peralatan Modern dan Higienis</h5>
          <p>
            Kami menggunakan mesin cuci dan pengering modern serta deterjen berkualitas tinggi untuk menjaga kebersihan dan keamanan pakaian pelanggan.
          </p>
        </div>
      </Col>

      {/* 6 */}
      <Col md={5} data-aos="fade-center">
        <div className="p-4 bg-white rounded-4 shadow-sm h-100">
          <h5 className="fw-bold text-primary">6. Layanan Beragam</h5>
          <p>
            Tersedia berbagai paket layanan seperti reguler, express, dry clean, hingga cuci karpet yang dapat disesuaikan dengan kebutuhan Anda.
          </p>
        </div>
      </Col>

      {/* 7 */}
      <Col md={5} data-aos="fade-right">
        <div className="p-4 bg-white rounded-4 shadow-sm h-100">
          <h5 className="fw-bold text-primary">7. Pelayanan Ramah dan Responsif</h5>
          <p>
            Tim customer service kami siap membantu dengan pelayanan yang cepat, ramah, dan solutif melalui berbagai saluran komunikasi.
          </p>
        </div>
      </Col>

      {/* 8 */}
      <Col md={5} data-aos="fade-left">
        <div className="p-4 bg-white rounded-4 shadow-sm h-100">
          <h5 className="fw-bold text-primary">8. Keamanan Barang Terjaga</h5>
          <p>
            Kami memilah dan memberi label pada setiap cucian secara teliti untuk mencegah tertukar, tertinggal, atau hilang selama proses pencucian.
          </p>
        </div>
      </Col>

      {/* 9 */}
      <Col md={5} data-aos="fade-right">
        <div className="p-4 bg-white rounded-4 shadow-sm h-100">
          <h5 className="fw-bold text-primary">9. Harga Transparan dan Kompetitif</h5>
          <p>
            Kami menawarkan harga yang bersaing dengan sistem tarif yang jelas dan tanpa biaya tersembunyi.
          </p>
        </div>
      </Col>

      {/* 10 */}
      <Col md={5} data-aos="fade-left">
        <div className="p-4 bg-white rounded-4 shadow-sm h-100">
          <h5 className="fw-bold text-primary">10. Komitmen terhadap Lingkungan</h5>
          <p>
            Kami mendukung prinsip ramah lingkungan dengan menggunakan produk pencuci yang eco-friendly dan meminimalkan limbah operasional.
          </p>
        </div>
      </Col>
    </Row>
  </Container>
</section>



      {/* Masukan dan Saran */}
<section className="saran-section py-5 "style={{ backgroundColor: "#c3c3c33f"}}>
  <Container>
    <Row className="justify-content-center">
      <Col md={9} data-aos="fade-up">
        <h2 className="fw-bold text-black mb-4 text-center">Masukan dan Saran</h2>
        <p className="text-black fs-6 text-center">
          Kami sangat menghargai setiap kritik dan saran dari Anda untuk meningkatkan pelayanan kami.
        </p>

        <form
          action="https://formspree.io/f/myzpkegw" // <== Ganti dengan ID dari Formspree
          method="POST"
        >
          <div className="mb-3">
            <label className="form-label text-black">Nama Lengkap</label>
            <input type="text" name="nama" className="form-control text-black" required />
          </div>

          <div className="mb-4">
  <label htmlFor="outlet" className="form-label  text-dark fs-5">
    <i className="mb-3"></i>
    Outlet yang Dikunjungi
  </label>
  <select
    name="outlet"
    id="outlet"
    className="form-select stylish-select shadow-sm rounded-3 px-3 py-2"
    required
  >
    <option value="">🌐 -- Pilih Outlet --</option>
    <option value="Cika Laundry Hasanudin">📍 Cika Laundry Hasanudin</option>
    <option value="Cika Laundry Puri Anjasmoro">📍 Cika Laundry Anjasmoro</option>
    <option value="Cika Laundry Arteri">📍 Cika Laundry Arteri</option>
    <option value="Cika Laundry Ngaliyan">📍 Cika Laundry Ngaliyan</option>
    <option value="Cika Laundry Graha wahid">📍 Cika Laundry Graha Wahid</option>
  </select>
</div>


          <div className="mb-3">
            <label className="form-label text-black">Email Anda</label>
            <input type="email" name="email" className="form-control text-blac\" required />
          </div>

          <div className="mb-3">
            <label className="form-label text-black">Pesan / Saran</label>
            <textarea name="pesan" className="form-control text-black" rows="4" required></textarea>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary rounded-pill px-5">
              Kirim
            </button>
          </div>
        </form>
      </Col>
    </Row>
  </Container>
</section>

      
    </div>
  );
};

export default ProfilPage;
