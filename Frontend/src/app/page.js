import Providers from "@/components/ThemeProvider";
import styles from "./page.module.css";
import AnnouncementBar from "@/components/sections/AnnouncementBar";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Footer from "@/components/sections/Footer";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <Providers>
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <ProductCard />
      <Footer />
    </Providers>
  );
}
