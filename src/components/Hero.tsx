import { ArrowRight, Terminal, Database, Cloud } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-4">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">DevOps</span>
              <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Data Engineer</span>
              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Software Engineer</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Eu sou <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Diego Boaz</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Engenheiro de Software com <strong>5+ anos de experiência</strong> conectando infraestrutura, código e dados. Especialista em <strong>DevOps e Engenharia de Dados</strong>, com vivência em ambientes logísticos de alto volume e setor público.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a 
                href="#projects" 
                className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-200 flex items-center gap-2"
              >
                Ver Aplicações <ArrowRight size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/diegoboaz/" 
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full font-medium hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex-1 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
              <div className="absolute inset-0 bg-blue-100 rounded-3xl rotate-6 -z-10"></div>
              <div className="absolute inset-0 bg-indigo-50 rounded-3xl -rotate-3 -z-10"></div>
              <div className="bg-white p-8 rounded-3xl shadow-xl h-full border border-gray-100 flex flex-col justify-center">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 bg-blue-50 rounded-2xl flex flex-col items-center justify-center text-blue-600 group hover:bg-blue-600 hover:text-white transition-colors cursor-default">
                    <Cloud size={40} className="mb-2" />
                    <span className="font-bold">DevOps</span>
                  </div>
                  <div className="p-6 bg-indigo-50 rounded-2xl flex flex-col items-center justify-center text-indigo-600 group hover:bg-indigo-600 hover:text-white transition-colors cursor-default">
                    <Database size={40} className="mb-2" />
                    <span className="font-bold">Dados</span>
                  </div>
                  <div className="p-6 bg-purple-50 rounded-2xl flex flex-col items-center justify-center text-purple-600 group hover:bg-purple-600 hover:text-white transition-colors cursor-default">
                    <Terminal size={40} className="mb-2" />
                    <span className="font-bold">Backend</span>
                  </div>
                  <div className="p-6 bg-emerald-50 rounded-2xl flex flex-col items-center justify-center text-emerald-600 group hover:bg-emerald-600 hover:text-white transition-colors cursor-default">
                    <div className="font-bold text-3xl">5+</div>
                    <span className="text-xs text-center">Anos Exp.</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
