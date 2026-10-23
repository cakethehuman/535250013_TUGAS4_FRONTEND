import '@/app/css/navbar.css'
import Link from "next/link"

export default function Navbar() {
  return (
    <>
      <section className='d-flex navbar-style justify-content-end'>
        <div className="d-flex align-items-center gap-3 me-3">
          <Link href='/' className="text-decoration-none px-3 py-1 link-pill rounded-pill link-style">Home</Link>
         <Link href='/perlombaan' className="text-decoration-none px-3 py-1 link-pill rounded-pill link-style">Perlombaan</Link> 
         <Link href='/hubungi' className="text-decoration-none px-3 py-1 link-pill rounded-pill link-style">Hubungi</Link>
        </div>


      </section>
    </>
  );
}
