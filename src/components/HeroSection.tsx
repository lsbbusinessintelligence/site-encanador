import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511914693294?text=Olá!%20Preciso%20de%20um%20encanador%20em%20São%20Paulo.%20Vi%20o%20site%20e%20gostaria%20de%20solicitar%20um%20orçamento.";

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

        {/* Avatar do Encanador Realista */}
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
          
          {/* Avatar Realista do Encanador em Círculo Azul */}
          <div className="relative">
            <svg width="320" height="320" viewBox="0 0 320 320" className="drop-shadow-2xl">
              {/* Círculo de fundo azul */}
              <circle cx="160" cy="160" r="155" fill="#0284c7" opacity="0.9"/>
              <circle cx="160" cy="160" r="145" fill="#0ea5e9"/>
              
              {/* Corpo - Macacão azul */}
              <rect x="90" y="200" width="140" height="110" fill="#1e40af" rx="8"/>
              
              {/* Bolso do macacão */}
              <rect x="115" y="220" width="35" height="30" fill="#1e3a8a" rx="3"/>
              <rect x="170" y="220" width="35" height="30" fill="#1e3a8a" rx="3"/>
              <circle cx="125" cy="228" r="2" fill="#64748b"/>
              <circle cx="180" cy="228" r="2" fill="#64748b"/>
              
              {/* Alças do macacão */}
              <rect x="110" y="170" width="15" height="40" fill="#1e40af" rx="7"/>
              <rect x="195" y="170" width="15" height="40" fill="#1e40af" rx="7"/>
              <circle cx="117.5" cy="175" r="5" fill="#fbbf24"/>
              <circle cx="202.5" cy="175" r="5" fill="#fbbf24"/>
              
              {/* Camisa branca */}
              <path d="M 110 170 Q 110 160 125 155 L 195 155 Q 210 160 210 170 L 210 200 L 110 200 Z" fill="#f8fafc"/>
              
              {/* Gola da camisa */}
              <path d="M 145 155 L 150 145 L 160 140 L 170 145 L 175 155" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1"/>
              
              {/* Braço direito com chave inglesa */}
              <ellipse cx="230" cy="195" rx="18" ry="55" fill="#1e40af" transform="rotate(35 230 195)"/>
              <circle cx="245" cy="170" r="16" fill="#a67c52"/>
              
              {/* Chave inglesa laranja/vermelha grande */}
              <g transform="rotate(45 255 160)">
                <rect x="245" y="145" width="10" height="50" fill="#dc2626" rx="5"/>
                <rect x="245" y="145" width="10" height="50" fill="#ef4444" rx="5" opacity="0.7"/>
                <path d="M 243 143 L 235 138 L 238 148 Z" fill="#dc2626"/>
                <circle cx="268" cy="195" r="12" fill="#f87171" opacity="0.8"/>
                <circle cx="268" cy="195" r="8" fill="#dc2626"/>
                <rect x="250" y="160" width="6" height="3" fill="#fbbf24"/>
              </g>
              
              {/* Braço esquerdo */}
              <ellipse cx="90" cy="200" rx="18" ry="55" fill="#1e40af" transform="rotate(-25 90 200)"/>
              <circle cx="75" cy="225" r="16" fill="#a67c52"/>
              <ellipse cx="75" cy="225" rx="12" ry="16" fill="#a67c52"/>
              
              {/* Polegar levantado */}
              <rect x="68" y="208" width="8" height="15" fill="#a67c52" rx="4" transform="rotate(-20 72 215)"/>
              
              {/* Pescoço */}
              <rect x="135" y="135" width="50" height="25" fill="#a67c52" rx="10"/>
              
              {/* Cabeça - cor parda */}
              <ellipse cx="160" cy="110" rx="45" ry="55" fill="#a67c52"/>
              
              {/* Orelhas */}
              <ellipse cx="120" cy="110" rx="12" ry="18" fill="#a67c52"/>
              <ellipse cx="200" cy="110" rx="12" ry="18" fill="#a67c52"/>
              <ellipse cx="122" cy="110" rx="7" ry="12" fill="#8b5e3c"/>
              <ellipse cx="198" cy="110" rx="7" ry="12" fill="#8b5e3c"/>
              
              {/* Boné azul profissional */}
              <ellipse cx="160" cy="75" rx="50" ry="15" fill="#1e40af"/>
              <path d="M 115 75 Q 115 45 160 42 Q 205 45 205 75 Z" fill="#2563eb"/>
              <ellipse cx="160" cy="42" rx="45" ry="12" fill="#3b82f6"/>
              <rect x="115" y="72" width="90" height="6" fill="#1e3a8a" rx="2"/>
              
              {/* Logo no boné (gota d'água) */}
              <path d="M 160 52 Q 155 58 155 62 Q 155 68 160 68 Q 165 68 165 62 Q 165 58 160 52 Z" fill="#06b6d4"/>
              
              {/* Aba do boné */}
              <ellipse cx="160" cy="85" rx="55" ry="10" fill="#1e40af" opacity="0.9"/>
              
              {/* Cabelo */}
              <path d="M 118 78 Q 115 75 115 70" stroke="#1e293b" strokeWidth="4" fill="none" strokeLinecap="round"/>
              <path d="M 202 78 Q 205 75 205 70" stroke="#1e293b" strokeWidth="4" fill="none" strokeLinecap="round"/>
              
              {/* Sobrancelhas */}
              <path d="M 135 95 Q 142 92 150 94" stroke="#1e293b" strokeWidth="4" fill="none" strokeLinecap="round"/>
              <path d="M 170 94 Q 178 92 185 95" stroke="#1e293b" strokeWidth="4" fill="none" strokeLinecap="round"/>
              
              {/* Olhos expressivos */}
              <ellipse cx="145" cy="105" rx="8" ry="11" fill="white"/>
              <ellipse cx="175" cy="105" rx="8" ry="11" fill="white"/>
              <circle cx="145" cy="107" r="6" fill="#3b2818"/>
              <circle cx="175" cy="107" r="6" fill="#3b2818"/>
              <circle cx="147" cy="105" r="3" fill="white" opacity="0.9"/>
              <circle cx="177" cy="105" r="3" fill="white" opacity="0.9"/>
              
              {/* Nariz */}
              <path d="M 160 105 L 156 120 Q 160 123 164 120 L 160 105" fill="#8b5e3c"/>
              <ellipse cx="155" cy="120" rx="3" ry="4" fill="#704a2f"/>
              <ellipse cx="165" cy="120" rx="3" ry="4" fill="#704a2f"/>
              
              {/* Boca sorridente grande */}
              <path d="M 140 130 Q 160 142 180 130" stroke="#1e293b" strokeWidth="3" fill="none" strokeLinecap="round"/>
              <path d="M 142 132 Q 160 140 178 132" fill="white" opacity="0.3"/>
              
              {/* Dentes do sorriso */}
              <rect x="152" y="134" width="4" height="5" fill="white" rx="1"/>
              <rect x="157" y="135" width="4" height="5" fill="white" rx="1"/>
              <rect x="162" y="135" width="4" height="5" fill="white" rx="1"/>
              
              {/* Sombras faciais para realismo */}
              <ellipse cx="160" cy="125" rx="35" ry="8" fill="#000000" opacity="0.08"/>
              <path d="M 130 110 Q 135 115 135 120" stroke="#000000" strokeWidth="2" opacity="0.1" fill="none"/>
              <path d="M 190 110 Q 185 115 185 120" stroke="#000000" strokeWidth="2" opacity="0.1" fill="none"/>
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