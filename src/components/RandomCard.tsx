'use-client'
import React from 'react';
import { GrDocumentSound } from "react-icons/gr";
import { IoReload } from "react-icons/io5";

const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

interface propsType {
    heading: string
    text: string |undefined
    series?: string |undefined
    author?: string |undefined
    character?: string |undefined
    origin?: string |undefined
    randomGenrator?:() => void

}



const RandomCard = (props: propsType) => {

    const [speaking, setSpeaking] = React.useState(false);
    const [_window, setWindowObject] = React.useState(null);
    let synth: any
    
    if (isBrowser()) {
        synth=window.speechSynthesis
    }



    const speakText = (text:any) => {
        if (synth.speaking) {
            return;
        }

        const utterance = new SpeechSynthesisUtterance(text);
        synth.speak(utterance);
        setSpeaking(true);

        utterance.onend = () => {
            setSpeaking(false);
        };
    };

  
    React.useEffect(() => {
        return () => {
            synth.cancel();
            setSpeaking(false);
        };
    }, []);



    return (
        <>
            <div className="border-[1px] border-[#fff] w-[60%] h-[auto]  overflow-scroll bg-white p-[1.5rem] rounded-lg no-scrollbar mt-5 mb-5">
                <header className="text-center text-4xl p-[0.7rem] font-bold">{props.heading}</header>
                <div className="w-[90%] text-[1.2rem] mt-5">{props.text}
                </div>
                <div className="flex justify-end mt-[10px] text-[1.2rem] font-semibold"
                    style={{ display: props.author == undefined && props.origin == undefined ? "none" : "flex" }}
                ><p>{props.author != undefined ? `__${props.author}` : `__${props.origin}`}</p></div>
                  {props.series && (
                <div className='flex justify-between px-10 text-xl font-semibold mt-4'>
                    <p>{props.series}</p>
                    <p>__{props.character}</p>
                </div>
                )}
                <hr className='w-[100%] mt-3 mb-3 border-[1px]   '/>
                <div className='flex justify-center items-center'>
                    <div className='flex gap-10'>
                        <span className='cursor-pointer' onClick={()=>{speakText(props.text)}}><GrDocumentSound size={25} /></span>
                        <span className='cursor-pointer' onClick={props.randomGenrator}><IoReload size={25}/></span>
                      </div>
                   </div>
            </div>
          
        </>
    );
}

export default RandomCard;
