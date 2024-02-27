"use client";
import React from 'react'
import RandomCard from '../RandomCard';
import QouteCard from '../QouteCard';
import FilterBar from '../FilterBar';
import { Quote } from '@/utils/types';

interface propsType {
    quotes: Quote[] | null,
    authorsData: String[] | null
}

const QuotesPage = ({ quotes, authorsData }: propsType) => {
    const [randomQuote, setRandomQuote] = React.useState<Quote>()
    const [filterShow, setFilterShow] = React.useState<boolean>(false)
    const [authors, setAuthors] = React.useState<any>()
    const [selectedAuthors, setSelectedAuthors] = React.useState<[]>([])
    const [showAllQoutes, setShowAllQoutes] = React.useState<boolean>(false)


    React.useEffect(() => {
        if (authorsData) {
            setAuthors([...authorsData, "All"]);
        }
    }, [])


    const handleSearch = () => {

        const ALlFilterCheck = selectedAuthors.find(value => value == "All")

        if (ALlFilterCheck) {
           
            return quotes;
        }
        const newFilteredQoutes = quotes?.filter((item) => {
            return item.author === selectedAuthors.find(value => value == item.author)
        })
       return newFilteredQoutes
    }



    React.useEffect(() => {
        if (quotes && selectedAuthors.length > 0) {
            setShowAllQoutes(true);
        } else {
            setShowAllQoutes(false);
        }
    }, [handleSearch]);


    const randomQuotesGenerator = React.useCallback(() => {
        if (quotes && quotes.length > 0) {
            const select = quotes[Math.floor(Math.random() * quotes.length)];
            setRandomQuote(select);
        }
    }, [quotes]);

    React.useEffect(() => {
        randomQuotesGenerator();
    }, [randomQuotesGenerator]);

    const showFilterBar = () => {
        setFilterShow(!filterShow)
    }
    return (
        <>
            <div className="  w-full rounded-md flex flex-col items-center justify-center flex-wrap  mx-auto mt-[2rem] px-[1rem]">
                <div className=" p-[1rem] flex items-center ">
                    <div className="w-[100%] bg-white rounded-lg px-8 py-2 cursor-pointer text-[1rem] font-bold" onClick={() => {
                        showFilterBar()
                    }}>
                        Click for Apply Filter
                    </div>
                </div>
                {filterShow && (<FilterBar authors={authors} selectedAuthors={selectedAuthors} setSelectedAuthors={setSelectedAuthors} handleSearch={handleSearch} />)}
                {showAllQoutes ? <div className='flex flex-wrap'>
                    {handleSearch()?.map((qoutesData, index) => {
                        return (<QouteCard text={qoutesData.text} id={qoutesData.id} author={qoutesData.author} />)
                    })}
                </div> : <RandomCard text={randomQuote?.text} author={randomQuote?.author} heading='Qoute Of The Day' randomGenrator={randomQuotesGenerator} />}
            </div>

        </>
    )
}

export default QuotesPage