import React from 'react'
import { Dialogue } from '@/utils/types'
import DialoguesPage from '@/components/client/DialoguesPage'


const page = async() => {

    const { AllDialogues} = await getData()
    
  return (
      <>
          <DialoguesPage AllDialogues={ AllDialogues} />
      </>
  )
}

export default page


/**************************fetech data from server side********************************** */

export const getData = async () => {
    let AllDialogues: Dialogue[] | null = null;
   
    try {
      const response = await fetch("https://wordsapi-nkj3.onrender.com/dialogues");
      const data = await response.json();
      AllDialogues = data;
    } catch (error) {
      console.error("Error fetching quotes:", error);
    }
  
    return {
        AllDialogues
    }
  
  };