import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import AnimatedButton from "./components/AnimateButton";
import AnimatedSection from "./components/AnimateSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* Main Content */}
      <main className="flex-grow bg-gray-100 p-6">
        <div className="container mx-auto text-center">
          <AnimatedButton>Click Me</AnimatedButton>
          <AnimatedSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
