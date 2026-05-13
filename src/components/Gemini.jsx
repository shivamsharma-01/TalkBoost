import React, { useState } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';
import { RiGeminiFill } from "react-icons/ri";


export default function Gemini() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Hello Shivam 👋 Ask me anything.'
    }
  ]);

  // Paste your Gemini API key here
  const API_KEY = 'AIzaSyAP0Bh5J3NDKacRX70uKVns1RDj556ZH0U';

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = {
      sender: 'user',
      text: input
    };

    setMessages((prev) => [...prev, userMessage]);

    const currentInput = input;
    setInput('');

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${API_KEY}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: currentInput
                  }
                ]
              }
            ]
          })
        }
      );

      const data = await response.json();

      const botReply = data?.candidates?.[0]?.content?.parts?.[0]?.text;

      setMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: botReply || 'No response from AI 😅'
        }
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: 'Something went wrong 😢'
        }
      ]);
    }
  };

  return (
    <div>

     
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 z-50"
      >
        {
          open ? <X size={28} /> : <RiGeminiFill size={28}  />

        }
      </button>

      
      {
        open && (
          <div className="fixed bottom-24 right-6 w-85 h-125 bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl border border-zinc-700 flex flex-col z-50">

            
            <div className="bg-green-500 text-white p-4 font-bold text-lg flex items-center gap-2">
              <RiGeminiFill size={22} />
              AI Assistant
            </div>

            
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {
                messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm whitespace-pre-wrap ${
                        msg.sender === 'user'
                          ? 'bg-green-500 text-white'
                          : 'bg-zinc-800 text-white'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))
              }
            </div>

            
            <div className="p-3 border-t border-zinc-700 flex gap-2 bg-zinc-900">

              <input
                type="text"
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                className="flex-1 bg-zinc-800 text-white px-4 py-2 rounded-full outline-none"
              />

              <button
                onClick={sendMessage}
                className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full transition"
              >
                <Send size={18} />
              </button>

            </div>

          </div>
        )
      }

    </div>
  );
}
