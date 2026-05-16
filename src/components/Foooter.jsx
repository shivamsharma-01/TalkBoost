import React from 'react'
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "motion/react"




const Foooter = () => {
    return (
        <div>

            <footer className="w-full border-t border-white/10 bg-black text-white">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row">

                    <div className="max-w-md text-center md:text-left">
                        <h2 className="text-2xl font-bold tracking-wide text-[#fecdd3]">
                            Lear<span className="text-[#fca5a5]">ner</span>
                        </h2>
                        <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                            Improve your English speaking and communication skills with AI-powered conversations, grammar correction, and real-time feedback.
                        </p>
                    </div>


<motion.div
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5 }}
                            viewport={{ once: true }}
                        >
                    <div className="flex items-center gap-4">

                        
                            <a
                                href="https://www.instagram.com/shivam_sharma._01/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-3xl rounded-full border border-white/10 p-3 text-gray-300 transition hover:border-cyan-400 hover:text-cyan-400"
                            >
                                <FaInstagram />
                            </a>


                        
                            <a
                                href="https://www.linkedin.com/in/shivam-sharma-16a63437a/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-3xl rounded-full border border-white/10 p-3 text-gray-300 transition hover:border-cyan-400 hover:text-cyan-400">
                                <FaLinkedin />
                            </a>
                       

                    </div> </motion.div>
                </div>


                <div className="border-t border-white/10 py-4 text-center text-sm text-gray-500">
                    © 2026 Your Speaker. All rights reserved.
                </div>
            </footer>

        </div>
    )
}

export default Foooter