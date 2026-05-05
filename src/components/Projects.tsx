import { useEffect, useState } from 'react';
import { fetchGitHubRepos, Repository } from '../services/github';
import { ExternalLink, Star, GitFork, Folder } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const username = 'diegoboaz';
    fetchGitHubRepos(username).then(data => {
      setRepos(data);
      setLoading(false);
    });
  }, []);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Projetos Recentes</h2>
            <p className="text-gray-600">Sincronizado automaticamente com meu GitHub.</p>
          </div>
          <a 
            href="https://github.com/boazdiego" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 font-medium hover:underline flex items-center gap-1"
          >
            Ver todos no GitHub <ExternalLink size={16} />
          </a>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repos.map((repo, index) => (
              <motion.div 
                key={repo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className="p-6 flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <Folder className="text-blue-600" size={20} />
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors truncate">
                      {repo.name}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6 line-clamp-2 h-12 text-sm">
                    {repo.description || 'Sem descrição disponível para este repositório.'}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    {repo.language && (
                      <span className="flex items-center gap-1">
                        <span className="w-3 h-3 rounded-full bg-blue-400"></span>
                        {repo.language}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Star size={14} /> {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork size={14} /> {repo.forks_count}
                    </span>
                  </div>
                </div>
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
                  <a 
                    href={repo.html_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-gray-700 hover:text-blue-600 flex items-center gap-1"
                  >
                    Código Fonte <ExternalLink size={14} />
                  </a>
                  {repo.homepage && (
                    <a 
                      href={repo.homepage} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-blue-600 hover:text-blue-700"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
