import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-gradient-to-br from-blue-600 to-indigo-800 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <ExternalLink size={200} />
          </div>
          
          <div className="relative z-10 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Pronto para o próximo desafio?</h2>
            <p className="text-blue-100 mb-10 max-w-2xl text-lg">
              Estou aberto a oportunidades como <strong>DevOps Jr, Data Engineer Jr, Analista de Dados ou BI Developer</strong>. Vamos conversar sobre como posso agregar valor ao seu time.
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a 
                href="mailto:diegoboaz@gmail.com" 
                className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-blue-50 transition-all transform hover:-translate-y-1 flex items-center gap-2 shadow-lg shadow-blue-900/20"
              >
                <Mail size={20} /> diegoboaz@gmail.com
              </a>
              <a 
                href="https://www.linkedin.com/in/diegoboaz/" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-blue-600 transition-all transform hover:-translate-y-1 flex items-center gap-2"
              >
                <Linkedin size={20} /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Diego Boaz
            </span>
            <p className="text-gray-500 text-sm mt-1">
              © {new Date().getFullYear()} Todos os direitos reservados.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/diegoboaz" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 text-gray-600 hover:bg-blue-600 hover:text-white transition-all"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/diegoboaz/" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 text-gray-600 hover:bg-blue-600 hover:text-white transition-all"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
