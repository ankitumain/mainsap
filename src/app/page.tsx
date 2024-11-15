import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* Main Content */}
      <main className="flex-grow bg-gray-100 p-6">
        <div className="container mx-auto text-center">
          <p className="text-gray-700">
            This is the main content of the page. Use this area to provide your
            users with valuable information.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
