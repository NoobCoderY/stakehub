import React from "react";
import Modal from "react-modal";

interface propsTypes{
    modalIsOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    openModal:()=>void,
    closeModal: () => void,
    authors:[]
}

const FilterModal = ({modalIsOpen,setIsOpen,openModal,closeModal,authors}:propsTypes) => {

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={(e) => {
                    e.stopPropagation(); setIsOpen(false)
                }}
                overlayClassName="custom-overlay"
                ariaHideApp={false}
            >
                <div className="flex flex-wrap gap-3">
                    {
                        [1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3].map(() => {
                            return (
                                <div className="px-[0.6rem] py-[0.4rem] bg-[white] cursor-pointer rounded-xl text-[black]">Yash Diwaker</div>
                            )
                        })
                   }
                </div>
                
                <div className="flex mt-9">
                <div className="m-auto px-[1rem] py-[0.4rem] bg-[#c04da9] cursor-pointer rounded-xl text-[black]" onClick={closeModal}>
                   Apply filter
                </div>
                </div>
               
            </Modal>
        </div>
    );
};

export default FilterModal;