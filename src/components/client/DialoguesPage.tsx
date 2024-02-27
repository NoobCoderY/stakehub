"use client"
import React from 'react';
import RandomCard from '../RandomCard';
import { Dialogue } from '@/utils/types';

interface propsType{
  AllDialogues:Dialogue[]|null
}

const DialoguesPage = ({ AllDialogues }: propsType) => {
  const [randomDialogue, setRandomDialogue] = React.useState<Dialogue>()

  
  const randomDialoguessGenrator = React.useCallback(() => {
    if (AllDialogues  != null)
    {
      const select =AllDialogues [Math.floor(Math.random() * AllDialogues .length)]
      setRandomDialogue(select) 
   }
  }, [AllDialogues])

  React.useEffect(() => {
    randomDialoguessGenrator ()
  },[randomDialoguessGenrator])
  
  return (
    <>
      <div className="  w-full rounded-md flex flex-col items-center justify-center flex-wrap  mx-auto mt-[2rem] px-[1rem]">
        <RandomCard heading="Dialouges Of The Day" text={randomDialogue?.text} series={randomDialogue?.series} character={ randomDialogue?.character} randomGenrator={randomDialoguessGenrator} />
        </div>
    </>
  );
}

export default DialoguesPage;
