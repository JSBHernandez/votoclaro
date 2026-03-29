export default function InfoBento() {
  return (
    <section className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="md:col-span-2 bg-[#002465] rounded-[2rem] p-12 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <h2 className="font-headline text-4xl font-bold mb-6">Calendario Electoral 2026</h2>
        <div className="space-y-6">
          <div className="flex items-center gap-6 border-b border-white/10 pb-4">
            <span className="text-3xl font-headline italic font-light opacity-50">01</span>
            <div>
              <p className="font-label text-xs uppercase tracking-widest text-secondary-container">13 de Marzo</p>
              <p className="text-lg">Elecciones de Congreso de la República</p>
            </div>
          </div>
          <div className="flex items-center gap-6 border-b border-white/10 pb-4">
            <span className="text-3xl font-headline italic font-light opacity-50">02</span>
            <div>
              <p className="font-label text-xs uppercase tracking-widest text-secondary-container">31 de Mayo</p>
              <p className="text-lg">Primera Vuelta Presidencial</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-3xl font-headline italic font-light opacity-50">03</span>
            <div>
              <p className="font-label text-xs uppercase tracking-widest text-secondary-container">21 de Junio</p>
              <p className="text-lg">Segunda Vuelta Presidencial (Si aplica)</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-secondary-container rounded-[2rem] p-10 flex flex-col justify-between">
        <div>
          <span className="material-symbols-outlined text-5xl text-on-secondary-container mb-6">how_to_vote</span>
          <h3 className="font-headline text-3xl font-extrabold text-on-secondary-container mb-4">¿Cómo votar?</h3>
          <p className="text-on-secondary-fixed-variant leading-relaxed">
            Consulta tu lugar de votación, requisitos de identificación y guías para marcar el tarjetón correctamente.
          </p>
        </div>
        <button className="w-full py-4 bg-white/30 backdrop-blur-sm rounded-2xl font-label font-bold text-on-secondary-container hover:bg-white/50 transition-colors">
          Ver Guía Completa
        </button>
      </div>
    </section>
  );
}
