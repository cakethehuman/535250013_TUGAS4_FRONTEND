import { Col, Row } from "react-bootstrap";

import Link from "next/link"

import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/css/constants.css";
import "@/app/css/home.css";

export default function Home() {
  return (
    <>
      <section
        id="main"
        className="container-fluid d-flex justify-content-center align-items-center bg-night-gradient">
        <Row className="w-100 text-light text-center">
          <h1 className="font-title display-1">NIHONGO CORP</h1>
          <h1 className="font-title display-1">2026</h1>
          <div className="py-3">
            <Link
              href="/perlombaan"
              type="button"
              className="px-5 py-3 text-decoration-none rounded-pill home-button home-button-text btn-outline-none">
              Daftar Lomba Terbaru Kami
            </Link>
          </div>
        </Row>
      </section>

      <section
        id="description"
        className="container-fluid d-flex justify-content-center align-items-center bg-night2-gradient py-5">
        <Row className="w-100 align-items-center">
          <Col xs={12} md={4} className="text-center mb-4 mb-md-0">
            <img
              src="/images/KOGO_STICKER.png"
              alt="kogo_sticker"
              className="kogo_sticker"/>
          </Col>
          <Col xs={12} md={8} className="text-center text-md-start">
            <h1 className="TT-hoves display-3">Apa itu Nihongo Corp?</h1>
            <p className="TT-Hoves text-light py-3">
              Nihongo Corp adalah website untuk menyelenggarakan dan mengikuti perlombaan bahasa dan budaya Jepang. Pengunjung bisa mengenal acaranya, melihat daftar lomba yang tersedia (Cerdas Cermat, J Song, Voice Acting, dan Story Telling), membaca detail setiap lomba, mendaftar, dan menghubungi panitia.
            </p>
          </Col>
        </Row>
      </section>
    </>
  );
}


