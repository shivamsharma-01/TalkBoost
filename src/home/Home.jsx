import React from 'react'
import Navbar from '../components/Navbar'
import Foooter from '../components/Foooter'
import { motion } from "motion/react"
import { IoRocket } from "react-icons/io5";



const Home = () => {
    return (
        <div>
            <div className="min-h-screen bg-linear-to-r  bg-[#181a23] text-white overflow-hidden">

                <div className="absolute top-0 left-0 w-72 h-72 bg-[#8b5cf6]/20 blur-3xl rounded-full" />
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#1e293b]/4 blur-3xl rounded-full" />


                <Navbar />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >

                    <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-20 md:pt-28">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="text-center max-w-2xl mx-auto"
                        >
                            <div className="bg-white/5 border border-white/10 backdrop-blur-lg px-4 py-2 rounded-full text-sm text-zinc-300 mb-6">
                                Improve Your English With AI
                            </div>

                        </motion.div>




                        <h1 className="text-[#fed7aa] text-5xl md:text-7xl font-bold leading-tight max-w-4xl tracking-tight">
                            <motion.div
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: true }}
                            >
                                <span className='text-[#e6e8eb]'>S</span><span className='text-[#9fa4ac]'>p</span><span className='text-[#828d9d]'>e</span><span className='text-[#747f8f]'>a</span><span className='text-[#64748b]'>k</span> <span className='text-[#818997]'>English</span>
                            </motion.div>
                            {/* <br /> */}
                            <motion.div
                                initial={{ opacity: 0, x: 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: true }}
                            >
                                <span className=" text-[#2c7592]" >Confidently</span>
                            </motion.div> </h1>


                        <p className="text-zinc-300 mt-6 max-w-2xl text-base md:text-lg leading-relaxed">
                            Practice conversations, improve grammar, and get instant AI feedback using voice interaction.
                        </p>


                        <div className="mt-14 flex flex-col items-center">
                            <button className="w-28 h-28 rounded-full bg-[#fda4af] hover:scale-105 hover:bg-[#fecdd3] transition duration-300 flex items-center justify-center shadow-[0_0_60px_rgba(168,85,247,0.5)]">
                                <motion.img
                                    src="robot2.png"
                                    alt="Logo"
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    whileHover={{
                                        scale: 1.3,
                                        rotate: 5
                                    }}

                                    transition={{ type: "spring", stiffness: 300 }}
                                />
                            </button>

                            <p className="mt-5 text-[zinc-400] text-sm flex justify-center">
                                Tap to go...<span className='text-orange-600  ml-1 mt-1'><IoRocket /></span>
                            </p>
                        </div>
                    </section>
                </motion.div>


                <section className="relative z-10 px-6 md:px-16 mt-24 pb-20">
                    <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">

                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
                                <h2 className="text-2xl font-semibold mb-6">Conversation</h2>

                                <div className="space-y-5">

                                    <div className="flex justify-end">
                                        <div className="bg-purple-600 px-5 py-3 rounded-2xl max-w-sm text-sm md:text-base">
                                            Hello AI, I wants to improve my English.
                                        </div>
                                    </div>


                                    <div className="flex justify-start">
                                        <div className="bg-zinc-900 border border-white/10 px-5 py-3 rounded-2xl max-w-sm text-sm md:text-base text-zinc-300">
                                            Great! You can say: “I want to improve my English.”
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </motion.div>



                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
                                <h2 className="text-2xl font-semibold mb-6">Grammar Feedback</h2>

                                <div className="space-y-5">
                                    <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-5">
                                        <p className="text-red-400 text-sm mb-2">Incorrect</p>
                                        <p className="text-lg">I wants to improve my English.</p>
                                    </div>

                                    <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-5">
                                        <p className="text-green-400 text-sm mb-2">Correct</p>
                                        <p className="text-lg">I want to improve my English.</p>
                                    </div>

                                    <div className="bg-zinc-900 border border-white/10 rounded-2xl p-5">
                                        <p className="text-purple-400 text-sm mb-2">AI Suggestion</p>
                                        <p className="text-zinc-300 leading-relaxed">
                                            Try speaking slowly and clearly. Focus on verb forms while making sentences.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </section>

            </div >

            <Foooter />


        </div >
    )
}

export default Home