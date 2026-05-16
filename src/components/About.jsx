import React from "react";
import { Brain, Globe, Headphones, Rocket } from "lucide-react";
import Navbar from "./Navbar";
import Foooter from "./Foooter";
import { motion } from "motion/react"


const About = () => {
    return (
        <div className="bg-[#1d202e] ">

            <Navbar />



            <section className=" text-white min-h-screen px-6 md:px-16 py-20">

                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >


                    <div className="max-w-7xl mx-auto">


                        {/* Heading */}
                        <div className="text-center mb-20">
                            <p className="text-orange-400 uppercase tracking-[6px] text-sm mb-4">
                                About English Speak
                            </p>

                            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                                <motion.div
                                    initial={{ opacity: 0, x: 80 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1 }}
                                    viewport={{ once: true }}
                                >
                                    <h1>Speak Better.</h1>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: -80 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1 }}
                                    viewport={{ once: true }}
                                >
                                    <h1>Learn Faster.</h1>
                                </motion.div>
                            </h1>

                            <p className="text-gray-400 mt-8 max-w-3xl mx-auto text-lg leading-8">
                                English Speak is a modern learning platform created
                                to help students improve speaking confidence,
                                vocabulary, pronunciation, and communication skills
                                in a simple and interactive way.
                            </p>
                        </div>

                        {/* Main Layout */}
                        <div className="grid lg:grid-cols-2 gap-10">

                            {/* Left Big Card */}
                            <div className="bg-linear-to-br from-orange-500 to-yellow-400 rounded-[40px] p-10 text-black relative overflow-hidden">

                                <div className="absolute top-0 right-0 w-52 h-52 bg-white/20 rounded-full blur-3xl"></div>

                                <motion.div
                                    initial={{ opacity: 0, y: 80 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="relative z-10">

                                        <h2 className="text-4xl font-bold leading-tight">
                                            Learn English
                                            <br />
                                            With Smart Features
                                        </h2>

                                        <p className="mt-6 text-lg leading-8">
                                            Practice daily speaking, learn useful
                                            vocabulary, and build communication skills
                                            with a clean and beginner-friendly platform.
                                        </p>

                                        <button className="mt-10 bg-black text-white px-7 py-4 rounded-2xl font-semibold hover:scale-105 transition">
                                            Start Practice
                                        </button>

                                    </div>
                                </motion.div>

                            </div>

                            {/* Right Grid */}


                            <div className="grid sm:grid-cols-2 gap-6">




                                <motion.div
                                    initial={{ opacity: 0, y: 80 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="bg-zinc-900 border border-zinc-800 p-7 rounded-3xl hover:border-orange-400 transition duration-300">

                                        <Brain size={38} className="text-orange-400 mb-5" />

                                        <h3 className="text-2xl font-semibold mb-3">
                                            AI Practice
                                        </h3>


                                        <p className="text-gray-400 leading-7">
                                            Improve speaking confidence with AI-powered
                                            practice sessions.
                                        </p>

                                    </div>
                                </motion.div>


                                <motion.div
                                    initial={{ opacity: 0, y: 80 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="bg-zinc-900 border border-zinc-800 p-7 rounded-3xl hover:border-orange-400 transition duration-300">

                                        <Globe size={38} className="text-orange-400 mb-5" />

                                        <h3 className="text-2xl font-semibold mb-3">
                                            Daily English
                                        </h3>

                                        <p className="text-gray-400 leading-7">
                                            Learn useful sentences used in everyday
                                            conversations.
                                        </p>
                                    </div>
                                </motion.div>


                                <motion.div
                                    initial={{ opacity: 0, y: 80 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="bg-zinc-900 border border-zinc-800 p-7 rounded-3xl hover:border-orange-400 transition duration-300">

                                        <Headphones size={38} className="text-orange-400 mb-5" />

                                        <h3 className="text-2xl font-semibold mb-3">
                                            Listening Skills
                                        </h3>

                                        <p className="text-gray-400 leading-7">
                                            Train your ears to understand English more
                                            naturally.
                                        </p>
                                    </div>
                                </motion.div>


                                <motion.div
                                    initial={{ opacity: 0, y: 80 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="bg-zinc-900 border border-zinc-800 p-7 rounded-3xl hover:border-orange-400 transition duration-300">

                                        <Rocket size={38} className="text-orange-400 mb-5" />

                                        <h3 className="text-2xl font-semibold mb-3">
                                            Fast Growth
                                        </h3>

                                        <p className="text-gray-400 leading-7">
                                            Practice regularly and track your speaking
                                            improvement step by step.
                                        </p>
                                    </div>
                                </motion.div>


                            </div>

                        </div>

                    </div>

                </motion.div>
            </section>


            <Foooter />
        </div>
    );
};

export default About;