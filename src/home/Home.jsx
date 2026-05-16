import React from 'react'
import Navbar from '../components/Navbar'
import Foooter from '../components/Foooter'
import { motion } from "motion/react"
import { IoRocket } from "react-icons/io5";
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <div className='bg-[#121a20]'>



            <div className="min-h-screen bg-linear-to-r   text-white overflow-hidden">

                <div className="absolute top-0 left-0 w-72 h-70 bg-[#253234] blur-3xl rounded-full" />
                <div className=" md:absolute top-[39%] left-[68%] w-[20%] h-[30%] bg-[#000000] blur-3xl rounded-full" />
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#1e293b]/4 blur-3xl rounded-full" />


                <Navbar />

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >

                    <section className=" relative z-10 flex flex-col items-start justify-center text-center px-10 pt-20 md:pt-28">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="text-center max-w-2xl mx-auto"
                        >
                            <div className="bg-white/5 border border-white/10 backdrop-blur-lg px-4 py-2 rounded-full text-sm text-zinc-300 mb-6">
                                Improve Your English With AI
                            </div>

                        </motion.div>




                        <h1 className="ml-8 md:  text-[#fed7aa] text-5xl md:text-7xl font-bold leading-tight max-w-4xl tracking-tight ">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <span className='text-[#e6e8eb]'>S</span><span className='text-[#9fa4ac]'>p</span><span className='text-[#828d9d]'>e</span><span className='text-[#747f8f]'>a</span><span className='text-[#64748b]'>k</span> <span className='text-[#818997]'>English</span>
                            </motion.div>


                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <span className=" text-[#2c7592]" >Confidently</span>
                            </motion.div>
                        </h1>


                        <div className='md:w-[50%]'>
                            <p className="text-zinc-300 mt-6 max-w-2xl text-base md:text-lg leading-relaxed">
                                Practice conversations, improve grammar, and get instant AI feedback using voice interaction.
                            </p>
                        </div>

                        <div className="mt-14 flex flex-col items-center w-full">
                           <Link to="/chat"><button className="w-28 h-28 rounded-full bg-[#fda4af] hover:scale-105 hover:bg-[#fecdd3] transition duration-300 flex items-center justify-center shadow-[0_0_60px_rgba(168,85,24,0.5)]">
                                <motion.img
                                    src="robot2.png"
                                    alt="Logo"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    whileHover={{
                                        scale: 1.3,
                                        rotate: 5
                                    }}

                                    transition={{ type: "spring", stiffness: 300 }}
                                />
                            </button></Link> 

                            <p className="mt-5 text-[zinc-400] text-sm flex justify-center">
                                Tap to go...<span className='text-orange-600  ml-1 mt-1'><IoRocket /></span>
                            </p>
                        </div>




                        <div className="hidden md:block absolute top-35 mr-[5%] h-120 md:max-h-[50%] md:text-sm max-w-[30%] mx-auto text-center border right-2 border-white/10 bg-white/5 backdrop-blur-xl rounded-[45px] p-5 lg:text-xl">

                            <motion.div
                                initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                viewport={{ once: true }}
                            >
                                <p className="text-orange-400 text-sm mb-4">
                                    WORD OF THE DAY
                                </p>
                            </motion.div>


                            <motion.div
                                initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.65 }}
                                viewport={{ once: true }}
                            >
                                <h1 className="text-5xl font-bold mb-4">
                                    Confident
                                </h1>
                            </motion.div>


                            <motion.div
                                initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: true }}
                            >
                                <p className="text-zinc-300 text-lg mb-6">
                                    Feeling or showing confidence in yourself.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.3 }}
                                viewport={{ once: true }}
                            >

                                <div className="bg-zinc-900 border border-white/10 rounded-2xl p-3 md:h-[40%] lg:h-[45%] ">
                                    <p className="text-green-400 text-sm mb-2">
                                        Example Sentence
                                    </p>

                                    <p className="text-white text-sm  lg:text-xl ">
                                        She speaks English confidently during interviews.
                                    </p>
                                </div>
                            </motion.div>



                        </div>
                        




                    </section>


                </motion.div>



                <section className="px-6 md:px-16 py-20 relative z-10 ">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >

                        <div className="max-w-5xl mx-auto bg-linear-to-r from-purple-500/20 to-pink-500/20 border border-white/10 rounded-[40px] p-10">

                            <p className="text-pink-300 text-sm mb-4">
                                TODAY'S CHALLENGE
                            </p>

                            <h1 className="text-4xl font-bold mb-5">
                                Speak English For 2 Minutes
                            </h1>

                            <p className="text-zinc-300 max-w-2xl leading-relaxed">
                                Try introducing yourself in English without stopping.
                                Focus on clarity and confidence while speaking.
                            </p>

                            <button className="mt-8 px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition duration-300 hover:bg-green-600">
                                Start Challenge
                            </button>

                        </div>
                    </motion.div>


                </section>




            </div >




            <section className="px-6 md:px-16  relative z-10 ">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">


                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-purple-500/10 border border-purple-500/20 rounded-3xl p-8 text-center hover:-translate-y-2 transition duration-300">
                            <h1 className="text-5xl font-bold text-purple-400">10K+</h1>
                            <p className="text-zinc-300 mt-3">Active Learners</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >

                        <div className="bg-pink-500/10 border border-pink-500/20 rounded-3xl p-8 text-center hover:-translate-y-2 transition duration-300">
                            <h1 className="text-5xl font-bold text-pink-400">50K+</h1>
                            <p className="text-zinc-300 mt-3">Practice Sessions</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-3xl p-8 text-center hover:-translate-y-2 transition duration-300">
                            <h1 className="text-5xl font-bold text-cyan-400">95%</h1>
                            <p className="text-zinc-300 mt-3">Improvement Rate</p>
                        </div>
                    </motion.div>

                </div>
            </section>




            <section className="px-6 md:px-16 py-20 relative z-10">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">


                    <motion.div
                        initial={{ opacity: 0, y: 70 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-white/15 border border-white/10 rounded-3xl p-6 backdrop-blur-xl hover:-translate-y-2 transition duration-300">
                            <div className="text-4xl mb-4">🎤</div>
                            <h2 className="text-xl font-semibold mb-3">Voice Practice</h2>
                            <p className="text-zinc-300 text-sm">
                                Practice real conversations using AI voice interaction.
                            </p>
                        </div>
                    </motion.div>



                    <motion.div
                        initial={{ opacity: 0, y: 70 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-white/15 border border-white/10 rounded-3xl p-6 backdrop-blur-xl hover:-translate-y-2 transition duration-300">
                            <div className="text-4xl mb-4">⚡</div>
                            <h2 className="text-xl font-semibold mb-3">Instant Feedback</h2>
                            <p className="text-zinc-300 text-sm">
                                Get grammar and pronunciation correction instantly.
                            </p>
                        </div>
                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0, y: 70 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-white/15 border border-white/10 rounded-3xl p-6 backdrop-blur-xl hover:-translate-y-2 transition duration-300">
                            <div className="text-4xl mb-4">📘</div>
                            <h2 className="text-xl font-semibold mb-3">Daily Vocabulary</h2>
                            <p className="text-zinc-300 text-sm">
                                Learn powerful English words every single day.
                            </p>
                        </div>
                    </motion.div>



                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-white/15 border border-white/10 rounded-3xl p-6 backdrop-blur-xl hover:-translate-y-2 transition duration-300">
                            <div className="text-4xl mb-4">🚀</div>
                            <h2 className="text-xl font-semibold mb-3">Confidence Boost</h2>
                            <p className="text-zinc-300 text-sm">
                                Improve fluency and confidence while speaking.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </section>



            <section className="px-6 md:px-16 py-20 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="max-w-5xl mx-auto bg-white/10 border border-white/10 rounded-[40px] p-8 backdrop-blur-xl">

                        <motion.div
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                        >
                            <h1 className="text-3xl font-bold mb-8 text-white/90">
                                AI Conversation
                            </h1></motion.div>

                        <div className="space-y-6">

                            <motion.div
                                initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: true }}
                            >

                                <div className="flex justify-end">
                                    <div className="bg-purple-600 px-6 py-4 rounded-3xl max-w-md">
                                        Hello AI, can you help me improve my fluency?
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex justify-start">
                                    <div className="bg-zinc-900 border border-white/10 px-6 py-4 rounded-3xl max-w-md text-zinc-300">
                                        Of course! Practice speaking daily and try thinking in English.
                                    </div>
                                </div>
                            </motion.div>


                            <motion.div
                                initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex justify-end">
                                    <div className="bg-purple-600 px-6 py-4 rounded-3xl max-w-md">
                                        How can I improve pronunciation?
                                    </div>
                                </div>
                            </motion.div>


                            <motion.div
                                initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: true }}
                            >

                                <div className="flex justify-start">
                                    <div className="bg-zinc-900 border border-white/10 px-6 py-4 rounded-3xl max-w-md text-zinc-300">
                                        Listen carefully to native speakers and repeat sentences loudly.
                                    </div>
                                </div>
                            </motion.div>


                        </div>

                    </div>
                </motion.div>

            </section>





            <Foooter />


        </div >
    )
}

export default Home