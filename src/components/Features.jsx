import { motion } from "framer-motion";
import { Mic, MessageCircle, Languages } from "lucide-react";
import Navbar from "./Navbar";
import { div } from "motion/react-client";
import Foooter from "./Foooter";

const features = [
  {
    icon: <Mic size={30} />,
    title: "Voice Practice",
    desc: "Practice speaking English with real-time AI conversation.",
  },
  {
    icon: <Languages size={30} />,
    title: "Grammar Fix",
    desc: "Get instant grammar correction and better sentence suggestions.",
  },
  {
    icon: <MessageCircle size={30} />,
    title: "AI Chat",
    desc: "Talk naturally with AI and improve communication skills daily.",
  },
];

export default function Features() {
  return (

    <div className="bg-[#1d202e]">
        <Navbar/>
    <section className="bg-[#1d202e] text-white py-24 px-6 md:px-16">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto"
      >
        <p className="text-[#84cc16] font-medium mb-3">
          FEATURES
        </p>

        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Improve Your English
          <br />
          With AI
        </h2>

        <p className="text-zinc-400 mt-5 leading-relaxed">
          Practice speaking, fix grammar mistakes, and communicate
          confidently using smart AI tools.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">

        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="bg-[#111827] border border-white/10 rounded-2xl p-8"
          >

            {/* Icon */}
            <div className="w-14 h-14 rounded-xl bg-[#84cc16]/10 flex items-center justify-center text-[#84cc16] mb-6">
              {feature.icon}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-semibold mb-3">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-zinc-400 leading-relaxed">
              {feature.desc}
            </p>

          </motion.div>
        ))}

      </div>
    </section>

    <Foooter/>
    </div>
  );
}