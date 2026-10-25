import { Col, Row } from "react-bootstrap";

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
          <h1 className="font-title display-1">NIHONGO CONTEST</h1>
          <h1 className="font-title display-1">2026</h1>
          <div className="py-3">
            <button
              type="button"
              className="px-5 py-3 rounded-pill home-button home-button-text btn-outline-none">
              Daftar
            </button>
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
            <h1 className="TT-hoves display-3">Apa itu Nihongo Contest?</h1>
            <p className="TT-Hoves text-light py-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Col>
        </Row>
      </section>
    </>
  );
}


