import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/css/constants.css";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Col, Row } from "react-bootstrap";

import { lomba } from "@/app/data/lomba";

export function generateStaticParams() {
  return lomba.map(({ slug }) => ({ slug }));
}

async function Content({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = lomba.find((item) => item.slug === slug);
  if (!data) notFound();

  return (
    <section className="d-flex bg-night3-gradient justify-content-center align-items-center min-vh-100 py-5">
      <Row className="w-100 mx-0 justify-content-center text-center">
        <Col xs={12} md={8} lg={6}>
          <h1 className="display-3 mb-4">{data.name}</h1>
          <Image
            src={data.image}
            alt={data.name}
            width={400}
            height={300}
            className="img-fluid rounded mb-4"
          />
          <p className="mb-4">{data.desc}</p>
          <Link className="text-decoration-none" href="/perlombaan">
            ← Kembali
          </Link>
        </Col>
      </Row>
    </section>
  );
}

export default function PerlombaanPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense fallback={<div>Memuat konten...</div>}>
      <Content params={params} />
    </Suspense>
  );
}

