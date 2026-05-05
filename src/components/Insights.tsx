import { Lightbulb, Database, Cloud, LineChart } from 'lucide-react';
import { motion } from 'framer-motion';

const insights = [
  {
    icon: <Cloud size={24} />,
    title: "DevOps como Fundamento",
    description: "Em 5 anos, vi que o DevOps não é apenas ferramenta, é cultura. Docker e automação eliminam atritos entre o código e o ambiente de produção."
  },
  {
    icon: <Database size={24} />,
    title: "Engenharia de Dados",
    description: "Construir pipelines de ETL eficientes e modelar dados corretamente transforma informação bruta em vantagem competitiva real."
  },
  {
    icon: <LineChart size={24} />,
    title: "BI de Alto Nível",
    description: "O uso avançado de DAX e Power Query permite extrair insights complexos de grandes volumes de dados, como os que gerenciei no setor logístico."
  },
  {
    icon: <Lightbulb size={24} />,
    title: "Sistemas do Zero (ERP)",
    description: "Desenvolver ERPs do zero me deu a visão 360º de como as regras de negócio se conectam com a infraestrutura e a persistência de dados."
  }
];

const Insights = () => {
  return (
    <section id="insights" className="py-20 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]"></div>

        <div className="text-center mb-16 relative z-10">
          <h2 className="text-3xl font-bold mb-4">Insights de Carreira</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Reflexões sobre 5 anos de atuação conectando tecnologia e resultados de negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {insights.map((insight, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-all duration-500 group"
            >
              <div className="text-blue-400 mb-6 bg-blue-500/10 w-fit p-4 rounded-2xl group-hover:scale-110 transition-transform">
                {insight.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{insight.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {insight.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 p-8 rounded-3xl bg-gradient-to-r from-blue-600/10 to-transparent border border-blue-500/20 max-w-4xl mx-auto text-center">
          <p className="text-blue-200 italic">
            "Acredito que o futuro do desenvolvimento está na convergência entre a eficiência do DevOps e a inteligência dos Dados."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Insights;
