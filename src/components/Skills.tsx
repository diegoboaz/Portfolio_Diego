import { motion } from 'framer-motion';
import { Cloud, Database, Code, ShieldCheck } from 'lucide-react';

const skillCategories = [
  {
    title: 'DevOps & Infra',
    icon: <Cloud className="text-blue-600" size={24} />,
    skills: [
      { name: 'Docker & Docker Compose', level: 95 },
      { name: 'Linux / Bash Scripting', level: 90 },
      { name: 'Git & GitHub', level: 90 },
      { name: 'Windows Server / AD', level: 85 },
      { name: 'Monitoramento', level: 80 },
    ]
  },
  {
    title: 'Dados & BI',
    icon: <Database className="text-indigo-600" size={24} />,
    skills: [
      { name: 'Power BI (DAX, Power Query)', level: 90 },
      { name: 'SQL (MySQL, Server, MariaDB)', level: 95 },
      { name: 'Python (ETL / Automação)', level: 85 },
      { name: 'Pipelines de Dados', level: 80 },
    ]
  },
  {
    title: 'Desenvolvimento',
    icon: <Code className="text-purple-600" size={24} />,
    skills: [
      { name: 'PHP / Laravel', level: 90 },
      { name: 'Node.js', level: 75 },
      { name: 'Python', level: 85 },
      { name: 'ASP.NET', level: 70 },
    ]
  },
  {
    title: 'Em Evolução',
    icon: <ShieldCheck className="text-emerald-600" size={24} />,
    skills: [
      { name: 'AZ-900 / PL-300', level: 60 },
      { name: 'CI/CD Pipelines', level: 75 },
      { name: 'Kubernetes', level: 50 },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Minhas Especialidades</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Uma visão técnica das ferramentas que utilizo para construir soluções robustas integrando código, infraestrutura e inteligência de dados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gray-50 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-xs text-blue-600 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                      <motion.div 
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 h-full rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
