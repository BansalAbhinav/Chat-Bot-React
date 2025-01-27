import React from 'react'
import ChatBotIcon from './ChatBotIcon'

const Header = () => {
  return (
    <div className=' bg-[#2B5797] flex items-center justify-between p-[6px]  border-0'>
      <div className='flex gap-[10px] p-4 items-center '>
      <ChatBotIcon />
      <h1 className='text-[#b1c0eb]  ' >Chat-Bot</h1>
      </div>
    </div>
  )
}

export default Header
