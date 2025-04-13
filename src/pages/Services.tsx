import React, { useState } from 'react';
import { Building2, FileCheck2, Ruler, Zap, FileWarning, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const services = [
  {
    icon: <Ruler className="w-12 h-12 text-blue-600" />,
    title: "Georreferenciamento",
    description: "Mapeamento preciso e documentação de propriedades rurais e urbanas.",
    details: [
      "Levantamento topográfico detalhado",
      "Georreferenciamento de imóveis rurais",
      "Certificação junto ao INCRA",
      "Demarcação de áreas",
      "Plantas topográficas precisas"
    ]
  },
  {
    icon: <Building2 className="w-12 h-12 text-blue-600" />,
    title: "Engenharia",
    description: "Projetos arquitetônicos personalizados para residências e comércio.",
    details: [
      "Projetos residenciais e comerciais",
      "Acompanhamento de obras",
      "Laudos técnicos",
      "Reformas e adequações",
      "Projetos estruturais"
    ]
  },
  {
    icon: <FileCheck2 className="w-12 h-12 text-blue-600" />,
    title: "Regularização de Imóveis",
    description: "Assessoria completa para regularização de propriedades.",
    details: [
      "Regularização de construções",
      "Aprovação de projetos",
      "Documentação para cartório",
      "Assessoria jurídica",
      "Regularização fundiária"
    ]
  },
  {
    icon: <Zap className="w-12 h-12 text-blue-600" />,
    title: "Projetos Elétricos",
    description: "Projetos elétricos seguros e eficientes para seu imóvel.",
    details: [
      "Projetos de instalações elétricas",
      "Dimensionamento de circuitos",
      "Adequação às normas técnicas",
      "Projetos de SPDA",
      "Laudos técnicos elétricos"
    ]
  },
  {
    icon: <FileWarning className="w-12 h-12 text-blue-600" />,
    title: "CLCB e AVCB",
    description: "Certificação e adequação às normas de segurança contra incêndio.",
    details: [
      "Projeto técnico de prevenção",
      "Adequação às normas do Corpo de Bombeiros",
      "Obtenção do AVCB",
      "Renovação de AVCB",
      "Treinamento de brigada"
    ]
  },
  {
    icon: <HelpCircle className="w-12 h-12 text-blue-600" />,
    title: "Assessoria e Consultoria",
    description: "Orientação especializada para seus projetos e documentações.",
    details: [
      "Consultoria técnica especializada",
      "Análise de viabilidade",
      "Orientação para documentação",
      "Acompanhamento de processos",
      "Suporte técnico contínuo"
    ]
  }
];

const Services: React.FC = () => {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const toggleService = (title: string) => {
    setExpandedService(expandedService === title ? null : title);
  };

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
            Nossos Serviços
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços em engenharia e georreferenciamento,
            com soluções personalizadas para cada necessidade.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-6">
            {services.map((service) => (
              <div
                key={service.title}
                id={service.title.toLowerCase()}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleService(service.title)}
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center">
                    {service.icon}
                    <div className="ml-6 text-left">
                      <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                      <p className="text-gray-600 mt-1">{service.description}</p>
                    </div>
                  </div>
                  {expandedService === service.title ? (
                    <ChevronUp className="w-6 h-6 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  )}
                </button>
                {expandedService === service.title && (
                  <div className="px-6 pb-6">
                    <hr className="my-4" />
                    <ul className="space-y-3">
                      {service.details.map((detail, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-600 font-bold mr-2">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;