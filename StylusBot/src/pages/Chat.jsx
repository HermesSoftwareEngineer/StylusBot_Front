import React, { useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import Sidebar from '../components/utils/Sidebar';

function Chat() {

    const url = import.meta.env.VITE_API_URL;
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSend = async () => {
        // Caso o conteúdo do input esteja vazio, não envia a mensagem
        if (input.trim() === '') return;

        setInput("")
        try {
            // Adiciona a mensagem do usuário na lista de mensagens
            const userMessage = { role: 'user', text: input, thread_id: 2 };
            setMessages([...messages, userMessage]);  
            
            // Envia a mensagem para o backend
            const response = await axios.post(`${url}/chat/index`, 
                { user_input: input, thread_id: 1 }
            );

            // Simula a resposta da IA
            setTimeout(() => {
                const aiMessage = { role: 'ai', text: `${response.data.resposta}` };
                setMessages(prevMessages => [...prevMessages, aiMessage]);
            }, 1000);

        } catch (error) {
            console.error("Erro ao enviar uma mensagem e receber uma resposta: ", error)
        }

        setInput('');
    };

    return (
        <div className="flex flex-row h-screen bg-[#F5F5F5]">
            {/* Sidebar fixa */}
            <Sidebar className="h-full sticky top-0 bg-[#212121] text-white" />
    
            {/* Container do chat com rolagem independente */}
            <div className="flex flex-col items-center p-4 w-[80%] overflow-y-auto h-full">
                <h1 className="text-2xl font-bold mb-4 text-[#D32F2F]">Chat</h1>
    
                {/* Área de mensagens */}
                <div className="w-[70%] p-4 mb-4 h-[70vh] overflow-y-auto border border-[#BDBDBD] rounded-lg bg-white shadow-lg">
                    {messages.map((message, index) => (
                        <div key={index} className={`mb-2 ${message.role === 'user' ? 'text-right' : 'text-left'}`}>
                            <span className={`inline-block px-3 py-2 rounded-lg shadow-md 
                                ${message.role === 'user' ? 'bg-[#D32F2F] text-white' : 'bg-[#E0E0E0] text-[#212121]'}`}>
                                {message.role === 'ai' ? (
                                    <ReactMarkdown>{message.text}</ReactMarkdown>
                                ) : (
                                    message.text
                                )}
                            </span>
                        </div>
                    ))}
                </div>
    
                {/* Input e botão de envio */}
                <div className="w-[70%] flex">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                        className="flex-grow border border-[#BDBDBD] rounded-l-lg p-2 text-black"
                        placeholder="Digite sua mensagem..."
                    />
                    <button onClick={handleSend} 
                        className="bg-[#E53935] text-white px-4 py-2 rounded-r-lg hover:bg-[#C62828] transition">
                        Enviar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Chat;