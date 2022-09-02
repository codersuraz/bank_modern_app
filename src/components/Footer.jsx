import React from 'react'
import { logo } from '../assets'
import styles from '../style'
import { footerLinks, navLinks, socialMedia } from '../constants'


const Footer = () => {
  return (
    <footer className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className='flex-1 flex flex-col justify-start mr-10'>
          <img src={logo} alt="" className='w-[266px] h-[72px] object-contain'/>
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>A new way to make payments easy, reliable and secure.</p>
        </div>

        <div className="flex flex-[1.5] w-full flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((navlink) => (
            <div key={navlink.key} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
                <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white mb-4'>{navlink.title}</h4>
                <ul className='flex flex-col gap-2'>
                  {navlink.links.map((link) => (
                    <li key={link.name} className={`font-poppins font-normal text-base leading-[24px] text-dimWhite hover:text-secondary cursor-pointer`}>
                      {link.name}
                    </li>
                  ))}
                </ul>
            </div>
          ))}
        </div>
      </div>
        <div className='w-full flex items-center justify-between md:flex-row flex-col pt-6 border-t border-t-[#3f3f45]'>
          <p className='font-poppins font-normal text-base text-center leading-[27px] text-white'>2022 Hoobank. All right reserved.</p>
          <div className="flex flex-row md:mt-0 mt-6 gap-4">
            {socialMedia.map(media => (
              <img src={media.icon} key={media.id} className={`w-[21px] h-[21px] object-contain cursor-pointer`}/>
            ))}
          </div>
        </div>
    </footer>
  )
}

export default Footer