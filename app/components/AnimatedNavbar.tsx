"use client"
import { CalendarDays, Pyramid, Smile } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react"



export default function AnimatedNavbar() {


    const [hovered, setHovered] = useState<number | null>(4)


    return (
        <div className="fixed top-6  flex justify-center items-center w-full   z-100">
            <div className="flex justify-between items-center w-[95vw] p-2 border border-white/10 bg-black/40  backdrop-blur-xl rounded-4xl ">
                <div className="flex justify-start items-center gap-4">
                    <span className="p-1 rounded-full bg-white">
                        <Pyramid size={24} />
                    </span>
                    <a className="text-white text-2xl font-light">
                        Aura Studios
                    </a>
                </div>
                <nav
                    onMouseLeave={() => setHovered(4)}
                    className=" flex justify-start items-center gap-4">

                    {navItems.map((item, idx) => (


                        <Link
                            key={idx}
                            onMouseEnter={() => setHovered(idx)}
                            href={item.link} className="relative flex items-center justify-start gap-2 rounded-full  px-4 py-2 text-sm text-white w-full h-full">

                            {hovered === idx && (
                                <motion.span
                                    layoutId="hover"
                                    className="absolute inset-0  rounded-full border border-red-200/10 bg-white/10  text-sm text-white "></motion.span>
                            )}

                            <span className='hidden md:flex justify-center items-center gap-2 w-full h-full whitespace-nowrap'>
                                {idx === 4 && <CalendarDays size={16} />}
                                {item.lable}</span>
                        </Link>

                    ))}

                </nav>


            </div>
        </div>
    )
}

type navItemsTyoe = {
    lable: string;
    link: string;
}

const navItems: navItemsTyoe[] = [
    {
        lable: "Services",
        link: "#services"
    },
    {
        lable: "Projects",
        link: "#projects"
    },
    {
        lable: "Testimonials",
        link: "#testimonials"
    },
    {
        lable: "Contact",
        link: "#contact"
    },
    {
        lable: "Book Meeting",
        link: "#meeting"
    }
]



//layout hover structure

{/* <nav>
    {
        <Link>
        
        {contitional <div/>}
        main <span/>
        </Link>
    }
</nav> */}