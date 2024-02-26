"use client";
import React from "react";
import FilterModal from "@/components/FilterModal";
import QouteCard from "@/components/QouteCard";


const Proverbs = () => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    let authors:any=[]
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

    return (
        <>
            <div className="  w-full rounded-md flex flex-col items-center justify-center  mx-auto mt-[2rem] px-[1rem]">
            <div className=" p-[1rem] flex items-center ">
                <div className="w-[100%] bg-white rounded-lg px-8 py-2 cursor-pointer text-[1rem] font-bold" onClick={openModal}>
                    Click for Apply Filter
               </div>
            </div>

            <div className="border-[1px] border-[#fff] w-[60%] h-[auto]  overflow-scroll bg-white p-[1.5rem] rounded-lg no-scrollbar">
                <header className="text-center text-4xl p-[0.7rem] font-bold">Quote of the Day</header>
                <div className="w-[90%] text-[1.2rem]">Never give up because you never know if the next try is going to be the one that works.kkkkkkk kkkkkkkkk kkkkkkkkkkkkkkkk kkkkkkkkkkkk
                 
                </div>
                <div className="flex justify-end mt-[10px] text-[1.2rem] font-semibold"><p>__Mary Kay Ash</p></div>
            </div>
            </div>
            <FilterModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} openModal={openModal} closeModal={closeModal} authors={authors} />
            
            
        </>
    );
};

export default Proverbs;
