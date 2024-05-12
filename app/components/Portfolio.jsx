"use client"
import React, { useState, useRef } from 'react';
import { PortfolioCard } from './PortfolioCard';
import PortfolioTag from './PortfolioTag';
import { motion, useInView } from 'framer-motion';

const portfolioData = [
  {
    id: 1,
    imgUri: "/images/1.png",
    title: "My Portfolio", 
    description: "Project 1",
    tag: ["All", "Web"],
    gitUri: "https://github.com",
    previewUri: "https://github.com",
  },
  {
    id: 2,
    imgUri: "/images/2.png",
    title: "My Portfolio 2", 
    description: "Project 2",
    tag: ["All", "Web"],
    gitUri: "https://github.com",
    previewUri: "https://github.com",
  },
  {
    id: 3,
    imgUri: "/images/3.png",
    title: "My Portfolio",
    description: "Project 3",
    tag: ["All", "Web"],
    gitUri: "https://github.com",
    previewUri: "https://github.com",
  },
  {
    id: 4,
    imgUri: "/images/4.png",
    title: "My Portfolio 4",
    description: "Project 4",
    tag: ["All", "Web"],
    gitUri: "https://github.com",
    previewUri: "https://github.com",
  },
  {
    id: 5,
    imgUri: "/images/5.png",
    title: "My Portfolio 5",
    description: "Project 5",
    tag: ["All", "Mobile"],
    gitUri: "https://github.com",
    previewUri: "https://github.com",
  },
  {
    id: 6,
    imgUri: "/images/6.png",
    title: "My Portfolio 6",
    description: "Project 6",
    tag: ["All", "Web", "Mobile"],
    gitUri: "https://github.com",
    previewUri: "https://github.com",
  }
];


const Portfolio = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (tag) => {
    setTag(tag);
  };

  const filterPortfolio = portfolioData.filter((portfolio) =>
    portfolio.tag.includes(tag)
  );

  const cardTypes = { 
      initial: {y: 50, opacity: 0},
      animate: {y: 0, opacity: 1},  
  };

  return (
    <section id='portfolio'>
      {filterPortfolio.length}
    <h2 className='text-center text-4xl font-bold text-white mt-4 mb-3'>Portfolio</h2>
    <div className='text-white flex flex-row justify-center items-center
    gap-2 py-6'>
      <PortfolioTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
      <PortfolioTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
      <PortfolioTag onClick={handleTagChange} name="Mobile" isSelected={tag === "Mobile"} />
    </div>
    <ul ref={ref}
    className='grid md:grid-cols-3 gap-8 md:gap-12'>
      {
      filterPortfolio.map((item, index) =>
        <motion.li
          key={index}
          variants={cardTypes}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={{ duration: 0.3, delay: index * 0.4 }}
        >

        <PortfolioCard 
        key={item.id} 
        title={item.title} 
        imgUri={item.imgUri} 
        description={item.description} 
        gitUri={item.gitUri} 
        previewUri={item.previewUri} />
        </motion.li>
      )}
    </ul>
    </section>
  )
}

export default Portfolio