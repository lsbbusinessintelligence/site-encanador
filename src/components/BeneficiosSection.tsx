import { motion } from "framer-motion";
import { Clock, Award, DollarSign, MapPin } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Atendimento Rápido",
    description: "Atendemos sua emergência hidráulica com agilidade em toda São Paulo."
  },
  {
    icon: Award,
    title: "Profissional Experiente",
    description: "Mais de 10 anos de experiência em serviços hidráulicos residenciais e comerciais."
  },
  {
    icon: DollarSign,
    title: "Orçamento Gratuito",
    description: "Avaliamos seu problema e fornecemos orçamento sem compromisso."
  },
  {
    icon: MapPin,
    title: "Atendimento em SP",
    description: "Atendemos toda São Paulo e região metropolitana com rapidez."
  }
];

const BeneficiosSection = () => (
  <section className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Por que escolher nossos <span className="text-cyan-600">serviços</span>?
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Qualidade, confiança e rapidez no atendimento
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-cyan-500/30">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default BeneficiosSection;