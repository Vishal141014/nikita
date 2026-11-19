'use client';
import { useState, useRef, useEffect, useCallback } from 'react';
import { X, MessageCircle, Send, RefreshCw, ChevronRight, Bot } from 'lucide-react';
import { faqData, findResponse, suggestedQuestions, type ChatMessage } from '@/data/chatbot-faq';

function formatBotText(text: string) {
  const lines = text.split('\n');
  return lines.map((line, i) => {
    // Bold text
    const parts = line.split(/\*\*(.*?)\*\*/g);
    const formatted = parts.map((part, j) => 
      j % 2 === 1 ? <strong key={j} className="font-semibold text-[#1a3c34]">{part}</strong> : part
    );
    return <span key={i}>{formatted}{i < lines.length - 1 && <br />}</span>;
  });
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Initial greeting
      const greeting = faqData.find((f) => f.id === 'greeting')!;
      setMessages([{
        id: 'initial',
        role: 'bot',
        text: greeting.answer,
        timestamp: new Date(),
      }]);
    }
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen, messages.length]);

  const sendMessage = useCallback((text: string) => {
    if (!text.trim()) return;
    
    setShowSuggestions(false);
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: text.trim(),
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate bot thinking delay
    setTimeout(() => {
      const response = findResponse(text);
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'bot',
        text: response.answer,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 800 + Math.random() * 600);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleClear = () => {
    setMessages([]);
    setShowSuggestions(true);
  };

  const getSuggestionsForLastBot = () => {
    if (messages.length === 0) return suggestedQuestions.slice(0, 4);
    const lastBot = [...messages].reverse().find((m) => m.role === 'bot');
    if (!lastBot) return suggestedQuestions.slice(0, 4);
    
    // Find matching FAQ entry for followups
    const response = findResponse(lastBot.text.substring(0, 50));
    return response.followups || suggestedQuestions.slice(0, 4);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#1a3c34] text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-[#2d6b5e] transition-all duration-300 ${
          isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
        }`}
        aria-label="Open chat"
      >
        <MessageCircle size={22} />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#c8a96e] rounded-full flex items-center justify-center">
          <span className="text-[8px] text-[#0d1f1a] font-bold">AI</span>
        </span>
      </button>

      {/* Chat window */}
      <div
        className={`fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-24px)] bg-white rounded-2xl shadow-2xl border border-[#e5e0d8] flex flex-col overflow-hidden transition-all duration-300 ${
          isOpen
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
        }`}
        style={{ height: '580px', maxHeight: 'calc(100vh - 100px)' }}
      >
        {/* Header */}
        <div className="bg-[#1a3c34] px-5 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#c8a96e] rounded-full flex items-center justify-center">
              <Bot size={16} className="text-[#0d1f1a]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-white font-semibold text-sm">PropCapital Assistant</span>
                <span className="text-[9px] bg-[#c8a96e] text-[#0d1f1a] px-1.5 py-0.5 rounded-full font-semibold">AI</span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-white/60">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                Online · Avg reply: instant
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleClear}
              className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="Clear chat"
              title="Restart conversation"
            >
              <RefreshCw size={13} className="text-white" />
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="Close chat"
            >
              <X size={14} className="text-white" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#faf8f4]">
          {messages.length === 0 && (
            <div className="text-center text-[#8a8a8a] text-xs py-8">
              <Bot size={32} className="mx-auto mb-3 text-[#1a3c34]/30" />
              Starting conversation...
            </div>
          )}

          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-2.5 animate-slide-up ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.role === 'bot' && (
                <div className="w-7 h-7 bg-[#1a3c34] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <Bot size={13} className="text-[#c8a96e]" />
                </div>
              )}
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  msg.role === 'bot'
                    ? 'bg-white text-[#1c1c1c] rounded-tl-sm shadow-sm border border-[#e5e0d8]'
                    : 'bg-[#1a3c34] text-white rounded-tr-sm'
                }`}
              >
                {msg.role === 'bot' ? formatBotText(msg.text) : msg.text}
                <div className={`text-[9px] mt-1.5 ${msg.role === 'bot' ? 'text-[#8a8a8a]' : 'text-white/50'}`}>
                  {msg.timestamp.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <div className="flex gap-2.5 justify-start animate-slide-up">
              <div className="w-7 h-7 bg-[#1a3c34] rounded-full flex items-center justify-center shrink-0">
                <Bot size={13} className="text-[#c8a96e]" />
              </div>
              <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm border border-[#e5e0d8]">
                <div className="flex gap-1 items-center h-4">
                  <span className="w-2 h-2 bg-[#1a3c34]/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-2 h-2 bg-[#1a3c34]/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-2 h-2 bg-[#1a3c34]/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Suggested questions */}
        {!isTyping && messages.length > 0 && (
          <div className="px-4 py-2.5 bg-[#faf8f4] border-t border-[#e5e0d8] shrink-0">
            <div className="text-[9px] text-[#8a8a8a] uppercase tracking-wider mb-2">Suggested questions</div>
            <div className="flex flex-col gap-1.5 max-h-28 overflow-y-auto">
              {getSuggestionsForLastBot().slice(0, 3).map((q) => (
                <button
                  key={q}
                  onClick={() => sendMessage(q)}
                  className="text-left text-xs text-[#1a3c34] bg-[#1a3c34]/5 hover:bg-[#1a3c34]/10 px-3 py-2 rounded-lg transition-colors flex items-center gap-2 group"
                >
                  <ChevronRight size={11} className="text-[#c8a96e] shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <form onSubmit={handleSubmit} className="p-4 border-t border-[#e5e0d8] bg-white shrink-0">
          <div className="flex gap-2 items-center">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about properties, EMI, NRI services..."
              className="flex-1 text-sm text-[#1c1c1c] placeholder-[#8a8a8a] outline-none border border-[#e5e0d8] rounded-xl px-4 py-2.5 focus:border-[#1a3c34] transition-colors"
              disabled={isTyping}
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className="w-10 h-10 bg-[#1a3c34] text-white rounded-xl flex items-center justify-center hover:bg-[#2d6b5e] disabled:opacity-40 disabled:cursor-not-allowed transition-colors shrink-0"
              aria-label="Send message"
            >
              <Send size={15} />
            </button>
          </div>
          <div className="text-[9px] text-[#8a8a8a] text-center mt-2">
            🔒 Encrypted · PropCapital.ai Assistant · Not connected to real AI
          </div>
        </form>
      </div>
    </>
  );
}
