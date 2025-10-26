import Spline from '@splinetool/react-spline';
import { Sparkles, Command, Wand2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black" aria-labelledby="hero-title">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative mx-auto flex min-h-[80vh] max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black" />

        <div className="relative z-10 mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-fuchsia-400" />
            <span>Generate videos, images, and animations with one prompt</span>
          </div>

          <h1 id="hero-title" className="bg-gradient-to-br from-white via-zinc-200 to-zinc-400 bg-clip-text text-5xl font-semibold leading-tight text-transparent sm:text-6xl">
            Create the future of content with AI
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-zinc-300">
            Cyberblox.ai turns your ideas into stunning visuals in seconds. Use credits to produce cinematic videos, photorealistic images, and looping animations — all in dark, futuristic style.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-to-br from-fuchsia-500 to-indigo-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-fuchsia-500/20 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/60"
            >
              <Wand2 className="h-4 w-4" />
              Get Credits
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              <Command className="h-4 w-4" />
              Explore Features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
