import { Image as ImageIcon, Video, Orbit, Coins, Zap, Shield } from 'lucide-react';

const features = [
  {
    title: 'Prompt to Everything',
    description:
      'Describe your vision once. Cyberblox generates images, videos, and seamless animations from a single prompt.',
    icon: Orbit,
  },
  {
    title: 'Credit-based System',
    description:
      'Flexible pay-as-you-go credits. Only spend what you need and scale up for bigger projects or teams.',
    icon: Coins,
  },
  {
    title: 'Lightning Fast',
    description:
      'Optimized inference for rapid results. Preview in seconds, upscale or extend when you’re ready.',
    icon: Zap,
  },
  {
    title: 'Studio-grade Quality',
    description:
      'Photorealistic renders, cinematic motion, and clean loops tuned for social, ads, and editorial.',
    icon: ImageIcon,
  },
  {
    title: 'Cinematic Video',
    description:
      'Prompt shot styles, camera moves, and durations. Export up to 4K with pro codecs.',
    icon: Video,
  },
  {
    title: 'Private & Secure',
    description:
      'Your projects stay private. Enterprise controls and content safety built-in.',
    icon: Shield,
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-black py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="bg-gradient-to-br from-white via-zinc-200 to-zinc-400 bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl">
            Build anything with one prompt
          </h2>
          <p className="mt-3 text-zinc-400">
            A unified studio for images, videos, and animations powered by credits.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20 hover:bg-white/10"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500/30 to-indigo-500/30 ring-1 ring-inset ring-white/10">
                <f.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-medium text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{f.description}</p>
            </div>
          ))}
        </div>

        <div id="media" className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
            <h4 className="text-white">Image generation</h4>
            <p className="mt-1 text-sm text-zinc-400">Ultra-high detail, consistent subjects, and style presets.</p>
            <div className="mt-4 aspect-video w-full overflow-hidden rounded-lg border border-white/10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-fuchsia-600/20 via-indigo-600/10 to-transparent" />
          </div>
          <div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
            <h4 className="text-white">Video & animation</h4>
            <p className="mt-1 text-sm text-zinc-400">Prompted camera moves, loops, and sound-ready exports.</p>
            <div className="mt-4 aspect-video w-full overflow-hidden rounded-lg border border-white/10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-600/20 via-fuchsia-600/10 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
