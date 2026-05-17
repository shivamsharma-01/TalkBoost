import React from 'react'
import words from '../data/Words';
import Navbar from '../components/Navbar';
import Foooter from '../components/Foooter';
import { motion } from "motion/react"


const WordCard = () => {
    return (

        <div className='bg-[#212638]'>
            <Navbar/>

            <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >

            <h1 className='text-white text-2xl mt-8 mb-8 p-10 flex justify-center'>1500+ Common English words with Hindi meaning | Word Meaning in Hindi</h1>
            <div className="p-6">

                {Object.entries(words).map(([letter, wordList]) => (
                    <div key={letter} className="mb-10">

                        <h1 className="mb-4 text-4xl font-bold text-red-800">
                            {letter}
                        </h1>

                        <div className="grid gap-4">

                            {wordList.map((item, index) => (
                                <div
                                    key={index}
                                    className="rounded-xl border border-gray-700 p-4"
                                >
                                    <h2 className="text-2xl text-white font-bold">
                                        {item.word}
                                    </h2>

                                    <p className="text-green-400">
                                        <span className='text-[#8da4c5]'>Hindi </span>: {item.hindiMeaning}
                                    </p>

                                    <p className="text-[#fef3c7]">
                                        <span className='text-[#94a3b8]'>English </span>: {item.englishMeaning}
                                    </p>
                                </div>
                            ))}

                        </div>
                    </div>
                ))}

            </div>
            <Foooter/>
            </motion.div>
        </div>
    )
}

export default WordCard