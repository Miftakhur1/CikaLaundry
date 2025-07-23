import { useState ,useRef} from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../assets/css/contact.css";

const outlets = [
  {
    name: "Hasanudin",
    address: "Jl. Hasanudin No.G11, Plombokan, Kec. Semarang Utara, Kota Semarang, Jawa Tengah 50171, Indonesia",
    whatsapp: "628156505562",
    mapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.043862433234!2d110.41005637598784!3d-6.969491768147202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70f4b1965893cb%3A0x80691b3a260f010!2sCika%20Laundry%20Hasanudin!5e0!3m2!1sid!2sid!4v1721200000000",
    image: "/public/hs.jpg",
  },
  {
    name: "Puri Anjasmoro",
    address: "Jl. Anjasmoro Raya No.5, Karangayu, Kec. Semarang Barat, Kota Semarang, Jawa Tengah 50149, Indonesia",
    whatsapp: "628156505562",
    mapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.400000000000!2d110.3889538!3d-6.9812906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b321b92b399%3A0xce97f11af2fe9624!2sCika+Laundry!5e0!3m2!1sid!2sid!4v1721300000000",
    image: "/public/pr.jpg",
  },
  {
    name: "Arteri",
    address: "Jl. Soekarno Hatta No.61, Palebon, Kec. Pedurungan, Kota Semarang, Jawa Tengah 50196, Indonesia",
    whatsapp: "6285729315058",
    mapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.001100000000!2d110.4677705!3d-7.0057305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708cfcfb3cc257%3A0x8fe9a1c70a24f7ed!2sCika+Laundry+Arteri!5e0!3m2!1sid!2sid!4v1721300000001",
    image: "/public/ar.jpg",
  },
  {
    name: "Graha Wahid",
    address: "Jl. Kedungmundu No.28B, Kedungmundu, Kec. Tembalang, Kota Semarang, Jawa Tengah 50273, Indonesia",
    whatsapp: "628156602666",
    mapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.100000000000!2d110.4588605!3d-7.0247046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708dfcd89e13b3%3A0x1f5d0d963ad082e7!2sCika+Laundry+Graha+Wahid!5e0!3m2!1sid!2sid!4v1721300000002",
    image: "/public/gr.jpg",
  },
  {
    name: "Ngaliyan",
    address: "Jl. Kedungmundu No.28B, Kedungmundu, Kec. Tembalang, Kota Semarang, Jawa Tengah 50273, Indonesia",
    whatsapp: "62816784455",
    mapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.010000000000!2d110.3409471!3d-6.998563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708abd5249617d%3A0xef3c564fb14d6fc9!2sCika+Laundry+%26+Drycleaning+Ngaliyan!5e0!3m2!1sid!2sid!4v1721300000003",
    image: "/public/ng.jpg",
  },
];

const ContactPage = () => {
  const [activeMap, setActiveMap] = useState(outlets[0].mapsEmbed);
 const mapRef = useRef(null);
  return (
    <section className="contact-section py-5">
      <div className="contact-hero-banner d-flex align-items-center justify-content-center text-center text-white mb-5">
        <div className="overlay px-3 py-5">
          <h2 className="fw-bold text-white mb-3">Hubungi Kami</h2>
          <p className="text-light">
            Pilih outlet terdekat dan nikmati layanan laundry kami.
          </p>
        </div>
      </div>
        <Container>

          <div ref={mapRef}
          className="map-wrapper-small mb-5 mx-auto shadow rounded-4 overflow-hidden">
            <iframe
              title="Cika Laundry Map"
              src={activeMap}
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {outlets.map((outlet, i) => (
    <Card key={i} className="mb-4 shadow-sm border-0 overflow-hidden rounded-4">
      <Row className="g-0">
        {/* Gambar Outlet Full 1 Kolom (kiri) */}
        <Col md={4} xs={12}>
          <div className="outlet-img-wrapper h-100">
            <Card.Img
              src={outlet.image}
              alt={`Outlet ${outlet.name}`}
              className="img-fluid h-100 w-100 object-fit-cover"
            />
          </div>
        </Col>

        {/* Konten (kanan) */}
        <Col md={8} xs={12}>
          <Card.Body className="h-100 d-flex flex-column justify-content-center text-center p-4">
            <h5 className="fw-bold mb-2">{outlet.name}</h5>
            <p className="text-muted small mb-3">{outlet.address}</p>
            <div className="d-flex justify-content-center flex-wrap gap-3">
              <Button
                variant="success"
                href={`https://wa.me/${outlet.whatsapp}`}
                target="_blank"
                className="rounded-pill px-4 py-2"
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
                <i className="bi bi-geo-alt me-2"></i> Lihat Maps
              </Button>
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  ))}

        </Container>
    </section>
  );
};

export default ContactPage;
