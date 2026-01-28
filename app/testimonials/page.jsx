import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import ClientTestimonial from "../../components/ClientTestimonial";
export default function Testimonials() {

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-stone-950 pt-20">
        <ClientTestimonial/>
      </main>
      <Footer />
    </>
  );
}