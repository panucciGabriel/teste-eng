import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Building2, FileCheck2, Ruler, Zap, FileWarning, HelpCircle, ChevronRight } from 'lucide-react';

const services = [
  {
    icon: <Ruler className="w-12 h-12 text-blue-600" />,
    title: "Georreferenciamento",
    description: "Mapeamento preciso e documentação de propriedades rurais e urbanas."
  },
  {
    icon: <Building2 className="w-12 h-12 text-blue-600" />,
    title: "Engenharia",
    description: "Projetos arquitetônicos personalizados para residências e comércio."
  },
  {
    icon: <FileCheck2 className="w-12 h-12 text-blue-600" />,
    title: "Regularização de Imóveis",
    description: "Assessoria completa para regularização de propriedades."
  },
  {
    icon: <Zap className="w-12 h-12 text-blue-600" />,
    title: "Projetos Elétricos",
    description: "Projetos elétricos seguros e eficientes para seu imóvel."
  },
  {
    icon: <FileWarning className="w-12 h-12 text-blue-600" />,
    title: "CLCB e AVCB",
    description: "Certificação e adequação às normas de segurança contra incêndio."
  },
  {
    icon: <HelpCircle className="w-12 h-12 text-blue-600" />,
    title: "Assessoria e Consultoria",
    description: "Orientação especializada para seus projetos e documentações."
  }
];

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Soluções em Engenharia e Georreferenciamento
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Expertise técnica e compromisso com a qualidade para seus projetos de engenharia e documentação imobiliária.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Fale Conosco
                </a>
                <Link
                  to="/servicos"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Nossos Serviços
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?auto=format&fit=crop&w=800&q=80"
                alt="Engenharia e Topografia"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <Link to={`/servicos#${service.title.toLowerCase()}`} className="mt-4 text-blue-600 inline-flex items-center">
                  Saiba mais <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Pronto para começar seu projeto?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Entre em contato conosco hoje mesmo e descubra como podemos ajudar.
          </p>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors text-lg font-semibold"
          >
            <Phone className="w-6 h-6 mr-2" />
            Fale com um Especialista
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;