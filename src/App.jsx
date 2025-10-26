import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />

        <section className="border-t border-white/10 bg-black py-12">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div>
                <h3 className="text-xl font-semibold text-white">Ready to build with cyberblox.ai?</h3>
                <p className="mt-1 text-sm text-zinc-400">Join creators turning ideas into visuals in seconds.</p>
              </div>
              <div className="flex gap-3">
                <a
                  href="#pricing"
                  className="inline-flex items-center rounded-md bg-gradient-to-br from-fuchsia-500 to-indigo-500 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-fuchsia-500/20 transition hover:brightness-110"
                >
                  Get Credits
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center rounded-md border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/15"
                >
                  Explore Features
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-zinc-400 sm:flex-row">
          <p>© {new Date().getFullYear()} cyberblox.ai — All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#features" className="hover:text-zinc-200">Features</a>
            <a href="#pricing" className="hover:text-zinc-200">Pricing</a>
            <a href="#" className="hover:text-zinc-200">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
