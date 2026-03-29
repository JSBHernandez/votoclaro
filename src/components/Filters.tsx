export default function Filters() {
  return (
    <section className="mb-12 flex flex-col md:flex-row justify-between items-end gap-8">
      <div className="w-full">
        <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
          <button className="whitespace-nowrap px-6 py-3 rounded-xl font-label font-bold text-sm transition-all duration-300 bg-primary text-on-primary shadow-lg shadow-primary/20">Presidencia</button>
          <button className="whitespace-nowrap px-6 py-3 rounded-xl font-label font-bold text-sm transition-all duration-300 bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest">Senado</button>
          <button className="whitespace-nowrap px-6 py-3 rounded-xl font-label font-bold text-sm transition-all duration-300 bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest">Cámara</button>
          <button className="whitespace-nowrap px-6 py-3 rounded-xl font-label font-bold text-sm transition-all duration-300 bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest">Alcaldías</button>
        </div>
      </div>
      <div className="flex items-center gap-4 w-full md:w-auto">
        <span className="text-sm font-label text-outline whitespace-nowrap">Ordenar por:</span>
        <select className="bg-surface-container-low border-none rounded-xl text-sm font-semibold focus:ring-primary/20 cursor-pointer pr-10 outline-none">
          <option>Más buscados</option>
          <option>Alfabético</option>
          <option>Partido Político</option>
        </select>
      </div>
    </section>
  );
}
