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

        {/* Avatar do Encanador */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col items-center gap-6 mt-12 lg:mt-0"
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
          
          {/* Avatar do Encanador com ilustração */}
          <div className="bg-gradient-to-br from-cyan-50 to-blue-100 rounded-3xl shadow-2xl p-8 max-w-md">
            <div className="relative overflow-hidden rounded-2xl bg-white">
              <img 
                src="/images/avatar-encanador.png" 
                alt="Encanador LSB" 
                className="w-full h-auto"
              />
            </div>
            
            {/* Depoimento */}
            <div className="mt-6 text-center">
              <div className="flex justify-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-800 font-semibold text-base mb-2">
                "Encanador profissional e confiável!"
              </p>
              <p className="text-gray-600 text-sm">
                Cliente via LSB Intelligence
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;