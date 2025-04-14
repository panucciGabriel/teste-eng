import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MapPin, Instagram, Facebook, X, Menu } from 'lucide-react';
import { useState as reactUseState } from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm fixed w-full z-10">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-900">ENGEO & TOPOCAP</Link>
          <button
            className="md:hidden text-gray-600 hover:text-blue-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>          
          <div className="hidden md:flex space-x-6">
            <Link to="/" className={isActive('/')}>Início</Link>
            <Link to="/sobre" className={isActive('/sobre')}>Sobre</Link>
            <Link to="/servicos" className={isActive('/servicos')}>Serviços</Link>
            <Link to="/contato" className={isActive('/contato')}>Contato</Link>
          </div>
        </nav>
       {/* Menu hambúrguer para telas pequenas */}
       {menuOpen && (
          <div className="md:hidden flex flex-col items-start bg-white shadow-md p-4 space-y-2">
            <Link
              to="/"
              className={`block w-full py-2 px-4 text-left ${isActive('/')}`}
              onClick={() => setMenuOpen(false)} // Fecha o menu ao clicar
            >
              Início
            </Link>
            <Link
              to="/sobre"
              className={`block w-full py-2 px-4 text-left ${isActive('/sobre')}`}
              onClick={() => setMenuOpen(false)} // Fecha o menu ao clicar
            >
              Sobre
            </Link>
            <Link
              to="/servicos"
              className={`block w-full py-2 px-4 text-left ${isActive('/servicos')}`}
              onClick={() => setMenuOpen(false)} // Fecha o menu ao clicar
            >
              Serviços
            </Link>
            <Link
              to="/contato"
              className={`block w-full py-2 px-4 text-left ${isActive('/contato')}`}
              onClick={() => setMenuOpen(false)} // Fecha o menu ao clicar
            >
              Contato
            </Link>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Engeo & Topocap</h3>
              <p className="text-gray-400">
                Soluções em engenharia e georreferenciamento para suas necessidades.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contato</h3>
              <div className="space-y-2">
                <a href="https://wa.me/5511999999999" className="flex items-center text-gray-400 hover:text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  (11) 99999-9999
                </a>
                <div className="flex items-center text-gray-400">
                  <MapPin className="w-5 h-5 mr-2" />
                  R. Almirante Barroso, 425 - Centro, Presidente Venceslau - SP, 19406-014
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/grupoengeo.topocap/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://facebook.com/engeotopocap" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; 2025 Grupo Engeo & Topocap. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Fixed WhatsApp Button */}
      <a
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
};

function useState<T>(initialValue: T): [T, React.Dispatch<React.SetStateAction<T>>] {
  return reactUseState(initialValue);
}

export default Layout;

