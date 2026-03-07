import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511914693294?text=Ol%C3%A1!%20Preciso%20de%20um%20encanador%20em%20S%C3%A3o%20Paulo.%20Vi%20o%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.";

const HeroSection = () => (
  <section className="relative overflow-hidden min-h-[90vh] flex items-center bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-cyan-400/30 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-blue-400/20 blur-3xl" />
    </div>
    <div className="container relative z-10 py-20 md:py-32">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block mb-6 px-4 py-1.5 rounded-full text-sm font-medium bg-cyan-400/15 text-cyan-300 border border-cyan-400/20">
            Atendimento Rápido
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
            Encanador em São Paulo{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
              com Atendimento Rápido
            </span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100/80 mb-10 max-w-2xl">
            Conserto de vazamentos, desentupimentos e manutenção hidráulica com atendimento rápido em São Paulo e região.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-cyan-500 text-white font-semibold text-lg hover:bg-cyan-400 transition-all duration-200 shadow-xl shadow-cyan-500/30"
            onClick={() => {
              if (typeof window !== 'undefined' && (window as any).gtag) {
                (window as any).gtag('event', 'click_whatsapp', {
                  event_category: 'lead',
                  event_label: 'botao_whatsapp_hero'
                });
              }
            }}
          >
            <MessageCircle className="w-5 h-5" />
            Solicitar Orçamento no WhatsApp
          </a>
        </motion.div>

        {/* Avatar do Encanador */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="hidden lg:flex flex-col items-center gap-6"
        >
          {/* Caixa de diálogo ACIMA */}
          <div className="relative max-w-[280px]">
            <div className="bg-white/95 backdrop-blur-sm border-2 border-cyan-400/40 rounded-xl p-4 shadow-xl relative">
              <p className="text-gray-800 text-sm text-center leading-relaxed">
                "A <span className="font-bold text-cyan-600">empresa LSB</span> criou meu site e triplicou minhas chamadas!"
              </p>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent border-t-white/95"></div>
            </div>
          </div>
          
          {/* Avatar do Encanador - 350x420px */}
          <div className="relative">
            <svg width="350" height="420" viewBox="0 0 200 240" className="drop-shadow-2xl">
              {/* Sombra */}
              <ellipse cx="100" cy="220" rx="60" ry="15" fill="#00000020"/>
              
              {/* Pernas - calça azul */}
              <rect x="75" y="180" width="20" height="50" fill="#1e40af" rx="10"/>
              <rect x="105" y="180" width="20" height="50" fill="#1e40af" rx="10"/>
              
              {/* Botas de borracha azuis */}
              <ellipse cx="85" cy="230" rx="14" ry="10" fill="#0369a1"/>
              <ellipse cx="115" cy="230" rx="14" ry="10" fill="#0369a1"/>
              <rect x="78" y="222" width="14" height="4" fill="#0ea5e9"/>
              <rect x="108" y="222" width="14" height="4" fill="#0ea5e9"/>
              
              {/* Tronco - camisa cinza */}
              <rect x="65" y="110" width="70" height="75" fill="#64748b" rx="12"/>
              
              {/* Bolsos da camisa */}
              <rect x="72" y="120" width="22" height="16" fill="#475569" rx="2"/>
              <rect x="106" y="120" width="22" height="16" fill="#475569" rx="2"/>
              
              {/* Braço direito segurando chave inglesa */}
              <ellipse cx="145" cy="135" rx="13" ry="38" fill="#64748b" transform="rotate(25 145 135)"/>
              <circle cx="156" cy="120" r="11" fill="#d4a574"/>
              
              {/* Chave inglesa grande */}
              <rect x="153" y="110" width="5" height="26" fill="#94a3b8" rx="2" transform="rotate(25 156 123)"/>
              <path d="M 154 108 L 148 104 L 150 110 Z" fill="#94a3b8"/>
              <circle cx="170" cy="128" r="6" fill="#cbd5e1"/>
              
              {/* Braço esquerdo segurando cano */}
              <ellipse cx="55" cy="145" rx="13" ry="40" fill="#64748b" transform="rotate(-25 55 145)"/>
              <circle cx="47" cy="170" r="11" fill="#d4a574"/>
              
              {/* Cano azul na mão */}
              <rect x="42" y="165" width="8" height="28" fill="#0ea5e9" rx="4" transform="rotate(-15 46 179)"/>
              <ellipse cx="44" cy="165" rx="4" ry="3" fill="#06b6d4"/>
              <ellipse cx="48" cy="193" rx="4" ry="3" fill="#0284c7"/>
              
              {/* Cinto de ferramentas marrom */}
              <rect x="68" y="108" width="64" height="9" fill="#92400e" rx="2"/>
              <rect x="82" y="112" width="8" height="16" fill="#b45309"/>
              <rect x="98" y="112" width="8" height="16" fill="#b45309"/>
              <rect x="114" y="112" width="8" height="16" fill="#b45309"/>
              
              {/* Pescoço */}
              <rect x="86" y="95" width="28" height="18" fill="#d4a574" rx="6"/>
              
              {/* Cabeça */}
              <circle cx="100" cy="75" r="34" fill="#d4a574"/>
              
              {/* Orelhas */}
              <ellipse cx="68" cy="75" rx="7" ry="12" fill="#d4a574"/>
              <ellipse cx="132" cy="75" rx="7" ry="12" fill="#d4a574"/>
              
              {/* Boné azul */}
              <path d="M 70 68 Q 70 42 100 40 Q 130 42 130 68 L 132 72 L 68 72 Z" fill="#0ea5e9"/>
              <ellipse cx="100" cy="72" rx="32" ry="8" fill="#0284c7"/>
              <rect x="68" y="70" width="64" height="3" fill="#0369a1"/>
              
              {/* Aba do boné */}
              <ellipse cx="100" cy="82" rx="40" ry="6" fill="#0369a1" opacity="0.8"/>
              
              {/* Logo de gota no boné */}
              <path d="M 100 48 Q 95 54 95 58 Q 95 62 100 62 Q 105 62 105 58 Q 105 54 100 48 Z" fill="#06b6d4"/>
              
              {/* Olhos */}
              <circle cx="88" cy="76" r="4" fill="#1e293b"/>
              <circle cx="112" cy="76" r="4" fill="#1e293b"/>
              <circle cx="89" cy="75" r="1.5" fill="#ffffff"/>
              <circle cx="113" cy="75" r="1.5" fill="#ffffff"/>
              
              {/* Sobrancelhas */}
              <path d="M 82 70 Q 88 68 94 70" stroke="#78350f" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              <path d="M 106 70 Q 112 68 118 70" stroke="#78350f" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              
              {/* Nariz */}
              <ellipse cx="100" cy="84" rx="5" ry="7" fill="#c4915f"/>
              
              {/* Bigode */}
              <path d="M 85 90 Q 100 88 115 90" stroke="#78350f" strokeWidth="3" fill="none" strokeLinecap="round"/>
              <path d="M 85 90 Q 80 92 75 93" stroke="#78350f" strokeWidth="3" fill="none" strokeLinecap="round"/>
              <path d="M 115 90 Q 120 92 125 93" stroke="#78350f" strokeWidth="3" fill="none" strokeLinecap="round"/>
              
              {/* Boca sorrindo */}
              <path d="M 88 96 Q 100 101 112 96" stroke="#78350f" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
            </svg>
            
            <div className="text-center mt-2">
              <p className="font-semibold text-white text-sm">Roberto Santos</p>
              <p className="text-xs text-blue-200">Encanador - SP</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
