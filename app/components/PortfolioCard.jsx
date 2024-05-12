import React from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

export const PortfolioCard = ({ imgUri, title, description, gitUri, previewUri }) => {
  return (
    <div>
      <div
      className='h-52 md:h-72 rounded-t-xl relative group' 
      style={{ 
        backgroundImage: `url(${imgUri})`, 
        backgroundSize: "cover", 
      }}>

        <div className='overlay items-center justify-center space-x-3 absolute top-0 left-0 w-full h-full bg-[#181818] 
        bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 
        transition-all duration-500'>
            <Link href='{{gitUri}}'
            className='h-12 w-12 border-2 relative rounded-full
            border-[#ADB7BE] flex hover:border-white group/link'
            
            >
                <CodeBracketIcon className='w-12 h-12 m-auto text-[#ADB7BE] absolute top-1/2 
                left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white' />
            </Link>

            <Link href='{{previewUri}}'
            className='h-12 w-12 border-2 relative rounded-full
            border-[#ADB7BE] flex hover:border-white group/link'
            
            >
                <EyeIcon className='w-12 h-12 m-auto text-[#ADB7BE] absolute top-1/2 
                left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white' />
            </Link>
        
        </div>
      </div>

      <div className='text-white rounded-b-xl bg-[#181818] py-6 px-4'>
        <h5 className='text-xl font-semibold mb-2'>{title}</h5>
        <p className='text-[#ADB7BE]'>{description}</p>
      </div>
    </div>
  )
}
