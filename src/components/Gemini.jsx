import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { RiGeminiFill } from "react-icons/ri";
import Navbar from './Navbar';

export default function Gemini() {

  const [input, setInput] = useState('');

  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Hello Shivam 👋 Ask me anything.'
    }
  ]);

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

      const botReply =
        data?.candidates?.[0]?.content?.parts?.[0]?.text;

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

    <div className=' min-h-screen bg-[#243546]'>

      <Navbar />

      <div className=' flex flex-col md:flex-row items-center justify-center  px- py-10 '>

        <div className=' w-75 md:w-100 '>
          {/* <img src="geminipage-bot.png" alt="" /> */}
          <p className="text-blue-400 font-semibold mb-3">
            ⚡ AI Assistant
          </p>

          <h1 className="text-5xl font-bold leading-tight mb-6">
            Code Smarter <br /> With AI 🚀
          </h1>

          <p className="text-gray-400 text-lg leading-8 mb-8">
            Ask coding questions, generate ideas,
            fix bugs, and learn faster with your
            personal AI assistant.
          </p>

        </div>





        <div className=' bg-[#70808a88] p-3 rounded-3xl md:w-[40%]'>

          <div className=" h-170 bg-zinc-400 rounded-3xl overflow-hidden shadow-xl  flex flex-col">


            <div className="bg-orange-400 text-white p-4 font-bold text-lg flex items-center gap-2">
              <RiGeminiFill size={22} />
              AI Assistant
            </div>


            <div className="flex-1 overflow-y-auto p-4 space-y-4">

              {
                messages.map((msg, index) => (

                  <div
                    key={index}
                    className={`flex ${msg.sender === 'user'
                      ? 'justify-end'
                      : 'justify-start'
                      }`}
                  >

                    <div
                      className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm whitespace-pre-wrap ${msg.sender === 'user'
                        ? 'bg-blue-800 text-white'
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
                onKeyDown={(e) =>
                  e.key === 'Enter' && sendMessage()
                }
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

        </div>


        <div className='w-75 md:w-90 '>
          <img src="robot2.png" alt="" />
        </div>


      </div>
    </div>
  );
}