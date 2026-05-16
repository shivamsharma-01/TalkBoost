import React from 'react'
import Navbar from './Navbar'
import Foooter from './Foooter'
import { MessageSquareText, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const Challenge = () => {
    return (
        <div className='bg-[#121a20]'>
            <Navbar />

            <div className="w-full min-h-screen flex justify-center items-center px-4 py-10">

                <div className="w-full flex justify-center">

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                        }}
                        
                        className="relative bg-[#58595c] border border-white/10 rounded-[30px] p-6 sm:p-8 md:p-10  w-full max-w-130 min-h-90 overflow-hidden group" >


                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-linear-to-br from-[#5e471151] to-transparent" />


                        <div className="absolute top-4 right-4 sm:top-5 sm:right-5">
                            <span className="bg-red-600 text-white text-sm sm:text-md font-semibold px-3 py-1 sm:px-4 sm:py-2 rounded-full shadow-lg animate-pulse">
                                Coming Soon
                            </span>
                        </div>


                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#1e201c] text-[#f3960b] flex items-center justify-center mb-6 border border-[#84cc16]/20">
                            <MessageSquareText size={28} />
                        </div>


                        <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-white">
                            Daily Tasks...
                        </h3>


                        <p className="text-zinc-100 text-sm sm:text-md leading-relaxed">
                            Practice real-life English conversations daily,
                            improve grammar, and get instant AI feedback
                            using voice interaction.
                        </p>


                        <motion.button
                        whileHover={{
                            y: -8,
                        }}
                            className=" text-white mt-10 flex items-center justify-center gap-2 h-12 sm:h-14 px-6 sm:px-8 text-lg sm:text-2xl bg-[#0b5304] font-semibold rounded-full hover:text-green-300 transition duration-300" >
                            Go
                            <ArrowRight size={20} />
                        </motion.button>

                    </motion.div>

                </div>

            </div>


            <Foooter />
        </div>
    )
}

export default Challenge