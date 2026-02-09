
import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Target, 
  Calendar, 
  CheckCircle2, 
  MessageCircle, 
  ArrowRight, 
  Briefcase, 
  Heart, 
  ShieldCheck, 
  Zap, 
  ChevronDown, 
  Award, 
  TrendingUp, 
  Compass, 
  Star,
  Play,
  X
} from 'lucide-react';

// --- Types ---
interface Testimonial {
  name: string;
  role: string;
  thumb: string;
  videoUrl: string;
}

// --- Components ---

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/90 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-white font-serif text-xl md:text-2xl font-bold tracking-tight">
          LUIS <span className="text-amber-500">PIZZOL</span>
        </div>
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300 uppercase tracking-widest">
          <a href="#metodo" className="hover:text-amber-500 transition-colors">O Método</a>
          <a href="#publico" className="hover:text-amber-500 transition-colors">Para Quem</a>
          <a href="#depoimentos" className="hover:text-amber-500 transition-colors">Depoimentos</a>
          <a href="#quem-e" className="hover:text-amber-500 transition-colors">O Mentor</a>
          <a href="#resultados" className="hover:text-amber-500 transition-colors">Resultados</a>
        </div>
        <a 
          href="https://wa.me/5517991953588" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-amber-600 hover:bg-amber-500 text-white px-5 py-2 rounded-full text-sm font-bold transition-all shadow-lg hover:shadow-amber-900/20"
        >
          CONTATO
        </a>
      </div>
    </nav>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 lg:pt-20 overflow-hidden bg-slate-950">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-600/10 rounded-full blur-[120px] -mr-96 -mt-96 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] -ml-64 -mb-64"></div>
      
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-600/20 text-amber-500 text-xs font-bold uppercase tracking-wider mb-6 border border-amber-600/30">
            Mentoria em Grupo
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-8">
            Revolução Profissional <span className="text-amber-500 italic block">360º</span>
          </h1>
          <p className="text-xl text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Pare de lutar contra o fluxo. Uma mentoria sistêmica para quem já possui o saber, mas não converte esforço em <span className="text-white font-semibold">renda e leveza</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a 
              href="https://wa.me/5517991953588"
              className="group flex items-center justify-center gap-3 bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-xl hover:shadow-amber-600/40"
            >
              Candidatar-me Agora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#metodo"
              className="flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-xl text-lg font-semibold border border-white/10 transition-all backdrop-blur-sm"
            >
              Conhecer Método
            </a>
          </div>
          <p className="mt-8 text-slate-500 text-sm flex items-center justify-center lg:justify-start gap-2">
            <Users className="w-4 h-4 text-amber-600" />
            Grupo exclusivo de apenas 15 pessoas
          </p>
        </div>
        
        <div className="relative lg:mt-0">
          <div className="relative z-10 overflow-hidden max-w-md mx-auto lg:max-w-none">
            <img 
              src="https://i.ibb.co/tpK4YFwT/MENTOR-CONSTELADOR-SIST-MICO-E-ESTRAT-GICO.png" 
              alt="Luis Pizzol Mentor" 
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>
          <div className="absolute -top-8 -right-8 w-24 md:w-32 h-24 md:h-32 bg-amber-600/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute -bottom-8 -left-8 w-32 md:w-48 h-32 md:h-48 border border-white/5 rounded-full"></div>
        </div>
      </div>
      
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-slate-500 hidden md:block">
        <ChevronDown />
      </div>
    </section>
  );
};

const Features: React.FC = () => {
  return (
    <section id="metodo" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">É apenas mais uma Mentoria?</h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Não. É um processo integrado: <span className="text-white">Terapêutico, Sistêmico e Estratégico</span>. 
            Trabalhamos o desalinhamento interno que impede o avanço técnico.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Heart className="w-8 h-8 text-amber-500" />,
              title: "O Indivíduo",
              description: "Alinhamento interno e cura emocional para sustentar o crescimento."
            },
            {
              icon: <Users className="w-8 h-8 text-amber-500" />,
              title: "As Relações",
              description: "Como suas dinâmicas familiares e sociais impactam sua autoridade profissional."
            },
            {
              icon: <Briefcase className="w-8 h-8 text-amber-500" />,
              title: "O Negócio",
              description: "A estratégia prática para transformar saber técnico em renda sustentável."
            }
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-2xl bg-slate-950 border border-white/5 hover:border-amber-600/30 transition-all group">
              <div className="bg-amber-600/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TargetAudience: React.FC = () => {
  return (
    <section id="publico" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-serif text-white mb-8">Esta Mentoria é para você?</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="mt-1"><CheckCircle2 className="w-6 h-6 text-emerald-500" /></div>
              <p className="text-slate-300 text-lg">Profissionais experientes que sentem que não estão avançando proporcionalmente ao seu saber.</p>
            </div>
            <div className="flex gap-4">
              <div className="mt-1"><CheckCircle2 className="w-6 h-6 text-emerald-500" /></div>
              <p className="text-slate-300 text-lg">Quem está pronto para amadurecer e assumir seu lugar sistêmico.</p>
            </div>
            <div className="flex gap-4">
              <div className="mt-1"><CheckCircle2 className="w-6 h-6 text-emerald-500" /></div>
              <p className="text-slate-300 text-lg">Líderes e autônomos que buscam leveza na condução de seus projetos.</p>
            </div>
          </div>
          
          <div className="mt-12 p-8 rounded-2xl bg-red-950/20 border border-red-900/30">
            <h4 className="text-red-500 font-bold uppercase tracking-widest text-sm mb-4">NÃO INDICADO PARA:</h4>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-center gap-2">• Iniciantes na carreira</li>
              <li className="flex items-center gap-2">• Quem busca fórmulas prontas ou "hacks" mágicos</li>
              <li className="flex items-center gap-2">• Pessoas não dispostas ao processo terapêutico</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-slate-900 p-8 md:p-12 rounded-3xl border border-white/5 shadow-inner">
          <div className="text-amber-500 font-bold mb-6 flex items-center gap-3">
            <Calendar className="w-6 h-6" />
            O FORMATO DA JORNADA
          </div>
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="text-white bg-slate-800 p-3 rounded-lg font-bold">4</div>
              <div>
                <p className="text-white font-bold">Meses de Acompanhamento</p>
                <p className="text-slate-400 text-sm">Tempo necessário para a maturação dos novos padrões.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-white bg-slate-800 p-3 rounded-lg font-bold">W</div>
              <div>
                <p className="text-white font-bold">Encontros Semanais Online</p>
                <p className="text-slate-400 text-sm">Sessões ao vivo em grupo para trabalho estratégico e sistêmico.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-white bg-slate-800 p-3 rounded-lg font-bold">1:1</div>
              <div>
                <p className="text-white font-bold">Acompanhamento Individual</p>
                <p className="text-slate-400 text-sm">Encontro individual mensal para ajustes finos de rota.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-white bg-slate-800 p-3 rounded-lg font-bold">15</div>
              <div>
                <p className="text-white font-bold">Vagas Limitadas</p>
                <p className="text-slate-400 text-sm">Grupo exclusivo para garantir profundidade nas trocas.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const VideoCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="group relative">
      <div className="aspect-[9/16] rounded-2xl overflow-hidden bg-slate-950 border border-white/5 relative shadow-2xl">
        {!isPlaying ? (
          <>
            <img 
              src={testimonial.thumb} 
              alt={testimonial.name} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-60 group-hover:opacity-100" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
            
            {/* Play Button Overlay */}
            <button 
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 flex items-center justify-center group/btn"
              aria-label={`Assistir depoimento de ${testimonial.name}`}
            >
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center shadow-2xl scale-90 group-hover/btn:scale-110 transition-transform duration-300">
                <Play className="w-6 h-6 text-white fill-current ml-1" />
              </div>
            </button>

            {/* Info */}
            <div className="absolute bottom-6 left-6 right-6 pointer-events-none text-left">
              <p className="text-white font-bold text-lg">{testimonial.name}</p>
              <p className="text-amber-500 text-xs font-medium uppercase tracking-wider">{testimonial.role}</p>
            </div>
          </>
        ) : (
          <div className="w-full h-full relative bg-black">
            <button 
              onClick={() => setIsPlaying(false)}
              className="absolute top-4 right-4 z-20 bg-black/50 text-white p-2 rounded-full hover:bg-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            {testimonial.videoUrl.includes('youtube.com') || testimonial.videoUrl.includes('youtu.be') ? (
              <iframe 
                src={`${testimonial.videoUrl}${testimonial.videoUrl.includes('?') ? '&' : '?'}autoplay=1`}
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            ) : (
              <video 
                src={testimonial.videoUrl} 
                className="w-full h-full object-cover" 
                controls 
                autoPlay
              ></video>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const VideoTestimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    { 
      name: "Lícia José Pires de Oliveira", 
      role: "Dentista e Empresária", 
      thumb: "https://static.wixstatic.com/media/33e307_8e5555986cdf44edad97795ecd4a8af8f003.jpg?q=80&w=800&auto=format&fit=crop",
      videoUrl: "https://video.wixstatic.com/video/33e307_8e5555986cdf44edad97795ecd4a8af8/360p/mp4/file.mp4" 
    },
    { 
      name: "Valderez Simensatto", 
      role: "Advogada e psicóloga", 
      thumb: "https://static.wixstatic.com/media/33e307_24f5585840a54f3e8bb42f4c66bcd626f003.jpg?q=80&w=800&auto=format&fit=crop",
      videoUrl: "https://video.wixstatic.com/video/33e307_24f5585840a54f3e8bb42f4c66bcd626/360p/mp4/file.mp4" 
    },
    { 
      name: "Alceu Keller", 
      role: "Empresário", 
      thumb: "https://static.wixstatic.com/media/33e307_a85f27acba03486082bb6cc70804a6d0f003.jpg",
      videoUrl: "https://video.wixstatic.com/video/33e307_a85f27acba03486082bb6cc70804a6d0/360p/mp4/file.mp4"
    },
    { 
      name: "Cléia Costa", 
      role: "Executiva", 
      thumb: "https://static.wixstatic.com/media/33e307_9eb67add48314402932e1ae38ef3d8d4f003.jpg?q=80&w=800&auto=format&fit=crop",
      videoUrl: "https://video.wixstatic.com/video/33e307_9eb67add48314402932e1ae38ef3d8d4/360p/mp4/file.mp4" 
    }
  ];

  return (
    <section id="depoimentos" className="py-24 bg-slate-900 overflow-hidden text-center">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <span className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-2 block">Transformação Real</span>
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">Histórias de Sucesso</h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Veja como a visão sistêmica e estratégica do Luis Pizzol impactou a vida e os negócios de profissionais experientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((video, idx) => (
            <VideoCard key={idx} testimonial={video} />
          ))}
        </div>

        <div className="mt-16">
          <a 
            href="https://wa.me/5517991953588" 
            target="_blank"
            className="inline-flex items-center gap-2 text-slate-300 hover:text-amber-500 font-semibold transition-colors group"
          >
            Quero ter resultados como estes
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

const AboutLuis: React.FC = () => {
  return (
    <section id="quem-e" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-amber-600/5 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Quem é Luis Pizzol?</h2>
            <div className="w-20 h-1.5 bg-amber-600 rounded-full mb-8 mx-auto lg:mx-0"></div>
            
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              Com <span className="text-white font-bold">25 anos de experiência</span> como executivo de um grupo empresarial e mais de <span className="text-white font-bold">20 anos</span> atuando como consultor estratégico e mentor, ajudo profissionais e empresas a crescerem de forma sustentável e alinhada com seus propósitos.
            </p>
            
            <p className="text-lg text-slate-300 mb-10 leading-relaxed">
              Integro estratégia, visão sistêmica e inteligência de mercado para que profissionais e empresas não apenas cresçam, mas prosperem com consistência e segurança. Especialização em Inteligência Sistêmica e Constelação Sistêmica Empresarial.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 text-left">
              {[
                { icon: <Award className="w-6 h-6 text-amber-500" />, title: "Especialista Sistêmico", desc: "Inteligência e Constelação Sistêmica Empresarial." },
                { icon: <TrendingUp className="w-6 h-6 text-amber-500" />, title: "Visão de Mercado", desc: "Duas décadas de consultoria estratégica real." },
                { icon: <Compass className="w-6 h-6 text-amber-500" />, title: "Foco em Propósito", desc: "Alinhamento entre resultados e realização pessoal." },
                { icon: <Star className="w-6 h-6 text-amber-500" />, title: "Mentor Estratégico", desc: "Acompanhamento direto baseado em experiência prática." }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="p-3 bg-amber-600/10 rounded-xl shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
             <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/5] md:aspect-auto">
              <img 
                src="https://i.ibb.co/nqLkv3H9/Whats-App-Image-2026-02-09-at-10-01-47.jpg?q=80&w=1974&auto=format&fit=crop" 
                alt="Luis Pizzol Profissional" 
                className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
            </div>
            <div className="absolute -top-6 -right-6 w-full h-full border-2 border-amber-600/20 rounded-3xl -z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Results: React.FC = () => {
  return (
    <section id="resultados" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">O que esperar desta Revolução?</h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Zap className="w-6 h-6" />, title: "Menos Esforço", desc: "Suporte consistente com fluidez e naturalidade." },
            { icon: <ShieldCheck className="w-6 h-6" />, title: "Clareza de Papéis", desc: "Relações saudáveis com trabalho e dinheiro." },
            { icon: <Target className="w-6 h-6" />, title: "Fim de Padrões", desc: "Superação de ciclos repetitivos de fracasso." },
            { icon: <Users className="w-6 h-6" />, title: "Posicionamento", desc: "Alinhamento total entre técnica e propósito." }
          ].map((item, i) => (
            <div key={i} className="bg-slate-950 p-6 rounded-2xl border-l-4 border-amber-600 shadow-lg hover:bg-slate-800 transition-colors">
              <div className="text-amber-500 mb-4">{item.icon}</div>
              <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center bg-amber-600/5 p-12 rounded-3xl border border-amber-600/20 max-w-4xl mx-auto">
          <p className="text-slate-300 text-xl font-serif italic mb-8 leading-relaxed">
            "Se você sente que já tentou muito, já aprendeu bastante, mas algo ainda não se sustenta apesar de todo o esforço... Este é o momento do alinhamento."
          </p>
          <div className="flex flex-col items-center gap-4">
             <a 
              href="https://wa.me/5517991953588"
              className="flex items-center gap-3 bg-amber-600 hover:bg-amber-500 text-white px-10 py-5 rounded-2xl text-xl font-bold transition-all shadow-xl text-center"
            >
              <MessageCircle className="w-6 h-6" />
              Falar com Luis no WhatsApp
            </a>
            <p className="text-slate-500 text-sm">
              * Candidatos passam por conversa individual prévia para avaliar adequação.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 py-12 border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <div className="text-white font-serif text-2xl font-bold tracking-tight mb-2">
            LUIS <span className="text-amber-500">PIZZOL</span>
          </div>
          <p className="text-slate-500 text-sm">Revolução Profissional 360º © 2024</p>
        </div>
        
        <div className="flex gap-6">
          <a href="#" className="text-slate-400 hover:text-white transition-colors">Instagram</a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors">LinkedIn</a>
          <a href="https://wa.me/5517991953588" className="text-slate-400 hover:text-white transition-colors">WhatsApp</a>
        </div>
        
        <div className="text-slate-500 text-xs text-center md:text-right">
          Mentoria Sistêmica & Estratégica<br />
          Sua força profissional vem do seu lugar sistêmico.
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-amber-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <TargetAudience />
        <VideoTestimonials />
        <AboutLuis />
        <Results />
      </main>
      <Footer />
      
      <a 
        href="https://wa.me/5517991953588"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-emerald-500 hover:bg-emerald-400 text-white p-4 rounded-full shadow-2xl md:hidden transition-transform active:scale-95"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>
  );
};

export default App;
