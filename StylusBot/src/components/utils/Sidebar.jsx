import { useState } from "react";
import { Home, MessageSquare, Settings, Building, Users, Bell, Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  return (
    <div className={`h-screen bg-[#C62828] text-white flex flex-col transition-all ${isCollapsed ? "w-16" : "w-64"} p-4`}>
      {/* Botão de Expandir/Reduzir */}
      <button onClick={toggleSidebar} className="mb-6 flex items-center space-x-2">
        <Menu className="w-6 h-6 hover:bg-[#E53935] cursor-pointer" />
        {!isCollapsed && <span className="font-semibold">Menu</span>}
      </button>

      {/* Links do Menu */}
      <nav className="flex flex-col space-y-4">
        <NavItem to="/painel" icon={<Home />} text="Dashboard" isCollapsed={isCollapsed} />
        <NavItem to="/painel/chat" icon={<MessageSquare />} text="Teste do Chat" isCollapsed={isCollapsed} />
        <NavItem to="/painel/imoveis" icon={<Building />} text="Imóveis" isCollapsed={isCollapsed} />
        <NavItem to="/painel/leads" icon={<Users />} text="Leads" isCollapsed={isCollapsed} />
        <NavItem to="/painel/notificacoes" icon={<Bell />} text="Notificações" isCollapsed={isCollapsed} />
        <NavItem to="/painel/configuracoes" icon={<Settings />} text="Configurações" isCollapsed={isCollapsed} />
      </nav>
    </div>
  );
};

const NavItem = ({ to, icon, text, isCollapsed }) => {
  return (
    <Link to={to} className={`flex items-center space-x-3 ${!isCollapsed ? "p-3" : "py-3 px-1"} rounded-md hover:bg-[#E53935] transition`}>
      {!isCollapsed ? icon : <span>{icon}</span>}
      {!isCollapsed && <span className="font-medium">{text}</span>}
    </Link>
  );
};

export default Sidebar;
