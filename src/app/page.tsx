import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Filters from "@/components/Filters";
import CandidatesGrid from "@/components/CandidatesGrid";
import InfoBento from "@/components/InfoBento";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 max-w-screen-2xl mx-auto px-8">
        <Hero />
        <Filters />
        <CandidatesGrid />
        <InfoBento />
      </main>
      <Footer />
    </>
  );
}
