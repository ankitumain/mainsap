import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { Intro } from "@/components/intro";

import {FadeIn} from "@/components/AnimatedText/FadeIn";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Header /> */}
      <Intro />
      <Header />
      <FadeIn>
        <h1 className="text-6xl font-bold text-center">Welcome to mainsap</h1>
      </FadeIn>
      {/* Main Content */}
      <main className="flex-grow bg-black p-6">
        <div className="container mx-auto text-center"></div>
      </main>
      <Footer />
    </div>
  );
}
