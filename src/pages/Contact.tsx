import React from 'react';
import { Phone, MapPin, Instagram, Facebook } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
            Entre em Contato
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Estamos prontos para atender você e esclarecer todas as suas dúvidas.
            Entre em contato através de um dos nossos canais de atendimento.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* WhatsApp */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <Phone className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">WhatsApp</h3>
              <p className="text-gray-600 mb-4">
                Atendimento rápido e personalizado
              </p>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                (11) 99999-9999
              </a>
            </div>

            {/* Instagram */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <Instagram className="w-12 h-12 text-pink-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Instagram</h3>
              <p className="text-gray-600 mb-4">
                Siga-nos para novidades e atualizações
              </p>
              <a
                href="https://instagram.com/engeo.topocap"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition-colors"
              >
                <Instagram className="w-5 h-5 mr-2" />
                @engeo.topocap
              </a>
            </div>

            {/* Facebook */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <Facebook className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Facebook</h3>
              <p className="text-gray-600 mb-4">
                Acompanhe nosso trabalho
              </p>
              <a
                href="https://facebook.com/engeotopocap"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Facebook className="w-5 h-5 mr-2" />
                /engeotopocap
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Localização</h2>
            <p className="text-xl text-gray-600">
              São Paulo, SP
            </p>
          </div>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467692.0488551113!2d-46.875494486885!3d-23.681531454334287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-BR!2sbr!4v1650000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-md"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;