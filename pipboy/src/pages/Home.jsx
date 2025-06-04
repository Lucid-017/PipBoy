import React, { useState } from 'react'
import './css/Home.css'
import { Link } from 'react-router-dom';
import Status from '../components/Status';
import Special from '../components/Special';
import Perks from '../components/Perks';
import Skills from '../components/Skills';
import General from '../components/General';
const Home = () => {
    const [isActive,setIsActive] = useState('STATUS')
    const tabs = [
        { name: "STATUS", path: "/status" },
        { name: "S.P.E.C.I.A.L", path: "/inventory" },
        { name: "SKILLS", path: "/skills" },
        { name: "PERKS", path: "/perk" },
        { name: "GENERAL", path: "/data" },
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

        {isActive === 'STATUS' ? <Status/> : isActive=== 'S.P.E.C.I.A.L' ? <Special/> :isActive==='PERKS' ?<Perks/>: isActive==='SKILLS' ?<Skills/>:<General/>}
                    
    </section>
  )
}

export default Home
