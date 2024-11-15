import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* Main Content */}
      <main className="flex-grow bg-black p-6">
        <div className="container mx-auto text-center"></div>
      </main>
      <Footer />
    </div>
  );
}
