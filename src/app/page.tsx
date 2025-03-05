import { About } from "./_components/about";
import { Footer } from "./_components/footer";
import { Header } from "./_components/header";
import { Hero } from "./_components/hero";
import { More } from "./_components/more";
import { Operation } from "./_components/operation";
import { Services } from "./_components/services";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      {/* <Operation /> */}
      <Services />
      <About />
      <More />
      <Footer />
    </main>
  );
}
