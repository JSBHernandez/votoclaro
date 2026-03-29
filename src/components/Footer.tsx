export default function Footer() {
  return (
    <footer className="w-full mt-20 bg-slate-100 dark:bg-slate-900">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 py-12 gap-8 max-w-screen-2xl mx-auto">
        <div className="flex flex-col gap-4 items-center md:items-start">
          <span className="font-headline font-bold text-xl text-slate-900 dark:text-white">
            Votoclaro.co
          </span>
          <p className="font-body text-sm tracking-wide text-slate-500 dark:text-slate-400 text-center md:text-left">
            © 2026 Votoclaro.co. Institución Digital para la Vida Cívica Colombiana.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 font-body text-sm tracking-wide">
          <a className="text-slate-500 dark:text-slate-400 hover:underline decoration-[#ffd31a] decoration-2 underline-offset-4" href="#">Sobre Nosotros</a>
          <a className="text-slate-500 dark:text-slate-400 hover:underline decoration-[#ffd31a] decoration-2 underline-offset-4" href="#">Calendario Electoral</a>
          <a className="text-slate-500 dark:text-slate-400 hover:underline decoration-[#ffd31a] decoration-2 underline-offset-4" href="#">Contacto</a>
          <a className="text-slate-500 dark:text-slate-400 hover:underline decoration-[#ffd31a] decoration-2 underline-offset-4" href="#">Privacidad</a>
        </div>
      </div>
      <div className="bg-slate-200 dark:bg-slate-800 h-px w-full my-8"></div>
      <div className="flex justify-center pb-12 gap-6 grayscale opacity-50">
        <span className="material-symbols-outlined">social_leaderboard</span>
        <span className="material-symbols-outlined">news</span>
        <span className="material-symbols-outlined">public</span>
      </div>
    </footer>
  );
}
