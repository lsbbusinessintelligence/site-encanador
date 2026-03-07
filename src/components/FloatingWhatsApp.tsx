import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const WHATSAPP_URL = "https://wa.me/5511914693294?text=Olá!%20Vi%20seu%20site%20e%20preciso%20de%20um%20encanador%20em%20São%20Paulo.";

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click_whatsapp', {
        event_category: 'lead',
        event_label: 'botao_flutuante'
      });
    }
  };

  if (!isVisible) return null;

  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-4 rounded-full shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300"
    >
      <MessageCircle className="w-6 h-6 animate-pulse" />
      <span className="font-semibold hidden sm:inline">
        Chamar no WhatsApp
      </span>
    </motion.a>
  );
};

export default FloatingWhatsApp;