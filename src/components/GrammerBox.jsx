import { motion } from "framer-motion";
import {
    BookOpenText,
    Sparkles,
    MessageSquareText,
    Bot,
} from "lucide-react";
import Navbar from "./Navbar";
import { link } from "motion/react-client";
import Foooter from "./Foooter";
import { Link } from "react-router-dom";

const features = [
    {
        title: "Word Meaning",
        desc: "Learn powerful English words with easy explanations.",
        icon: <BookOpenText size={30} />,
        soon: false,
        link: "/wordcard"
        
    },
    {
        title: "Grammar Part",
        desc: "Master grammar rules with interactive lessons.",
        icon: <Sparkles size={30} />,
        soon: true,
    },
    {
        title: "Daily Use Sentences",
        desc: "Practice real-life English conversations daily.",
        icon: <MessageSquareText size={30} />,
        soon: true,
    },
    {
        title: "AI Speaking",
        desc: "Talk with AI and improve your confidence.",
        icon: <Bot size={30} />,
        soon: true,
    },
];

export default function FeatureSection() {
    return (
        <div className="bg-[#1d202e]">
            <Navbar/>
            
            <section className="bg-[#1d202e] text-white py-24 px-6 md:px-16">

                {/* Heading */}

                
                
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-2xl mx-auto"
                >
                    <p className="text-[#84cc16] font-semibold tracking-widest mb-3">
                        FEATURES
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                        Improve Your
                        <span className="text-[#84cc16]"> English Skills</span>
                    </h2>

                    <p className="text-zinc-400 mt-5 leading-relaxed">
                        Learn vocabulary, grammar, speaking and real-life communication
                        with smart AI tools.
                    </p>
                </motion.div>

               
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-16 max-w-7xl mx-auto">


                    {features.map((item, index) => (
                        <Link to={item.link}>
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.15,
                            }}
                            whileHover={{
                                y: -8,
                            }}
                            className="relative bg-[#0f172a] border border-white/10 rounded-[30px] p-7 overflow-hidden group"
                        >

                            
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-linear-to-br from-[#84cc16]/10 to-transparent" />

                            
                            {item.soon && (
                                <div className="absolute top-5 right-5">
                                    <span className="bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full shadow-lg animate-pulse">
                                        Coming Soon
                                    </span>
                                </div>
                            )}

                            
                            <div className="w-16 h-16 rounded-2xl bg-[#84cc16]/10 text-[#84cc16] flex items-center justify-center mb-6 border border-[#84cc16]/20">
                                {item.icon}
                            </div>

                            
                            <h3 className="text-2xl font-semibold mb-4">
                                {item.title}
                            </h3>

                            
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                {item.desc}
                            </p>


                           
                            <motion.div
                                initial={{ width: 0 }}
                                whileHover={{ width: "100%" }}
                                transition={{ duration: 0.3 }}
                                className="h-0.5 bg-[#84cc16] mt-7"
                            />

                        </motion.div>

                        </Link>
                    ))}
                </div>
            </section>

            <Foooter/>
        </div>
    );
}