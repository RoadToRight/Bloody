import styles from "../page.module.css";
import Hero from "@/components/sections/Hero";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import SearchBar from "@/components/SearchBar";
import NewGamingGear from "@/components/sections/NewGamingGear";
import Cart from "@/components/sections/CartSidebar";
import CheckoutForm from "@/components/sections/CheckoutForm";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <SearchBar /> */}
      <NewGamingGear />
      <FeaturedProducts />
    </>
  );
}
