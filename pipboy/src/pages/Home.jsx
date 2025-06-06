import React, { useState } from 'react'
import './css/Home.css'
import { Link } from 'react-router-dom';
import Status from '../components/stat components/Status';
import Special from '../components/stat components/Special';
import Perks from '../components/stat components/Perks';
import Skills from '../components/stat components/Skills';
import General from '../components/stat components/General';
import { AnimatePresence, motion } from "framer-motion";

const Home = () => {
    const [isActive,setIsActive] = useState('STATUS')
    const tabs = [
        { name: "STATUS"},
        { name: "S.P.E.C.I.A.L"},
        { name: "SKILLS"},
        { name: "PERKS"},
        { name: "GENERAL"}
      ];
  return (
    <section className='px-5 md:px-10'>
        <ul className='flex flex-wrap text-center sm:text-start items-center space-x-4 sm:px-8 py-2 md:py-4 md:pt-10'>
            {/*TODO get the index of each tab, amd minus in increments opacity values for the items 
            eg. 5 tabs, item at index 4 0.2 opacity, index 3 .4 opacity and so on */}
        {tabs.map((item) => (
            <li onClick={()=>setIsActive(item.name)} key={item.name} className={`text-[20px] font-semibold tab-item cursor-pointer ${isActive ===item.name ? '':'opacity-[.5]'}`}>
                <p>{item.name}</p>
            </li>
        ))}
        </ul>
        {/* body of content */}
        <AnimatePresence mode="wait">
            <motion.div
            key={isActive}
            initial={{opacity:0,y:10}}
            animate={{opacity:1,y:0}}
            exit={{opacity:0,y:-10}}
            transition={{duration:0.2}}
            >
                {isActive === 'STATUS' ? <Status/> : isActive=== 'S.P.E.C.I.A.L' ? <Special/> :isActive==='PERKS' ?<Perks/>: isActive==='SKILLS' ?<Skills/>:<General/>}
            </motion.div>
        </AnimatePresence>
                    
    </section>
  )
}

export default Home
