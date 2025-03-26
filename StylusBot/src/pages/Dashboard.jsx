import React from 'react';
import Sidebar from '../components/utils/Sidebar';

const Dashboard = () => {
    return (
        <div className="flex h-screen bg-[#F5F5F5]">
            {/* Sidebar fixa */}
            <Sidebar className="h-full sticky top-0" />

            {/* Conteúdo principal */}
            <div className="flex flex-col flex-grow p-6 overflow-y-auto">
                {/* Título */}
                <h1 className="text-3xl font-bold text-[#D32F2F] mb-6">Dashboard</h1>

                {/* Cards de estatísticas principais */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white shadow-md p-4 rounded-lg">📊 Total de Mensagens</div>
                    <div className="bg-white shadow-md p-4 rounded-lg">👥 Usuários Atendidos</div>
                    <div className="bg-white shadow-md p-4 rounded-lg">⏳ Tempo Médio de Resposta</div>
                </div>

                {/* Gráficos */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-white shadow-md p-4 rounded-lg h-[300px]">📈 Volume de Mensagens</div>
                    <div className="bg-white shadow-md p-4 rounded-lg h-[300px]">🏡 Tipos de Imóveis Procurados</div>
                </div>

                {/* Tabela de imóveis mais mencionados */}
                <div className="bg-white shadow-md p-4 rounded-lg mt-6">
                    <h2 className="text-xl font-semibold">🔎 Imóveis Mais Buscados</h2>
                    <div className="h-[200px] overflow-auto">[ Tabela com imóveis ]</div>
                </div>

                {/* Feedbacks */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-white shadow-md p-4 rounded-lg h-[200px]">⭐ Avaliação do Chatbot</div>
                    <div className="bg-white shadow-md p-4 rounded-lg h-[200px]">📊 Interações antes da Conversão</div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
