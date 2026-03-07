import { motion } from "framer-motion";
import { Droplets, Wrench, Waves, AlertCircle, Settings, Package } from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Conserto de Vazamentos",
    description: "Detecção e reparo de vazamentos em tubulações, torneiras e registros."
  },
  {
    icon: Waves,
    title: "Desentupimento de Pias",
    description: "Desentupimento rápido de pias, ralos e esgotos com equipamento profissional."
  },
  {
    icon: Wrench,
    title: "Instalação de Torneiras",
    description: "Instalação e troca de torneiras, misturadores e metais sanitários."
  },
  {
    icon: AlertCircle,
    title: "Reparo de Descarga",
    description: "Conserto de descargas, válvulas e caixas acopladas com garantia."
  },
  {
    icon: Settings,
    title: "Manutenção Hidráulica",
    description: "Manutenção preventiva e corretiva em sistemas hidráulicos residenciais."
  },
  {
    icon: Package,
    title: "Instalação de Caixa d'Água",
    description: "Instalação, limpeza e manutenção de caixas d'água e reservatórios."
  }
];

const ServicosSection = () => (
  <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Serviços de <span className="text-cyan-600">Encanador</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Soluções completas em hidráulica para residências e comércios em São Paulo
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-cyan-200"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/30">
                <Icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ServicosSection;