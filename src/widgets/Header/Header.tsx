import { useState } from 'react';
import { MENU_DATA } from '../../shared';
import './Header.css';

interface HeaderProps {
  activeMenu1?: string;
  onMenuSelect?: (menuId: string) => void;
}

export const Header = ({ activeMenu1, onMenuSelect }: HeaderProps) => {
  const [selected, setSelected] = useState<string>(activeMenu1 || '');

  const handleMenuClick = (menuId: string) => {
    setSelected(menuId);
    onMenuSelect?.(menuId);
  };

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-logo">SPP</h1>
        <nav className="header-nav">
          <ul className="nav-list">
            {MENU_DATA.map((menu) => (
              <li key={menu.id}>
                <button
                  className={`nav-item ${selected === menu.id ? 'active' : ''}`}
                  onClick={() => handleMenuClick(menu.id)}
                >
                  {menu.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

