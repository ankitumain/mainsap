import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import HorizontalScroll from "@/components/text/animations/HorizontalScroll";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* Main Content */}
      <main className="flex-grow bg-black">
        <div className="container mx-auto text-center"></div>
        <HorizontalScroll />
      </main>
      <Footer />
    </div>
  );
}
