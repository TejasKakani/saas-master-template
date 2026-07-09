// /src/app/page.tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import WaitlistModal, {
  WaitlistProvider,
} from "@/components/WaitlistModal";

export default function Home() {
  return (
    <WaitlistProvider>
      <Navbar />
      <main className="flex min-h-screen flex-col">
        <Hero />
        <Features />
        <Pricing />
      </main>
      <Footer />
      <WaitlistModal />
    </WaitlistProvider>
  );
}