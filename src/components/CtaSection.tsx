import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511914693294?text=Ol%C3%A1!%20Preciso%20de%20um%20encanador%20urgente%20em%20S%C3%A3o%20Paulo.%20Pode%20me%20passar%20um%20or%C3%A7amento?";

const CtaSection = () => (
  <section className="py-20 bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-700 relative overflow-hidden">
    <div className="absolute inset-0 opacity-20">
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-cyan-300/30 blur-3xl" />
      <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-blue-400/30 blur-3xl" />
    </div>
    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Precisa de um Encanador Agora?
        </h2>
        <p className="text-lg md:text-xl text-cyan-50 mb-10">
          Entre em contato pelo WhatsApp e receba um orçamento gratuito. Atendimento rápido em São Paulo e região!
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 py-5 rounded-lg bg-white text-cyan-600 font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-2xl hover:shadow-3xl hover:scale-105"
          onClick={() => {
            if (typeof window !== 'undefined' && (window as any).gtag) {
              (window as any).gtag('event', 'click_whatsapp', {
                event_category: 'lead',
                event_label: 'botao_whatsapp_cta'
              });
            }
          }}
        >
          <MessageCircle className="w-6 h-6" />
          Solicitar Orçamento Gratuito
        </a>
      </motion.div>
    </div>
  </section>
);

export default CtaSection;
