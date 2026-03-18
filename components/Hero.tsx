import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full rounded-[3rem] overflow-hidden mb-32 aspect-[16/9] md:aspect-[21/9] border border-white/5 bg-[#08080A] group">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 hero-mask scale-110 group-hover:scale-105 transition-transform duration-1000" 
        style={{ backgroundImage: "url('https://picsum.photos/seed/setup/1920/1080?blur=2')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-8">
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#0fb861]/10 text-[#0fb861] text-[11px] font-black uppercase tracking-[0.25em] mb-10 border border-[#0fb861]/20 backdrop-blur-md">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0fb861] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0fb861]"></span>
          </span>
          17 Y/O Web Developer
        </div>
        <h1 className="text-5xl md:text-[5.5rem] font-black tracking-tighter leading-[0.85] mb-8 max-w-4xl uppercase">
          Crafting Digital <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0fb861] to-emerald-400 italic">Realities</span>
        </h1>
        <p className="text-lg md:text-2xl text-slate-400 max-w-2xl leading-relaxed font-medium">
          Hi, I&apos;m Draft. I build high-performance web applications and dominate in gaming lobbies.
        </p>
      </div>
    </section>
  );
}
