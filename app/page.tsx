import "bootstrap/dist/css/bootstrap.min.css";
import {Col, Row} from 'react-bootstrap';
import "@/app/css/constants.css";
import Navbar from '@/components/layout/navbar/page.tsx'

export default function Home() {
  return (
    <>
      <Navbar />
      <section id='main' className='container-fluid d-flex justify-content-center align-items-center bg-night-gradient'>
        <Row className='text-light text-center'>
          <h1 className="font-title display-1">NIHONGO CONTEST</h1>
          <h1 className="font-title display-1">2026</h1>
        </Row>
      </section>

      <section id='description' className="container-fluid d-flex bg-night2-gradient justify-content-center align-items-center">
        <div className="d-flex align-items-center gap-7">
          <Row>
            <h1 className="TT-hoves display-3">Apa itu Nihongo Contest?</h1>
            <p className="TT-Hoves text-light py-3">Nihongo contest merupakan kompentisi</p>
          </Row>
        </div>
      </section>
    </>
  );
}


