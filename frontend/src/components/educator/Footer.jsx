import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className='flex md:flex-row flex-col-reverse items-center justify-between text-left w-full px-8 border-t'>
          {/*Left side */}
          <div className='flex md:flex-row flex-col-reverse'>
              <img src={assets.vidyaVahini} alt="vidyaVahini"  className='hidden md:block h-12 mr-2'/>
              <div className='hidden md:block h-7 w-px bg-gray-500/60 mt-2 '>

              </div>
              <p className='py-4 text-center text-xs md:text-sm text-gray-500 px-3'>Copyright 2024 © vidyaVahini. All Right Reserved. </p>
          </div>
          {/* Right side */}
          <div className='flex items-center gap-3 max-md:mt-4'>
            <a href="#"><img src={assets.facebook_icon} alt="facebook_icon" /></a>
            <a href="#"><img src={assets.twitter_icon} alt="twitter_icon" /></a>
            <a href="#"><img src={assets.instagram_icon} alt="instagram_icon" /></a>
          </div>
    </footer>
  )
}

export default Footer