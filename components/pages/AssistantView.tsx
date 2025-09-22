
import React, { useState, FormEvent } from 'react';
import { generateContent } from '../../services/geminiService';

interface Message {
    sender: 'user' | 'ai';
    text: string;
}

const AssistantView: React.FC = () => {
    const [prompt, setPrompt] = useState<string>('');
    const [messages, setMessages] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!prompt.trim() || isLoading) return;

        const userMessage: Message = { sender: 'user', text: prompt };
        setMessages(prev => [...prev, userMessage]);
        setPrompt('');
        setIsLoading(true);
        setError(null);

        try {
            const aiResponse = await generateContent(`Explain the MongoDB concept: "${prompt}". Keep the explanation concise and clear for a learner.`);
            const aiMessage: Message = { sender: 'ai', text: aiResponse };
            setMessages(prev => [...prev, aiMessage]);
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred.';
            setError(`Failed to get response from AI. ${errorMessage}`);
            const aiErrorMessage: Message = { sender: 'ai', text: `Sorry, I couldn't fetch an answer. Please check your setup and try again. Error: ${errorMessage}` };
            setMessages(prev => [...prev, aiErrorMessage]);
        } finally {
            setIsLoading(false);
        }
    };
    
    return (
        <div className="flex flex-col h-full max-w-4xl mx-auto animate-fade-in">
            <header className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white">AI Assistant</h2>
                <p className="text-slate-400 mt-1">Ask me anything about MongoDB!</p>
            </header>
            
            <div className="flex-1 bg-slate-800/50 border border-slate-700 rounded-xl p-4 flex flex-col overflow-y-auto">
                <div className="flex-1 space-y-4">
                    {messages.length === 0 && (
                        <div className="flex items-center justify-center h-full text-slate-500">
                            <p>Ask a question to start the conversation.</p>
                        </div>
                    )}
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-md lg:max-w-lg p-3 rounded-xl ${msg.sender === 'user' ? 'bg-brand-green text-slate-900' : 'bg-slate-700 text-slate-200'}`}>
                                <p className="whitespace-pre-wrap">{msg.text}</p>
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                         <div className="flex gap-3 justify-start">
                            <div className="max-w-md p-3 rounded-xl bg-slate-700 text-slate-200">
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse"></div>
                                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {error && <p className="text-red-400 text-center mt-2">{error}</p>}
            
            <form onSubmit={handleSubmit} className="mt-4">
                <div className="flex gap-2 bg-slate-800/50 border border-slate-700 rounded-xl p-2 focus-within:ring-2 focus-within:ring-brand-green">
                    <input
                        type="text"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="e.g., What is an aggregation pipeline?"
                        className="flex-1 bg-transparent p-2 text-slate-100 placeholder-slate-500 focus:outline-none"
                        disabled={isLoading}
                    />
                    <button type="submit" disabled={isLoading || !prompt.trim()} className="bg-brand-green text-slate-900 px-5 py-2 rounded-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-brand-green/80 transition-colors">
                        {isLoading ? 'Thinking...' : 'Ask'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AssistantView;
