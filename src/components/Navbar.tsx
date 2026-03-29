export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
      <div className="flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-8">
          <span className="font-headline italic font-black text-2xl text-[#002465] dark:text-white">
            Votoclaro.co
          </span>
          <div className="hidden md:flex items-center gap-6 font-headline font-medium tracking-tight">
            <a className="text-slate-600 dark:text-slate-400 hover:text-[#002465] dark:hover:text-blue-300 transition-colors" href="#">Inicio</a>
            <a className="text-[#002465] dark:text-blue-400 border-b-2 border-[#ffd31a] pb-1" href="#">Candidatos</a>
            <a className="text-slate-600 dark:text-slate-400 hover:text-[#002465] dark:hover:text-blue-300 transition-colors" href="#">Propuestas</a>
            <a className="text-slate-600 dark:text-slate-400 hover:text-[#002465] dark:hover:text-blue-300 transition-colors" href="#">Noticias</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex bg-surface-container-high rounded-full px-4 py-2 items-center gap-2">
            <span className="material-symbols-outlined text-outline text-sm">search</span>
            <input className="bg-transparent border-none focus:ring-0 text-sm w-48 outline-none" placeholder="Buscar candidato..." type="text" />
          </div>
          <span className="text-slate-500 font-label text-xs font-bold tracking-widest cursor-pointer hover:text-primary transition-colors">ES/EN</span>
        </div>
      </div>
    </nav>
  );
}
