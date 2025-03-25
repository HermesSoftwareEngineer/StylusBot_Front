import React, { useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

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
        <div className="flex flex-col items-center p-4">
            <h1 className="text-2xl font-bold mb-4">Chat</h1>
            <div className="w-[70%] p-4 mb-4">
                {messages.map((message, index) => (
                    <div key={index} className={`mb-2 ${message.role === 'user' ? 'text-right' : 'text-left'}`}>
                        <span className={`inline-block px-3 py-2 rounded-lg ${message.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}> 
                            {message.role === 'ai' ? (
                                <ReactMarkdown>{message.text}</ReactMarkdown>
                            ) : (
                                message.text
                            )}
                        </span>
                    </div>
                ))}
            </div>
            <div className="w-[70%] flex bottom-4">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    className="flex-grow border border-gray-300 rounded-l-lg p-2"
                    placeholder="Digite sua mensagem..."
                />
                <button onClick={handleSend} className="bg-blue-500 text-white px-4 py-2 rounded-r-lg">
                    Enviar
                </button>
            </div>
        </div>
    );
}

export default Chat;