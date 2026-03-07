import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511914693294?text=Olá!%20Preciso%20de%20um%20encanador%20urgente%20em%20São%20Paulo!";

const CtaSection = () => {
  const handleClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click_whatsapp', {
        event_category: 'lead',
        event_label: 'botao_whatsapp_cta'
      });
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-cyan-600 to-blue-700 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-white/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-white/15 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Precisa de um Encanador Agora?
          </h2>
          <p className="text-lg md:text-xl text-blue-50/90 mb-10 max-w-2xl mx-auto">
            Atendemos emergências hidráulicas 24 horas em São Paulo e região. Solicite seu orçamento gratuito pelo WhatsApp!
          </p>
          
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-lg bg-white text-cyan-700 font-bold text-lg hover:bg-blue-50 transition-all duration-200 shadow-2xl"
          >
            <MessageCircle className="w-6 h-6" />
            Chamar no WhatsApp Agora
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;