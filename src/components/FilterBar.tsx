import React from "react";


interface propsTypes {
    authors: []
    selectedAuthors: []
    setSelectedAuthors: React.Dispatch<React.SetStateAction<[]>>
    handleSearch: ()=>void

}

const FilterBar = ({  authors, selectedAuthors, setSelectedAuthors }: propsTypes) => {

    const chooseFilter = (event: React.MouseEvent<HTMLDivElement>) => {
        const value = event.currentTarget.textContent;
        const foundIndex = selectedAuthors.findIndex(item => item === value);

        if (foundIndex != -1) {
            const updatedAuthors: any = [...selectedAuthors];
            updatedAuthors.splice(foundIndex, 1);
            setSelectedAuthors(updatedAuthors);
        }
        else {
            const updatedAuthors: any = [...selectedAuthors, value]
            setSelectedAuthors(updatedAuthors)
        }


    }
    
    const checkSelected = (value:string) =>{
        const foundIndex = selectedAuthors.findIndex(item => item === value);
        if (foundIndex!=-1) {
            return true;
        }
        else {
            return false
        }
    }

    return (
        <div className="w-[70%] bg-white rounded-md p-[1rem]">

            <div className="flex flex-wrap gap-3 ">
                {
                    authors?.map((authorsName, index) => {
                        return (
                            <div className="px-[0.7rem] min-w-[110px] py-[0.4rem] bg-[white] cursor-pointer rounded-lg text-[black] border-[1px] border-[#a19d9d] "
                                key={`${authorsName + index}`}
                                style={{
                                    borderLeft: checkSelected(authorsName) ? " 6px solid blue" : "",
                                }}
                                onClick={chooseFilter}
                            >
                                {authorsName}
                            </div>
                        )
                    })
                }
            </div>
           

        </div>
    );
};

export default FilterBar;