import { MapPin, Phone, Clock } from "lucide-react";

const Footer = () => (
  <footer className="bg-gradient-to-br from-blue-950 to-cyan-950 text-white py-16 border-t border-cyan-800/30">
    <div className="container">
      <div className="grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-xl font-bold mb-4 text-cyan-300">Encanador SP</h3>
          <p className="text-blue-200/80 leading-relaxed">
            Serviços de encanador em São Paulo com atendimento rápido e profissional. Soluções hidráulicas para residências e empresas.
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4 text-cyan-300 flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Horário de Atendimento
          </h4>
          <div className="space-y-2 text-blue-200/80">
            <p>Segunda a Sexta: 7h às 20h</p>
            <p>Sábados: 8h às 18h</p>
            <p>Emergências: 24 horas</p>
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4 text-cyan-300 flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            Contato
          </h4>
          <div className="space-y-2 text-blue-200/80">
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              (11) 91469-3294
            </p>
            <p>Atendimento em São Paulo e região</p>
          </div>
        </div>
      </div>
      
      <div className="border-t border-cyan-800/30 mt-12 pt-8 text-center text-blue-300/60 text-sm">
        <p>© {new Date().getFullYear()} Encanador SP - Todos os direitos reservados</p>
        <p className="mt-2 text-xs">Site desenvolvido por <a href="https://lsbintelligence.com.br" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">LSB Business Intelligence</a></p>
      </div>
    </div>
  </footer>
);

export default Footer;