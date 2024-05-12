import React from 'react';

const PortfolioTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected ? 'text-white border-lime-400' 
  : 'text-[#ADB7BE] border-slate-600 hover:border-white';

  return (
    <button 
        className={`${buttonStyles} rounded-3xl border-2 px-6 py-2 text-xl cursor-pointer`}
        onClick={() => onClick(name) }
    >
        {name}
    </button>
  )
}

export default PortfolioTag