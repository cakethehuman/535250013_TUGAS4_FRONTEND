import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/css/constants.css";

import Image from "next/image";
import Link from "next/link";

import { Col, Row } from "react-bootstrap";
import { notFound } from "next/navigation";
import { lomba } from "@/app/data/lomba";

export function generateStaticParams() {
  return lomba.map(({ slug }) => ({ slug }));
}

export default function perlombaanPage(){
  return(
    <>
      <h1> hello mate </h1>
    </>
  );
}
