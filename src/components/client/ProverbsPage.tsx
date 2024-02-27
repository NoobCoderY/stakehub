"use client";
import React from 'react'
import RandomCard from '../RandomCard';
import { Proverbs } from '@/utils/types';




const ProverbsPage = () => {
  const [randomProverbs, setRandomProverbs] = React.useState<Proverbs>()
  const [proverbs, setProverbs] = React.useState<Proverbs[]>()

  const fetchProverbs = async () => {
    const response = await fetch("https://wordsapi-nkj3.onrender.com/proverbs");
    const data = await response.json();
    setProverbs(data)
    
  }
  
  /****************just to show we can also fetch this type********************* */

  React.useEffect(() => {
    fetchProverbs()
   
  },[])
  
  const randomProverbsGenrator = React.useCallback(() => {
    if (proverbs != null)
    {
      const select = proverbs[Math.floor(Math.random() * proverbs.length)]
      setRandomProverbs(select) 
   }
  },[proverbs])

  React.useEffect(() => {
      randomProverbsGenrator()
  },[randomProverbsGenrator])

  
  
  return (
    <>
      <div className="  w-full rounded-md flex flex-col items-center justify-center flex-wrap  mx-auto mt-[2rem] px-[1rem]">
        <RandomCard heading="Proverbs Of The Day" text={randomProverbs?.text} origin={randomProverbs?.origin} randomGenrator={randomProverbsGenrator}/>
        </div>
    </>
  )
}

export default ProverbsPage