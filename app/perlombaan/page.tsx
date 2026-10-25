import Link from 'next/link';
import { Row } from "react-bootstrap";

import { lomba } from "@/app/data/lomba";

import "@/app/css/constants.css";
import "@/app/css/perlombaan.css"

export default function Perlombaan(){
  return(
    <>
     <section id='lomba-home' className="d-flex bg-night3-gradient justify-content-center align-items-center min-vh-100">
        <Row className='w-100 mx-0 justify-content-center text-center'>
          <h1 className='display-1 mb-5'>Perlombaan</h1> 
          <Row xs={1} md={2} lg={4} className="gap-2 justify-content-center"> 
          {lomba.map(({ name, slug }) => (
              <Link
                key={slug}
                className="text-decoration-none lantern-link"
                href={`/perlombaan/${slug}`}>
                {name}
              </Link>
            ))}
          </Row>
        </Row>
     </section>
    </>
  );
}
