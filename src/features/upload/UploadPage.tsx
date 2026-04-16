import { Icon } from '../../components/ui/Icon'

export function UploadPage() {
  return (
    <div className="max-w-3xl">
      <header className="mb-8">
        <h1 className="font-headline text-6xl md:text-7xl font-black uppercase tracking-tighter leading-none">
          UPLOAD
        </h1>
        <p className="mt-2 text-white/40 text-xs font-bold uppercase tracking-widest">
          DROP A CLIP. CLAIM THE TRICK.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <section className="lg:col-span-7 bg-surface-container-low p-8 border-l-4 border-primary-container">
          <h2 className="font-headline text-2xl font-black uppercase tracking-tighter mb-6 flex items-center justify-between">
            Clip Details
            <Icon name="upload" />
          </h2>

          <div className="space-y-6">
            <label className="block">
              <span className="block text-[10px] uppercase font-bold tracking-widest text-white/40 mb-2">
                Trick Name
              </span>
              <input
                className="w-full bg-surface-container-highest border-none focus:ring-1 focus:ring-primary-container text-sm font-bold p-4 placeholder:text-white/30"
                placeholder="e.g., NBD BLUNTSLIDE"
                type="text"
              />
            </label>

            <label className="block">
              <span className="block text-[10px] uppercase font-bold tracking-widest text-white/40 mb-2">
                Location
              </span>
              <input
                className="w-full bg-surface-container-highest border-none focus:ring-1 focus:ring-primary-container text-sm font-bold p-4 placeholder:text-white/30"
                placeholder="e.g., Southbank, London"
                type="text"
              />
            </label>

            <label className="block">
              <span className="block text-[10px] uppercase font-bold tracking-widest text-white/40 mb-2">
                Caption
              </span>
              <textarea
                className="w-full bg-surface-container-highest border-none focus:ring-1 focus:ring-primary-container text-sm font-semibold p-4 min-h-28 placeholder:text-white/30"
                placeholder="Keep it raw. Keep it real."
              />
            </label>
          </div>
        </section>

        <section className="lg:col-span-5 bg-surface-container-highest p-8 flex flex-col justify-between">
          <div>
            <h2 className="font-headline text-2xl font-black uppercase tracking-tighter mb-6">
              Media
            </h2>

            <div className="bg-surface-container-lowest border-2 border-dashed border-outline-variant/40 p-8 text-center">
              <Icon name="movie" className="text-5xl text-primary-container" />
              <p className="mt-4 font-headline font-black uppercase tracking-tight">
                Drag & Drop
              </p>
              <p className="mt-1 text-xs text-white/40 font-bold uppercase tracking-widest">
                MP4 / MOV (demo only)
              </p>
              <button
                className="mt-6 bg-surface-container-low px-6 py-3 font-headline font-black text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
                type="button"
              >
                Choose File
              </button>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-surface-container-low">
            <button
              className="w-full kinetic-gradient text-white px-8 py-5 font-headline font-black text-xl uppercase flex items-center justify-center gap-3"
              type="button"
            >
              Publish Run
              <Icon name="arrow_forward" className="group-hover:translate-x-2 transition-transform" />
            </button>
            <p className="mt-3 text-[10px] text-white/40 font-bold uppercase tracking-widest">
              Static demo. No upload occurs.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

