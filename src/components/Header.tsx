import React from 'react';
import { useTheme } from '../hooks/useTheme';
import { User, Zap, Folder, Briefcase, Mail, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

const getIcon = (id: string) => {
  switch (id) {
    case 'about':
      return <User size={20} />;
    case 'skills':
      return <Zap size={20} />;
    case 'projects':
      return <Folder size={20} />;
    case 'experience':
      return <Briefcase size={20} />;
    case 'contact':
      return <Mail size={20} />;
    default:
      return null;
  }
};

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const { theme, toggleTheme } = useTheme();
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <>
      <header className="site-header">
        <div className="container header-container">
          <a
            href="#"
            className="logo"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            JKC.Portfolio
          </a>
          <div className="header-right">
            <nav className="nav-menu">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <button
              type="button"
              className="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label="테마 전환"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fixed Bottom Navigation Bar */}
      <nav className="mobile-bottom-nav">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`bottom-nav-item ${activeSection === item.id ? 'active' : ''}`}
          >
            <span className="bottom-nav-icon">{getIcon(item.id)}</span>
            <span className="bottom-nav-label">{item.label}</span>
          </a>
        ))}
      </nav>
    </>
  );
};

export default Header;
