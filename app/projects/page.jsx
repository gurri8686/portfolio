import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import ProjectsMain from "@/components/ProjectsMain";
export default function Projects() {

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-stone-950 pt-20">
        <ProjectsMain />
      </main>
      <Footer />
    </>
  );
}