import { useEffect,useState } from "react";
import { Container, Row, Col,  } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import '../assets/css/profil.css';


import Hero1 from "../assets/img/pf2.jpg";
import Hero2 from "../assets/img/pf1.jpg";

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
    <Row className="align-items-center g-4">
      {/* Kolom Gambar */}
      <Col md={5} data-aos="fade-right">
        <div className="img-profil-wrapper shadow rounded-4 overflow-hidden">
          <img
            src={pfImages[currentHero]}
            alt="Cika Laundry"
            className="img-fluid rounded-4"
          />
        </div>
      </Col>

      {/* Kolom Teks */}
      <Col md={7} data-aos="fade-left">
        <h2 className="fw-bold text-dark mb-4 border-start border-4 ps-3 border-warning">
          Tentang Cika Laundry
        </h2>

        {[
          {
            highlight: '1. Berawal dari Gafi Cika,',
            text: 'Cika Laundry berdiri sebagai usaha keluarga yang tumbuh dari semangat untuk memberikan pelayanan laundry yang bersih, terpercaya, dan terjangkau. Dengan pengalaman lebih dari 15 tahun, kami terus berkembang menjadi salah satu penyedia laundry terkemuka di Semarang dan sekitarnya.',
          },
          {
            highlight: '2. Mengedepankan 3S (Senyum, Salam, dan Sapa),',
            text: 'Setiap staf kami dilatih untuk memberikan pelayanan dengan keramahan, kecepatan tanggap, serta sikap sopan sebagai bentuk rasa hormat terhadap pelanggan. Kualitas cucian bukan hanya dari hasil akhir, tapi juga dari kesan pertama yang baik.',
          },
          {
            highlight: '3. Tiga layanan unggulan kami',
            text: 'Meliputi Laundry Kiloan, Laundry Satuan (sepatu, helm, tas, dll.), dan layanan khusus seperti cuci karpet hingga springbed. Setiap layanan dirancang dengan standar prosedur dan alat yang modern untuk menjamin hasil maksimal.',
          },
          {
            highlight: '4. Kami menyediakan jasa antar-jemput gratis',
            text: 'Khusus untuk wilayah Semarang dan sekitarnya, agar pelanggan tetap nyaman tanpa harus keluar rumah. Cukup hubungi kami, tim kami akan menjemput cucian Anda dan mengantarkannya kembali dalam kondisi bersih dan rapi.',
          },
          {
            highlight: '5. Kepercayaan Anda adalah prioritas kami.',
            text: 'Cika Laundry memberikan jaminan 100% uang kembali jika terjadi kehilangan atau kerusakan karena kelalaian. Kami yakin bahwa pelayanan jujur, profesional, dan transparan adalah kunci untuk menjaga loyalitas pelanggan.',
          },
        ].map((item, idx) => (
          <p className="text-dark mb-3" key={idx}>
            <strong className="text-primary">{item.highlight}</strong> {item.text}
          </p>
        ))}
      </Col>
    </Row>
  </Container>
</section>



{/* Kenapa Harus Memilih Cika Laundry */}
<section className="keunggulan-section py-5" style={{ backgroundColor: "#4397ea" }}>
  <Container>
    <div className="text-md-center text-start mb-4 px-2 px-md-5" data-aos="fade-up">
      <h2 className="fw-bold text-white mb-3">Kenapa Harus Memilih Cika Laundry?</h2>
      <p className="text-white small">
        Cika Laundry berkomitmen untuk memberikan layanan terbaik bagi pelanggan melalui kualitas, kepercayaan, dan kenyamanan. Berikut adalah alasan mengapa Cika Laundry merupakan pilihan tepat untuk kebutuhan laundry Anda:
      </p>
    </div>

    <Row className="gy-4 justify-content-center">
      {[
        {
          title: "1. Garansi & Jaminan",
          desc: "Kami memberikan garansi dan jaminan sesuai kesepakatan apabila terjadi kerusakan, kehilangan, atau hal lain yang tidak diinginkan.",
        },

        {
          title: "2. Layanan Antar-Jemput Gratis",
          desc: "Kami menyediakan layanan antar-jemput tanpa biaya tambahan untuk area Semarang dan sekitarnya.",
        },
        {
          title: "3. Tenaga Profesional dan Berpengalaman",
          desc: "Dengan pengalaman lebih dari 15 tahun, staf kami terlatih dalam menangani berbagai jenis pakaian.",
        },
        {
          title: "4. Proses Cepat dan Efisien",
          desc: "Sistem operasional kami efisien agar proses dilakukan tepat waktu tanpa mengurangi kualitas.",
        },
        {
          title: "5. Peralatan Modern dan Higienis",
          desc: "Mesin cuci modern & chemical berkualitas tinggi menjaga kebersihan dan keamanan pakaian.",
        },
        {
          title: "6. Layanan Beragam",
          desc: "Paket reguler, express, dry clean, hingga karpet sesuai kebutuhan Anda.",
        },
        {
          title: "7. Pelayanan Ramah dan Responsif",
          desc: "Tim CS siap membantu dengan cepat dan ramah melalui berbagai saluran.",
        },
        {
          title: "8. Keamanan Barang Terjaga",
          desc: "Kami memberi label dan memilah cucian secara teliti agar tidak tertukar atau hilang.",
        },
        {
          title: "9. Harga Transparan dan Kompetitif",
          desc: "Harga bersaing dengan sistem tarif jelas, tanpa biaya tersembunyi.",
        },
        {
        title: "10. Inovasi dalam Layanan",
        desc: "Cika Laundry terus berinovasi dalam proses kerja agar pelayanan semakin cepat, bersih, dan efisien.",
      }

      ].map((item, idx) => (
        <Col key={idx} xs={12} md={6} data-aos="fade-up">
          <div className="bg-white rounded-4 shadow-sm h-100 p-4">
            <h5 className="fw-bold text-primary">{item.title}</h5>
            <p className="mb-0">{item.desc}</p>
          </div>
        </Col>
      ))}
    </Row>
  </Container>
</section>




      {/* Masukan dan Saran */}
<section className="saran-section py-5" style={{ backgroundColor: "#c3c3c33f" }}>
  <Container>
    <div
      className="mx-auto px-3"
      style={{ maxWidth: "720px" }}
      data-aos="fade-up"
    >
      <h2 className="fw-bold text-black mb-4 text-center">Masukan dan Saran</h2>
      <p className="text-black fs-6 text-center">
        Kami sangat menghargai setiap kritik dan saran dari Anda untuk meningkatkan pelayanan kami.
      </p>

      <form
        action="https://formspree.io/f/myzpkegw"
        method="POST"
      >
        <div className="mb-3">
          <label className="form-label text-black">Nama Lengkap</label>
          <input type="text" name="nama" className="form-control text-black" required />
        </div>

        <div className="mb-4">
          <label htmlFor="outlet" className="form-label text-dark fs-5">
            Outlet yang Dikunjungi
          </label>
          <select
            name="outlet"
            id="outlet"
            className="form-select stylish-select shadow-sm rounded-3 px-3 py-2"
            required
          >
            <option value=""> -- Pilih Outlet --</option>
            <option value="Cika Laundry Hasanudin">📍 Cika Laundry Hasanudin</option>
            <option value="Cika Laundry Puri Anjasmoro">📍 Cika Laundry Anjasmoro</option>
            <option value="Cika Laundry Arteri">📍 Cika Laundry Arteri</option>
            <option value="Cika Laundry Ngaliyan">📍 Cika Laundry Ngaliyan</option>
            <option value="Cika Laundry Graha wahid">📍 Cika Laundry Graha Wahid</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label text-black">Email Anda</label>
          <input type="email" name="email" className="form-control text-black" required />
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
    </div>
  </Container>
</section>


      
    </div>
  );
};

export default ProfilPage;
