import Image from "next/image";

import { Col, Row } from "react-bootstrap";

export default function HubungiPage() {
  return (
    <section className="d-flex bg-night3-gradient justify-content-center align-items-center py-5">
      <Row className="w-100 mx-0 justify-content-center text-center">
        <Col xs={12} md={8} lg={5}>
          <h1 className="display-3 mb-4">Hubungi Kami</h1>

          <div className="d-flex ratio ratio-4x3 border border-3 border-light rounded text-white">
            <Row>
              <Image
              src="/images/unya.jpg"
              alt="CS"
              className="rounded object-fit-contain m-2"
              width={200}
              height={200}
              />
              <h2>Waguri</h2>
              <p>No hp : 085712304</p>
            </Row>
          </div>
        </Col>
      </Row>
    </section>
  );
}

