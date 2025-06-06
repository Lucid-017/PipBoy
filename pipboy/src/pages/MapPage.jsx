import {useState} from 'react'
import {AnimatePresence,motion} from 'framer-motion'

const MapPage = () => {
     const [isActive,setIsActive] = useState('WORLD MAP')
      const tabs = [
          { name: "WORLD MAP"},
          { name: "LOCAL MAP"}
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
                  {isActive==='WORLD MAP' ?'<Aid/>':'<Ammo/>'}
              </motion.div>
          </AnimatePresence>
                      
      </section>
    )
}

export default MapPage
