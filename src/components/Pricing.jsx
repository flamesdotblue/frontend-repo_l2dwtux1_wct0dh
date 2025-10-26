import { Check, Coins, Sparkles } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$9',
    period: '/mo',
    highlight: false,
    credits: '500 credits',
    features: [
      'Image generation up to 1024px',
      'Short clips up to 5s',
      'Standard styles & presets',
      'Commercial use',
    ],
    cta: 'Start Creating',
  },
  {
    name: 'Creator',
    price: '$29',
    period: '/mo',
    highlight: true,
    credits: '2,500 credits',
    features: [
      'Images up to 4K',
      'Videos up to 15s',
      'Style locking & subject consistency',
      'Priority rendering',
    ],
    cta: 'Go Creator',
  },
  {
    name: 'Studio',
    price: '$79',
    period: '/mo',
    highlight: false,
    credits: '10,000 credits',
    features: [
      'Images and videos up to 4K+',
      'Animations up to 30s',
      'Team collaboration',
      'Dedicated support',
    ],
    cta: 'Scale Up',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-black py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,_rgba(139,92,246,0.25)_0%,_rgba(0,0,0,0)_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="bg-gradient-to-br from-white via-zinc-200 to-zinc-400 bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl">
            Simple, credit-based pricing
          </h2>
          <p className="mt-3 text-zinc-400">
            Choose a plan that fits. Credits roll over while you stay subscribed.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-2xl border p-6 ${
                t.highlight
                  ? 'border-fuchsia-500/40 bg-gradient-to-b from-white/10 to-white/5 shadow-[0_0_40px_-10px_rgba(217,70,239,0.35)]'
                  : 'border-white/10 bg-white/5'
              }`}
            >
              {t.highlight && (
                <span className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full border border-fuchsia-500/40 bg-fuchsia-500/15 px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-fuchsia-200">
                  <Sparkles className="h-3 w-3" /> Best value
                </span>
              )}
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-medium text-white">{t.name}</h3>
                <div className="inline-flex items-center gap-1 rounded-md border border-white/15 bg-white/10 px-2 py-1 text-xs text-zinc-200">
                  <Coins className="h-3.5 w-3.5" />
                  {t.credits}
                </div>
              </div>
              <div className="mb-6 flex items-end gap-1">
                <span className="text-4xl font-semibold text-white">{t.price}</span>
                <span className="pb-1 text-sm text-zinc-400">{t.period}</span>
              </div>
              <ul className="space-y-2 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-zinc-300">
                    <Check className="mt-0.5 h-4 w-4 text-fuchsia-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50 ${
                  t.highlight
                    ? 'bg-gradient-to-br from-fuchsia-500 to-indigo-500 text-white hover:brightness-110'
                    : 'border border-white/15 bg-white/10 text-white hover:bg-white/15'
                }`}
              >
                {t.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-2xl rounded-lg border border-white/10 bg-white/5 p-4 text-center text-sm text-zinc-300">
          Need more? Contact us for enterprise, on-prem, and custom credit stacks.
        </div>
      </div>
    </section>
  );
}
