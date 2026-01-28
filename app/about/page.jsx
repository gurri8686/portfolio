import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Technologies from "@/components/Technologies";
export default function About() {
 

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-stone-950 pt-20">
        <Technologies />
      </main>
      <Footer />
    </>
  );
}