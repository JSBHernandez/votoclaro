interface CandidateCardProps {
  name: string;
  party: string;
  description: string;
  imageUrl: string;
}

export default function CandidateCard({ name, party, description, imageUrl }: CandidateCardProps) {
  return (
    <div className="group relative bg-surface-container-lowest rounded-3xl p-8 overflow-hidden transition-all duration-500 hover:translate-y-[-4px] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-transparent hover:border-slate-100">
      <div className="flag-accent absolute top-0 left-0"></div>
      <div className="flex flex-col items-center text-center">
        <div className="relative w-32 h-32 mb-6 p-1 rounded-2xl border-2 border-slate-100 group-hover:border-secondary transition-colors duration-500">
          <img 
            className="w-full h-full object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-500" 
            alt={`Retrato de ${name}`} 
            src={imageUrl} 
          />
        </div>
        <span className="bg-slate-100 text-slate-500 font-label text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-3">
          {party}
        </span>
        <h3 className="font-headline text-2xl font-bold text-primary mb-2">{name}</h3>
        <p className="text-on-surface-variant font-body text-sm leading-relaxed mb-6 px-4">
          {description}
        </p>
        <div className="w-full flex gap-3">
          <button className="flex-1 bg-primary text-on-primary font-label text-sm font-bold py-3 rounded-xl transition-all hover:bg-primary-container active:scale-95 shadow-md shadow-primary/10">
            Ver Propuestas
          </button>
          <button className="w-12 h-12 flex items-center justify-center bg-surface-container-low rounded-xl text-primary hover:bg-primary/5 transition-colors">
            <span className="material-symbols-outlined">bookmark</span>
          </button>
        </div>
      </div>
    </div>
  );
}
