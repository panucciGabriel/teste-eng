import React from 'react';
import { Target, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
            Sobre o Grupo Engeo & Topocap
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Há mais de uma década, oferecemos soluções completas em engenharia e georreferenciamento,
            com compromisso com a qualidade e satisfação dos nossos clientes.
          </p>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Target className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Nossa Missão</h3>
              <p className="text-gray-600">
                Fornecer soluções técnicas de alta qualidade em engenharia e georreferenciamento,
                contribuindo para o desenvolvimento sustentável e ordenado do setor imobiliário.
              </p>
            </div>
            <div className="text-center">
              <Users className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Nossa Equipe</h3>
              <p className="text-gray-600">
                Contamos com profissionais altamente qualificados e experientes,
                comprometidos com a excelência e a satisfação dos nossos clientes.
              </p>
            </div>
            <div className="text-center">
              <Award className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Nossos Valores</h3>
              <p className="text-gray-600">
                Ética, transparência, qualidade e compromisso são os pilares
                que norteiam todas as nossas ações e relacionamentos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80"
                alt="Nossa Experiência"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Nossa Experiência
              </h2>
              <p className="text-gray-600 mb-6">
                Com mais de 10 anos de atuação no mercado, o Grupo Engeo & Topocap
                tem se destacado pela excelência em seus serviços e pelo compromisso
                com a satisfação dos clientes.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Mais de 1000 projetos realizados com sucesso</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Equipe especializada e constantemente atualizada</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Tecnologia de ponta em todos os processos</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;