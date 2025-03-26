import { useState } from "react";
import Sidebar from '../components/utils/Sidebar';

export default function Notificacoes() {
  const [search, setSearch] = useState("");

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Notificações e Alertas</h1>
          <input
            type="text"
            placeholder="Buscar notificação..."
            className="px-4 py-2 border border-gray-300 rounded-lg"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Área para os componentes de notificações */}
        <div className="bg-white p-4 rounded-lg shadow-md min-h-[400px]">
          <p className="text-gray-600">Componentes de notificações virão aqui.</p>
        </div>
      </div>
    </div>
  );
}
