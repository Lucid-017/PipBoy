import React, { useState } from 'react'
import './css/Home.css'
import { Link } from 'react-router-dom';
import Status from '../components/Status';
import Special from '../components/Special';
import Perks from '../components/Perks';
const Home = () => {
    const [isActive,setIsActive] = useState('STATUS')
    const tabs = [
        { name: "STATUS", path: "/status" },
        { name: "S.P.E.C.I.A.L", path: "/inventory" },
        { name: "PERKS", path: "/data" },
      ];
  return (
    <section className='px-5 md:px-10'>
        <ul className='flex flex-wrap text-center sm:text-start items-center space-x-4 sm:px-8 py-4 md:pt-10'>
        {tabs.map((item) => (
            <li onClick={()=>setIsActive(item.name)} key={item.name} className={`text-[20px] font-semibold tab-item cursor-pointer ${isActive ===item.name ? '':'opacity-[.5]'}`}>
                <p>{item.name}</p>
            </li>
        ))}
        </ul>

        {isActive === 'STATUS' ? <Status/> : isActive=== 'S.P.E.C.I.A.L' ? <Special/> : <Perks/>}
                    
    </section>
  )
}

export default Home
