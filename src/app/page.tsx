import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import HorizontalScroll from "@/components/text/animations/HorizontalScroll";

import {FadeIn} from "@/components/AnimatedText/FadeIn";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <FadeIn>
        <h1 className="text-6xl font-bold text-center">Welcome to mainsap</h1>
      </FadeIn>
      {/* Main Content */}
      <main className="flex-grow bg-black">
        <div className="container mx-auto text-center"></div>
        <HorizontalScroll />
      </main>
      <Footer />
    </div>
  );
}
