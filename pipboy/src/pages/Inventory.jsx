import {useState} from 'react'
import {AnimatePresence,motion} from 'framer-motion'
import Weapons from '../components/Inventory component/Weapons';
import Apparel from '../components/Inventory component/Apparel';
import Misc from '../components/Inventory component/Misc';
import Ammo from '../components/Inventory component/Ammo';
import Aid from '../components/Inventory component/Aid';

const Inventory = () => {
   const [isActive,setIsActive] = useState('WEAPONS')
      const tabs = [
          { name: "WEAPONS"},
          { name: "APPAREL"},
          { name: "AID"},
          { name: "MISC"},
          { name: "AMMO"}
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
                  {isActive === 'WEAPONS' ? <Weapons/> : isActive=== 'APPAREL' ? <Apparel/> :isActive==='AID' ?<Aid/>: isActive==='MISC' ?<Misc/>:<Ammo/>}
              </motion.div>
          </AnimatePresence>
                      
      </section>
    )
}

export default Inventory
