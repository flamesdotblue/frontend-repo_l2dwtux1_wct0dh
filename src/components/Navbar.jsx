import { Rocket, CircleDollarSign, Image as ImageIcon, Video } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/80 bg-black/60 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-fuchsia-500 to-indigo-500">
              <Rocket className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-semibold tracking-tight text-white">cyberblox.ai</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-zinc-300 md:flex">
            <a href="#features" className="transition-colors hover:text-white">Features</a>
            <a href="#pricing" className="transition-colors hover:text-white">Pricing</a>
            <a href="#media" className="transition-colors hover:text-white">Media</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-md border border-zinc-700/60 px-4 py-2 text-sm text-zinc-200 transition-colors hover:border-zinc-600 hover:bg-zinc-900">
              <CircleDollarSign className="h-4 w-4" />
              Buy Credits
            </button>
            <button className="hidden items-center gap-2 rounded-md bg-white/10 px-4 py-2 text-sm font-medium text-white shadow-sm ring-1 ring-inset ring-white/15 transition hover:bg-white/20 md:inline-flex">
              <ImageIcon className="h-4 w-4" />
              <Video className="h-4 w-4" />
              Launch Studio
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
