import React from 'react'

interface propsType{
  id:string
  text: string
  author:string
}

const QouteCard = ({text,author,id}:propsType) => {
  return (
      <>
            <div className="  basis-[100%] md:basis-[50%] lg:basis-[30%] rounded-md flex flex-col items-center justify-center  mx-auto mt-[2rem] px-[1rem]" key={id}>
            <div className="border-[1px] border-[#fff] w-[100%] lg:h-[44vh] md:h-[35vh] h-[30vh] overflow-scroll bg-white p-[1.5rem] rounded-lg no-scrollbar">
                <header className="text-center text-4xl p-[0.7rem] font-bold">Quote</header>
                <div className="w-[90%] text-[1.2rem]">{text}
                </div>
          <div className="flex justify-end mt-[10px] text-[1.2rem] font-semibold"><p>__{author}</p></div>
            </div>
            </div>
      </>
  )
}

export default QouteCard