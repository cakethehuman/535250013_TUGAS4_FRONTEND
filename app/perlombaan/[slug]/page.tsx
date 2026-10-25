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
    <section
        id="description"
        className="container-fluid d-flex justify-content-center align-items-center bg-night2-gradient">
        <Row className="w-100 align-items-center">
          <Col xs={12} md={6} className="text-center mb-4 mb-md-0">
            <img
              src="/images/KOGO_STICKER.png"
              alt="kogo_sticker"
              className="kogo_sticker"/>
          </Col>
          <Col xs={12} md={6}>
            <h1 className="TT-hoves display-2">{data.name}</h1>
            <p className="TT-Hoves text-light py-3">
              {data.desc}
            </p>
          <Col className="d-flex gap-2">
            <Link
              href="https://google.com"
              type="button"
              className="px-5 py-3 text-decoration-none rounded-pill home-button home-button-text btn-outline-none">
                Register
            </Link>
            <Link
              href="/perlombaan"
              type="button"
              className="px-5 py-3 text-decoration-none rounded-pill home-button home-button-text btn-outline-none">
                kembali
            </Link>
          </Col>
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

