
import React from 'react';
import {
  CheckCircle2,
  Clock,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  PenTool,
  ShieldCheck,
  Battery,
  Layout,
  Flower2,
  Monitor,
  Infinity,
  ShoppingBag,
  Calendar,
  Headphones,
  Check,
  Smartphone,
  Users,
  Star
} from 'lucide-react';

// --- Utility Components ---

const Section = ({ children, className = "", id = "", style = {} }: { children?: React.ReactNode, className?: string, id?: string, style?: React.CSSProperties }) => (
  <section id={id} className={`py-16 px-4 md:py-24 ${className}`} style={style}>
    <div className="max-w-6xl mx-auto">
      {children}
    </div>
  </section>
);

const ButtonNeon = ({ children, className = "", style = {}, onClick, href }: { children?: React.ReactNode, className?: string, style?: React.CSSProperties, onClick?: (e?: any) => void, href?: string }) => {
  const baseClassName = `bg-[#a6ff00] hover:bg-[#91e000] text-black font-black py-4 px-8 md:py-5 md:px-12 rounded-[1rem] shadow-[0_0_25px_rgba(166,255,0,0.4)] transition-all transform hover:scale-105 uppercase tracking-wider text-sm md:text-xl w-full md:w-auto max-w-md ${className}`;

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        style={style}
        className={`${baseClassName} inline-flex items-center justify-center text-center no-underline`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      style={style}
      className={baseClassName}
    >
      {children}
    </button>
  );
};

const FAQItem = ({ question, answer }: { question: string, answer: React.ReactNode, key?: React.Key }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-center justify-between text-left hover:bg-white/5 px-4 transition-colors rounded-lg"
      >
        <span className="font-bold text-lg">{question}</span>
        <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="px-4 pb-5 text-gray-400 font-medium">
          {answer}
        </div>
      )}
    </div>
  );
};

// --- Carousel Components ---

const iPadSlides = [
  "https://i.imgur.com/NwENCuJ.png",
  "https://i.imgur.com/AIXhfYy.png",
  "https://i.imgur.com/6bCZaaR.png",
];

const ProcreateCarousel = () => {
  const [current, setCurrent] = React.useState(0);
  const next = () => setCurrent((prev) => (prev + 1) % iPadSlides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + iPadSlides.length) % iPadSlides.length);

  return (
    <div className="relative group max-w-lg mx-auto">
      <button onClick={prev} className="absolute left-[-20px] md:left-[-60px] top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-black shadow-lg border-2 border-zinc-200 hover:bg-[#B2FF31] transition-all transform hover:scale-110">
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button onClick={next} className="absolute right-[-20px] md:right-[-60px] top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-black shadow-lg border-2 border-zinc-200 hover:bg-[#B2FF31] transition-all transform hover:scale-110">
        <ChevronRight className="w-6 h-6" />
      </button>
      <div className="relative aspect-[3/4.2] overflow-hidden rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <div className="w-full h-full bg-[#fdfdfd] relative">
          <img src={iPadSlides[current]} alt="Procreate Brushes Preview" className="w-full h-full object-contain transition-opacity duration-300" />
        </div>
      </div>
    </div>
  );
};

const customSlides = [
  "https://i.imgur.com/ZKece5J.png",
  "https://i.imgur.com/zr7wYx7.png",
  "https://i.imgur.com/deumurx.png",
];

const CustomCarousel = () => {
  const [current, setCurrent] = React.useState(0);
  const next = () => setCurrent((prev) => (prev + 1) % customSlides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + customSlides.length) % customSlides.length);

  return (
    <div className="relative group max-w-3xl mx-auto">
      <button onClick={prev} className="absolute left-[-20px] md:left-[-60px] top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-black shadow-lg border-2 border-zinc-200 hover:bg-[#BF3703] transition-all transform hover:scale-110">
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button onClick={next} className="absolute right-[-20px] md:right-[-60px] top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-black shadow-lg border-2 border-zinc-200 hover:bg-[#BF3703] transition-all transform hover:scale-110">
        <ChevronRight className="w-6 h-6" />
      </button>
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border-[0.5px] border-white/30 shadow-[0_30px_60px_rgba(0,0,0,0.7)]">
        <img src={customSlides[current]} alt={`Custom Style ${current + 1}`} className="w-full h-full object-cover transition-opacity duration-300" />
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  // URLs dinâmicas que incluem os parâmetros UTM da página atual
  const [checkoutUrlBasico, setCheckoutUrlBasico] = React.useState('https://pay.hotmart.com/I103632222G?off=88n0fz0d&checkoutMode=10');
  const [checkoutUrlProfissional, setCheckoutUrlProfissional] = React.useState('https://pay.hotmart.com/I103632222G?off=m3oidui6&checkoutMode=10');

  // Atualiza as URLs com os parâmetros UTM quando o componente monta
  React.useEffect(() => {
    const baseUrlBasico = 'https://pay.hotmart.com/I103632222G?off=88n0fz0d&checkoutMode=10';
    const baseUrlProfissional = 'https://pay.hotmart.com/I103632222G?off=m3oidui6&checkoutMode=10';

    const utmParams = window.location.search;

    setCheckoutUrlBasico(baseUrlBasico + utmParams);
    setCheckoutUrlProfissional(baseUrlProfissional + utmParams);

    console.log('🔗 URLs de checkout atualizadas:');
    console.log('   Básico:', baseUrlBasico + utmParams);
    console.log('   Profissional:', baseUrlProfissional + utmParams);
  }, []);

  // Função para disparar o evento de tracking antes do redirecionamento
  const handleCheckoutClick = (planName: string, value: number, contentId: string) => {
    return (e: React.MouseEvent<HTMLAnchorElement>) => {
      // Dispara o evento InitiateCheckout do Utmify
      if (typeof window !== 'undefined' && (window as any).pixel) {
        console.log(`📊 Disparando evento InitiateCheckout (${planName})`);
        (window as any).pixel('track', 'InitiateCheckout', {
          value: value,
          currency: 'BRL',
          content_name: `Pack Flora Line - ${planName}`,
          content_ids: [contentId],
          content_type: 'product'
        });
      }

      // Não previne o comportamento padrão - deixa o link funcionar normalmente
      // O delay de 300ms não é mais necessário pois o navegador aguarda naturalmente
    };
  };

  return (
    <div className="min-h-screen bg-[#050101] text-white selection:bg-[#a6ff00] selection:text-black">
      {/* Hero Section (BLOCO 1) */}
      <Section className="relative overflow-hidden pt-12 text-center" style={{ background: 'linear-gradient(to bottom, #2A0505, #1C0202)' }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-glow-burgundy -z-10" />
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="bg-[#003CFF] text-white px-6 py-2 rounded-xl font-black text-xs md:text-sm uppercase tracking-widest mb-8 border border-white/30 shadow-[0_0_20px_rgba(0,60,255,0.4)]">
            ⚡ OFERTA ESPECIAL DISPONÍVEL APENAS HOJE 18/01/2026
          </div>
          <h1 className="text-4xl md:text-7xl font-black mb-10 tracking-tight leading-[1.05]">
            <span style={{
              background: 'linear-gradient(to right, #BF3A03, #D18F02)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 10px rgba(191,58,3,0.4))'
            }}>Pare de desenhar a mesma flor do zero</span><br />
            <span className="text-white">e crie mais tattoos em menos tempo.</span>
          </h1>
          <div className="relative w-full max-w-3xl mb-12 animate-float-slow">
            <img src="https://i.imgur.com/tD8ZV66.png" alt="Mockup Pack Flora Line" className="w-full h-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.9)]" />
          </div>
          <div className="max-w-2xl mb-10">
            <p className="text-white/80 text-xl md:text-2xl leading-relaxed font-medium">
              São <span className="text-white font-black">50 Pincéis Florais</span> criados para tatuadores que querem criar artes com mais rapidez, mantendo o estilo autoral sem perder tempo com o básico
            </p>
          </div>
          <div className="flex flex-col items-center gap-6 w-full px-4">
            <ButtonNeon onClick={() => document.getElementById('ofertas')?.scrollIntoView({ behavior: 'smooth' })}>QUERO ACESSAR O PACK AGORA!</ButtonNeon>
            <img src="https://i.imgur.com/6LIuynd.png" alt="Meios de pagamento e segurança" className="w-full max-w-[200px] h-auto opacity-70" />
          </div>
        </div>
      </Section>

      {/* Pain Intensification Block (BLOCO 2) */}
      <Section className="relative overflow-hidden pt-12 pb-24" style={{ background: 'radial-gradient(circle at 50% -20%, #2A0505 0%, #050101 100%)' }}>
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-12">
          {/* Headline on top */}
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight tracking-tight text-white">
              O problema não é desenhar flores. <br />
              <span className="text-[#ea580c]">É perder tempo com o que você já domina.</span>
            </h2>
          </div>

          {/* Image in middle */}
          <div className="mb-16 max-w-4xl mx-auto relative">
            <div className="relative overflow-hidden rounded-[2rem] border-[0.5px] border-white/30 shadow-[0_30px_60px_rgba(0,0,0,0.6)]">
              <div className="relative">
                <div className="absolute top-4 left-4 z-20"><span className="bg-[#94a3b8] text-white font-black px-6 py-2 rounded-xl text-sm md:text-lg uppercase">ANTES</span></div>
                <div className="absolute top-4 right-4 z-20"><span className="bg-[#a6ff00] text-black font-black px-6 py-2 rounded-xl text-sm md:text-lg uppercase">DEPOIS</span></div>
                <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 md:w-1.5 bg-[#B83D00] z-10 opacity-60" />
                <img src="https://i.imgur.com/dQJkh3v.png" alt="Comparativo Flora Line" className="w-full h-auto" />
              </div>
            </div>
          </div>

          {/* Bullets in a box below */}
          <div className="w-full max-w-3xl bg-[#1A0501] border border-[#ea580c]/20 p-10 rounded-[3rem] shadow-2xl">
            <div className="flex flex-col gap-8">
              {[
                "Você já sabe desenhar florais fine line, mas ainda começa toda arte do zero.",
                "Toda tattoo exige repetir folha, galho e base antes de chegar no que importa.",
                "Esses minutos se acumulam e reduzem a quantidade de tattoos criadas no dia"
              ].map((bullet, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#ea580c]" />
                  <p className="text-gray-300 text-xl md:text-2xl font-bold leading-relaxed">
                    {bullet}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Preview Section (BLOCO 3) */}
      <Section className="relative z-10 border-y border-white/5" style={{ background: 'radial-gradient(circle at 50% 50%, #1C0202 0%, #050101 100%)' }}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05]" style={{ background: 'linear-gradient(to bottom, #D5D6D9, #A2A5AB)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Crie artes florais em poucos minutos
          </h2>
        </div>
        <div className="max-w-[500px] mx-auto">
          <div className="aspect-[1080/1440] bg-black rounded-3xl overflow-hidden border-2 border-zinc-900 shadow-[0_0_60px_rgba(0,0,0,0.8)] relative group">
            <iframe src="https://player.vimeo.com/video/1155626429?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" className="absolute inset-0 w-full h-full" title="Assista à demonstração técnica"></iframe>
          </div>
          <p className="text-center text-[10px] font-black uppercase tracking-[0.2em] mt-6 text-gray-600">Assista à demonstração técnica</p>
        </div>
      </Section>

      {/* Routine Section (BLOCO 3) */}
      <Section style={{ backgroundColor: '#1B0404' }}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-12 leading-tight max-w-4xl mx-auto">
            <span className="text-white">O que muda na rotina do tatuador com o</span> <span className="text-[#ea580c]">Pack Flora Line</span>
          </h2>
          <div className="flex flex-col items-center gap-6 max-w-2xl mx-auto">
            {['Mais projetos finalizados', 'Economiza tempo', 'Reduz o cansaço'].map((text, i) => (
              <div key={i} className="group bg-[#3F1812] hover:bg-[#4F2822] w-full py-10 px-8 rounded-[2rem] border border-white/5 flex flex-col items-center gap-6 shadow-xl transition-all duration-300">
                {i === 0 ? <CheckCircle2 className="w-16 h-16 text-[#a6ff00] stroke-[2.5] group-hover:drop-shadow-[0_0_8px_rgba(166,255,0,0.8)] transition-all" /> : i === 1 ? <Clock className="w-16 h-16 text-[#a6ff00] stroke-[2.5] group-hover:drop-shadow-[0_0_8px_rgba(166,255,0,0.8)] transition-all" /> : <Battery className="w-16 h-16 text-[#a6ff00] stroke-[2.5] group-hover:drop-shadow-[0_0_8px_rgba(166,255,0,0.8)] transition-all" />}
                <h3 className="font-black text-2xl md:text-3xl text-white tracking-tight group-hover:text-[#a6ff00] transition-colors">{text}</h3>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Comparison Section (BLOCO 4) */}
      <div
        className="py-24 px-4 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #B83D00 0%, #632500 100%)',
          position: 'relative'
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.15] pointer-events-none"
          style={{
            backgroundImage: "url('https://i.imgur.com/WgTOlxa.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-16 text-white leading-tight tracking-tighter">
            Você não precisa trabalhar por horas. <span className="bg-[#000000]/25 px-3 py-1 rounded-lg">o pack economiza o seu tempo!</span>
          </h2>
          <ButtonNeon onClick={() => document.getElementById('ofertas')?.scrollIntoView({ behavior: 'smooth' })} className="!text-sm md:!text-lg !py-3 !px-8 !rounded-[1rem]">QUERO COMEÇAR AGORA!</ButtonNeon>
        </div>
      </div>

      {/* Ideal For Section (BLOCO 5) */}
      <Section className="relative overflow-hidden" style={{ background: 'radial-gradient(circle at 50% 50%, #2A0505 0%, #050101 100%)' }}>
        <h2 className="text-center text-3xl md:text-5xl font-black mb-16 uppercase tracking-tight drop-shadow-lg" style={{ background: 'linear-gradient(to bottom, #D5D6D9, #A2A5AB)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>IDEAL PARA VOCÊ QUE DESEJA...</h2>
        <div className="flex flex-col gap-10 max-w-4xl mx-auto">
          {[
            { icon: Flower2, title: "Criar mais rápido", desc: "Montar artes florais Fine Line em minutos, sem desenhar tudo do zero." },
            { icon: ShieldCheck, title: "Manter padrão profissional", desc: "Garantir consistência nas tattoos mesmo com agenda cheia." },
            { icon: PenTool, title: "Preservar o estilo autoral", desc: "Ajustar, combinar e personalizar cada arte ao seu traço." },
            { icon: Users, title: "Produzir mais no mesmo tempo", desc: "Agilizar a criação e aumentar o número de tattoos por dia." }
          ].map((item, idx) => (
            <div key={idx}
              className="relative border border-white/5 p-6 md:p-10 rounded-[2rem] flex flex-col items-center gap-5 shadow-2xl transition-all duration-300 group text-center overflow-hidden bg-[#4F0100] hover:bg-[#810100]"
            >
              <div className="relative z-10 w-20 h-20 md:w-28 md:h-28 rounded-2xl flex items-center justify-center flex-shrink-0 bg-black/40 group-hover:bg-[#a04000] transition-colors mb-4 shadow-xl">
                <item.icon className="w-10 h-10 md:w-14 md:h-14 text-[#fbbf24] stroke-[1.5]" />
              </div>
              <div className="relative z-10 flex-1">
                <h3 className="text-3xl md:text-5xl font-black mb-4 text-[#fbbf24] tracking-tight leading-tight">{item.title}</h3>
                <p className="text-white/80 text-xl md:text-3xl font-medium leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Custom Section (BLOCO 6) */}
      <Section className="text-center" style={{ background: 'radial-gradient(circle at 50% 50%, #1a0101 0%, #050101 100%)' }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(191,55,3,0.15)_0%,transparent_50%)] pointer-events-none" />
        <h2 className="text-4xl md:text-8xl font-black mb-16 uppercase leading-[1.05] tracking-tighter">MODIFIQUE <span className="text-[#BF3703] italic">100% AO SEU GOSTO</span></h2>
        <div className="px-8 md:px-0"><CustomCarousel /></div>
      </Section>

      {/* Bundle Details (BLOCO 7) */}
      <div className="bg-[#050101] py-24 px-4 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `url('https://i.imgur.com/WgTOlxa.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-center text-4xl md:text-7xl font-black mb-16 uppercase leading-[1.1] tracking-tighter">
            <span className="text-white">AO GARANTIR O</span><br /><span className="text-[#BF3703]">PACK FLORA LINE</span><br /><span className="text-white">VOCÊ RECEBE:</span>
          </h2>
          <div className="border border-white/10 rounded-[3rem] p-6 md:p-12 shadow-[0_30px_100px_rgba(0,0,0,0.8)] relative overflow-hidden" style={{ backgroundColor: '#222222' }}>
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
              <div className="w-full md:w-[45%] flex justify-center items-center relative">
                <div className="absolute w-[120%] h-[120%] bg-[#BF3703]/10 blur-[80px] rounded-full -z-10" />
                <img src="https://i.imgur.com/0M32h78.png" alt="Pack Flora Line Mockup" className="w-full h-auto drop-shadow-[0_15px_40px_rgba(0,0,0,0.6)] animate-float-slow" />
              </div>
              <div className="w-full md:w-[55%] flex flex-col gap-10">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-6 h-6 bg-[#a6ff00] rounded-full flex items-center justify-center"><LayoutGrid className="w-3.5 h-3.5 text-black" /></div>
                    <h3 className="text-xl md:text-2xl font-black text-white">Dentro do Pack Flora Line você encontra:</h3>
                  </div>
                  <div className="flex flex-col gap-4">
                    {['Pincéis florais de rosas', 'Pincéis florais de lírios', 'Pincéis florais de crisântemos', 'Pincéis florais de sakuras', 'E mais'].map(item => (
                      <div key={item} className="bg-black/40 border border-white/5 rounded-2xl py-4 px-6 flex items-center gap-3 transition-all hover:bg-white/10">
                        <div className="w-5 h-5 bg-[#a6ff00] rounded-full flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-black stroke-[3]" />
                        </div>
                        <span className="text-white font-bold text-sm md:text-base">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Compatível com Procreate",
                    "Uso vitalício",
                    "Acesso imediato",
                    "Suporte",
                    "Garantia de 7 Dias",
                    "Entrega via Hotmart"
                  ].map((point) => (
                    <div key={point} className="bg-[#1a1a1a] border border-[#BF3703]/30 rounded-xl px-4 py-3 flex items-center gap-3 shadow-sm">
                      <div className="w-2 h-2 rounded-full bg-[#ea580c] shrink-0" />
                      <span className="text-white text-[10px] md:text-xs font-bold uppercase tracking-wider">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bonuses Section (BLOCO 8) */}
      <Section className="text-center" style={{ background: 'linear-gradient(to right, #8E2500, #632500)' }}>
        <h2
          className="text-4xl md:text-7xl font-black mb-6 uppercase tracking-tighter"
          style={{
            background: 'linear-gradient(to right, #B2FC30, #D49301)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 0 12px rgba(178, 252, 48, 0.45))'
          }}
        >
          3 BÔNUS EXCLUSIVOS
        </h2>
        <p className="text-white mb-20 max-w-2xl mx-auto font-bold text-xl md:text-2xl leading-tight">
          Tudo o que você precisa para produzir rápido no seu dia a dia.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              id: 1,
              title: "Folhas Minimalistas",
              desc: "60 pincéis de folhas simples e leves.",
              img: "https://i.imgur.com/ssF9QVG.png",
              accentColor: "#a6ff00"
            },
            {
              id: 2,
              title: "Lírios Deslumbrantes",
              desc: "25 pincéis de Lírios limpos e versáteis.",
              img: "https://i.imgur.com/Y7gzgEz.png",
              accentColor: "#D29301"
            },
            {
              id: 3,
              title: "Rosas Magníficas",
              desc: "100 pincéis variados e impactantes.",
              img: "https://i.imgur.com/0Xy2nLB.png",
              accentColor: "#FF1598"
            }
          ].map((bonus) => (
            <div key={bonus.id}
              className="relative flex flex-col h-full rounded-[4rem] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.7)] transition-all duration-500 hover:scale-[1.02] text-left p-10 border border-white/5"
              style={{
                background: 'radial-gradient(circle at top left, #1a0101 0%, #000000 100%)'
              }}
            >

              {/* Top Section: Badges */}
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-xl md:text-2xl font-black uppercase tracking-[0.2em]" style={{ color: bonus.accentColor }}>BÔNUS #{bonus.id}</span>
                <div className="bg-[#1a1a1a] border border-white/10 px-4 py-1.5 rounded-full flex items-center gap-2 shadow-sm">
                  <span className="text-[10px] md:text-xs font-black uppercase tracking-widest" style={{ color: bonus.accentColor }}>PRESENTE 🎁</span>
                </div>
              </div>

              {/* Center Section: Spotlight & Mockup */}
              <div className="flex-grow flex items-center justify-center mb-4 relative min-h-[300px]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 blur-[120px] rounded-full pointer-events-none opacity-40" style={{ backgroundColor: bonus.accentColor }} />
                <img src={bonus.img} alt={bonus.title} className="w-full max-w-[340px] h-auto drop-shadow-[0_25px_45px_rgba(0,0,0,0.7)] animate-float-slow relative z-10" />
              </div>

              {/* Bottom Section: Typography & Footer */}
              <div className="mt-auto">
                <h3 className="text-3xl md:text-4xl font-black mb-2 tracking-tight leading-tight" style={{ color: bonus.accentColor }}>{bonus.title}</h3>
                <p className="text-lg md:text-xl text-white font-medium leading-relaxed mb-6">{bonus.desc}</p>

                <div className="pt-4 border-t border-white/10 flex items-center gap-3 opacity-40">
                  <ShieldCheck className="w-5 h-5 text-white" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-white">INCLUSO NO PACK COMPLETO</span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </Section>

      {/* Pricing Section (BLOCO 9) */}
      <Section id="ofertas" style={{ background: 'linear-gradient(135deg, #0F0302 0%, #1A0404 100%)' }}>
        <h2 className="text-center text-3xl md:text-5xl font-black mb-16 uppercase text-gradient-silver tracking-tight">ESCOLHA A MELHOR OPÇÃO PARA VOCÊ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">

          {/* Plano Básico */}
          <div
            className="p-10 rounded-[3rem] border border-white/30 flex flex-col items-center relative group shadow-none"
            style={{
              background: 'linear-gradient(135deg, rgba(33, 17, 17, 0.8) 0%, rgba(33, 17, 17, 0.6) 100%)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <h3 className="font-black uppercase tracking-widest text-2xl md:text-4xl mb-12 text-[#D9D9D9]">PLANO BÁSICO</h3>
            <img src="https://i.imgur.com/0M32h78.png" alt="Basic Pack" className="w-full max-w-[360px] h-auto mb-10 drop-shadow-lg" />

            <ul className="space-y-4 mb-12 w-full max-w-[320px]">
              {['50 pincéis florais', 'Acesso vitalício', 'Compatível com Procreate', 'Garantia de 7 dias', 'Suporte'].map(item => (
                <li key={item} className="flex items-center gap-4 text-lg md:text-xl text-white font-medium p-2">
                  <CheckCircle2 className="w-6 h-6 text-[#a6ff00] flex-shrink-0" strokeWidth={2.5} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-col items-center gap-4 w-full">
              <div className="text-center">
                <span className="text-sm uppercase font-black text-white/40 tracking-widest">de 97,80 por</span>
                <div className="text-5xl font-black text-[#a6ff00] mt-1">R$ 17,90</div>
                <span className="text-lg font-bold text-white/60">ou 2x de 8,95</span>
              </div>
              <ButtonNeon
                href={checkoutUrlBasico}
                onClick={handleCheckoutClick('Plano Básico', 17.90, 'basico')}
                className="w-full !px-12"
              >
                QUERO O BÁSICO
              </ButtonNeon>
              <img src="https://i.imgur.com/6LIuynd.png" alt="Segurança" className="w-40 h-auto opacity-60 mt-2" />

              <div className="flex flex-col items-center mt-6">
                <p className="text-[10px] text-[#ff0000] font-black uppercase tracking-widest mb-2">Opção Mais Vantajosa Abaixo!</p>
                <div className="flex flex-col gap-1 items-center animate-bounce">
                  <ChevronDown className="w-6 h-6 text-[#ff0000]" strokeWidth={4} />
                  <ChevronDown className="w-6 h-6 text-[#ff0000] -mt-4 opacity-70" strokeWidth={4} />
                </div>
              </div>
            </div>
          </div>

          {/* Plano Profissional (Antigo Completo) */}
          <div
            className="p-10 rounded-[3rem] border border-white/20 flex flex-col items-center relative overflow-hidden shadow-2xl"
            style={{
              background: 'radial-gradient(circle at center, #7A1E1E 0%, #1F0505 100%)'
            }}
          >
            <div className="flex flex-col items-center mb-12">
              <div className="bg-[#a6ff00] px-4 py-1.5 rounded-full mb-3 flex items-center justify-center shadow-[0_0_15px_rgba(166,255,0,0.3)]">
                <span className="text-green-900 font-black uppercase text-[10px] tracking-widest">MAIS VENDIDO 🔥</span>
              </div>
              <h3 className="font-black uppercase tracking-widest text-2xl md:text-4xl text-white text-center">PLANO PROFISSIONAL</h3>
            </div>

            <img src="https://i.imgur.com/YQXf3Ie.png" alt="Professional Pack" className="w-full max-w-[650px] h-auto mb-14 drop-shadow-[0_25px_50px_rgba(0,0,0,0.7)] scale-125" />

            <ul className="space-y-5 mb-12 w-full max-w-[400px]">
              {[
                { text: '50 Pincéis Florais', isBonus: false },
                { text: 'Acesso Vitalício', isBonus: false },
                { text: 'Garantia 7 Dias', isBonus: false },
                { text: 'Suporte', isBonus: false },
                { text: 'Bônus #1 Folhas Minimalistas', isBonus: true },
                { text: 'Bônus #2 Lírios Deslumbrantes', isBonus: true },
                { text: 'Bônus #3 Rosas Magníficas', isBonus: true }
              ].map((item, idx) => (
                <li key={idx} className={`flex items-center gap-4 text-lg md:text-xl font-medium transition-all ${item.isBonus ? 'text-[#fbbf24] [text-shadow:0_0_15px_rgba(251,191,36,0.5)] font-black' : 'text-white'}`}>
                  {item.isBonus ? (
                    <Star className="w-6 h-6 text-[#fbbf24] fill-[#fbbf24] flex-shrink-0 drop-shadow-[0_0_8px_rgba(251,191,36,0.4)]" />
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-[#a6ff00] flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-black" strokeWidth={4} />
                    </div>
                  )}
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-col items-center gap-4 w-full">
              <div className="text-center">
                <span className="text-sm uppercase font-black text-white/40 tracking-widest">de 197,80 por</span>
                <div className="text-6xl font-black text-[#a6ff00] mt-1">R$ 27,90</div>
                <span className="text-xl font-bold text-white/60">ou 3x de 9,10</span>
                <p className="text-sm font-black text-[#fbbf24] mt-2 uppercase tracking-wide"> – Economize R$ 239,90 hoje – </p>
              </div>
              <ButtonNeon
                href={checkoutUrlProfissional}
                onClick={handleCheckoutClick('Plano Profissional', 27.90, 'profissional')}
                className="w-full !px-12"
              >
                QUERO O PROFISSIONAL
              </ButtonNeon>

              <img src="https://i.imgur.com/6LIuynd.png" alt="Segurança" className="w-44 h-auto opacity-70 mt-2" />
            </div>
          </div>

        </div>
      </Section>

      {/* FAQ Section (BLOCO 10) */}
      <Section className="bg-[#050101] border-t border-white/5">
        <h2 className="text-center text-3xl font-black mb-16 uppercase">Dúvidas Frequentes</h2>
        <div className="max-w-3xl mx-auto space-y-2">
          {[
            { q: "1️⃣ Pincéis genéricos?", a: "Não. Eles se adaptam ao seu traço e estilo. O resultado continua autoral — só que mais rápido." },
            { q: "2️⃣ Fine line real?", a: "Sim, os pincéis foram calibrados especificamente para simular a pressão e fluidez necessárias para o estilo fine line." },
            { q: "3️⃣ Preciso saber Procreate?", a: "O pack é intuitivo. Se você ya usa o básico do Procreate, conseguirá usar todos os pincéis sem dificuldades." },
            { q: "4️⃣ iPad/Android?", a: "O pack foi desenvolvido especificamente para Procreate no iPad. Compatibilidade com outros softwares não é garantida." },
            { q: "5️⃣ Como recebo?", a: "O acesso é imediato após a confirmação do pagamento. Você receberá um e-mail com todas as instruções para download via Hotmart." },
            { q: "6️⃣ Tem garantia?", a: "Oferecemos 7 dias de garantia incondicional. Se não gostar, devolvemos seu dinheiro." }
          ].map((faq, i) => (
            <FAQItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </Section>

      <footer className="py-12 bg-[#050101] border-t border-white/5 text-center px-4">
        <p className="text-gray-600 text-[10px] font-normal uppercase tracking-widest">© 2025 Pack Flora Line - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
