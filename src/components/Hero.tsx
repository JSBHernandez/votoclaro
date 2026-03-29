export default function Hero() {
  return (
    <header className="mb-20 text-center md:text-left max-w-3xl">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/20 text-secondary font-label text-xs font-bold uppercase tracking-wider mb-6">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
        </span>
        Proceso Electoral 2026
      </div>
      <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-primary tracking-tight leading-[1.1] mb-6">
        Elecciones 2026: <br /><span className="text-on-surface-variant font-medium italic">Tu Futuro en Colombia</span>
      </h1>
      <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed font-light">
        Votoclaro.co es la plataforma independiente dedicada a brindar transparencia y claridad sobre el panorama electoral colombiano. Explora perfiles, compara propuestas y ejerce un voto informado y responsable.
      </p>
    </header>
  );
}
