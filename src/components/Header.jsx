import React from 'react'
import ChatBotIcon from './ChatBotIcon'

const Header = () => {
  return (
    <div className='bg-[#2B5797] w-full max-w-full border-0 px-4 py-2'>
      <div className='flex items-center gap-3'>
        <ChatBotIcon />
        <h1 className='text-[#b1c0eb] text-lg md:text-xl font-medium truncate'>
          Chat-Bot
        </h1>
      </div>
    </div>
  )
}

export default Header