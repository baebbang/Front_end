import { useState } from 'react';
import { MENU_DATA } from '../../shared';
import './Sidebar.css';

interface SidebarProps {
  activeMenu1?: string;
  activeMenu2?: string;
  activeMenu3?: string;
  onMenuSelect?: (menu1Id: string, menu2Id?: string, menu3Id?: string) => void;
}

export const Sidebar = ({ activeMenu1, activeMenu2, activeMenu3, onMenuSelect }: SidebarProps) => {
  const [expandedMenu2, setExpandedMenu2] = useState<string>(activeMenu2 || '');

  const currentMenu1 = MENU_DATA.find((m) => m.id === activeMenu1);
  const menu2Items = currentMenu1?.children || [];

  const handleMenu2Click = (menu2Id: string) => {
    setExpandedMenu2(menu2Id);
    onMenuSelect?.(activeMenu1 || '', menu2Id);
  };

  const handleMenu3Click = (menu3Id: string) => {
    onMenuSelect?.(activeMenu1 || '', activeMenu2 || '', menu3Id);
  };

  if (!currentMenu1) {
    return null;
  }

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <h3 className="sidebar-title">{currentMenu1.label}</h3>

        {/* 2depth 메뉴 */}
        <ul className="menu-level-2">
          {menu2Items.map((menu2) => (
            <li key={menu2.id}>
              <button
                className={`menu-item-2 ${expandedMenu2 === menu2.id ? 'active' : ''}`}
                onClick={() => handleMenu2Click(menu2.id)}
              >
                {menu2.label}
                {menu2.children && menu2.children.length > 0 && (
                  <span className={`toggle-icon ${expandedMenu2 === menu2.id ? 'open' : ''}`}>
                    ▼
                  </span>
                )}
              </button>

              {/* 3depth 메뉴 */}
              {expandedMenu2 === menu2.id && menu2.children && menu2.children.length > 0 && (
                <ul className="menu-level-3">
                  {menu2.children.map((menu3) => (
                    <li key={menu3.id}>
                      <button
                        className={`menu-item-3 ${activeMenu3 === menu3.id ? 'active' : ''}`}
                        onClick={() => handleMenu3Click(menu3.id)}
                      >
                        {menu3.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

