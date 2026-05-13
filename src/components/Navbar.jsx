import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from "motion/react"
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";




const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div>
            <nav className="relative z-10 flex items-center justify-between px-6 md:px-16 py-6 border-b border-white/10">
                <div className="flex text-2xl gap-2 font-bold">

                    <motion.img

                        src="robot1.png" alt="Logo"
                        animate={{
                            y: [0, -5, 0]
                        }}
                        transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className='h-12 '
                    />
                    {/* <img   /> */}
                    <span className="text-[#334155] mt-1.5">Your</span>
                    <span className="text-[#fca5a5] mt-1.5">Voice</span>
                </div>

                <ul className="hidden md:flex items-center gap-8 text-zinc-300 lg:gap-17">
                    <li className="hover:text-white transition">
                        <Link to="/">Home</Link></li>
                    <li className="hover:text-white transition">
                        <Link to="/features">Features</Link></li>
                    <li className="hover:text-white  transition  rounded-4xl p-1 pl-5 bg-[#3579a0] text-black text-lg font-bold ">
                        <div className='animate-bounce [animation-duration:2s] ease-in-out'>
                        <Link to="/grammer">
                            English
                        </Link>
                        <span className=" text-[14px]  text-white px-1 py-0.5 rounded-full animate-bounce">
                                ✨
                            </span>
                            </div>
                        </li>
                        
                    <li className="hover:text-white transition">About</li>
                    <li className="hover:text-white transition">Contact</li>
                </ul>

                <button className=" text-base md:text-lg  bg-[#4d7c0f] hover:bg-[#65a30d] transition px-5 py-2 rounded-full  lg:text-xl">
                    <Link to="/grammer">Get Started</Link> 
                </button>



                <button
                    className="md:hidden text-white"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {
                        menuOpen
                            ? <IoClose size={30}  />
                            : <IoMenu size={30} />
                            
                    }
                </button>

            </nav>

             {
                menuOpen && (
                    <div className="md:hidden bg-black/95 text-white px-6 py-6 space-y-5">

                        <Link to="/" className="block hover:text-yellow-400">
                            Home
                        </Link>

                        <Link to="/features" className="block hover:text-yellow-400">
                            Features
                        </Link>

                        <Link
                            to="/grammer"
                            className="block bg-[#3579a0] text-black px-4 py-2 rounded-full w-fit font-bold"
                        >
                            Grammer ✨
                        </Link>

                        <div className="hover:text-yellow-400">
                            About
                        </div>

                        <div className="hover:text-yellow-400">
                            Contact
                        </div>

                        <button className="bg-[#4d7c0f] hover:bg-[#65a30d] transition px-5 py-2 rounded-full text-white">
                            Get Started
                        </button>

                    </div>
                )
            }
        </div>
    )
}

export default Navbar